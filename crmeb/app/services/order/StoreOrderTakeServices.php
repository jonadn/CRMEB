<?php
// +----------------------------------------------------------------------
// | CRMEB [ CRMEB赋能开发者，助力企业发展 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2016~2020 https://www.crmeb.com All rights reserved.
// +----------------------------------------------------------------------
// | Licensed CRMEB并不是自由软件，未经许可不能去掉CRMEB相关版权
// +----------------------------------------------------------------------
// | Author: CRMEB Team <admin@crmeb.com>
// +----------------------------------------------------------------------

namespace app\services\order;


use app\dao\order\StoreOrderDao;
use app\services\BaseServices;
use app\services\user\MemberCardServices;
use app\services\user\UserBillServices;
use app\services\user\UserBrokerageFrozenServices;
use app\services\user\UserServices;
use crmeb\utils\Str;
use think\exception\ValidateException;
use think\facade\Log;

/**
 * 订单收货
 * Class StoreOrderTakeServices
 * @package app\services\order
 * @method get(int $id, ?array $field = []) 获取一条
 */
class StoreOrderTakeServices extends BaseServices
{
    /**
     * 构造方法
     * StoreOrderTakeServices constructor.
     * @param StoreOrderDao $dao
     */
    public function __construct(StoreOrderDao $dao)
    {
        $this->dao = $dao;
    }

    /**
     * 用户订单收货
     * @param $uni
     * @param $uid
     * @return bool
     */
    public function takeOrder(string $uni, int $uid)
    {
        $order = $this->dao->getUserOrderDetail($uni, $uid);
        if (!$order) {
            throw new ValidateException('订单不存在!');
        }
        /** @var StoreOrderServices $orderServices */
        $orderServices = app()->make(StoreOrderServices::class);
        $order = $orderServices->tidyOrder($order);
        if ($order['_status']['_type'] != 2) {
            throw new ValidateException('订单状态错误!');
        }
        //存在拆分发货 需要分开收货
        if ($this->dao->count(['pid' => $order['id']])) {
            throw new ValidateException('拆分发货，请去订单详情中包裹确认收货');
        }
        $order->status = 2;
        /** @var StoreOrderStatusServices $statusService */
        $statusService = app()->make(StoreOrderStatusServices::class);
        $res = $order->save() && $statusService->save([
                'oid' => $order['id'],
                'change_type' => 'user_take_delivery',
                'change_message' => '用户已收货',
                'change_time' => time()
            ]);
        $res = $res && $this->storeProductOrderUserTakeDelivery($order);
        if (!$res) {
            throw new ValidateException('收货失败');
        }
        return $order;
    }

    /**
     * 订单确认收货
     * @param $order
     * @return bool
     */
    public function storeProductOrderUserTakeDelivery($order, bool $isTran = true)
    {
        /** @var UserServices $userServices */
        $userServices = app()->make(UserServices::class);
        $userInfo = $userServices->get((int)$order['uid']);
        //获取购物车内的商品标题
        /** @var StoreOrderCartInfoServices $orderInfoServices */
        $orderInfoServices = app()->make(StoreOrderCartInfoServices::class);
        $storeName = $orderInfoServices->getCarIdByProductTitle($order['id'], $order['cart_id']);
        $storeTitle = Str::substrUTf8($storeName, 20, 'UTF-8', '');

        $res = $this->transaction(function () use ($order, $userInfo, $storeTitle) {
            //赠送积分
            $res1 = $this->gainUserIntegral($order, $userInfo, $storeTitle);
            //返佣
            $res2 = $this->backOrderBrokerage($order, $userInfo);
            //经验
            $res3 = $this->gainUserExp($order, $userInfo);
            if (!($res1 && $res2 && $res3)) {
                throw new ValidateException('收货失败!');
            }
            return true;
        }, $isTran);

        if ($res) {
            try {
                // 收货成功后置队列
                event('order.orderTake', [$order, $userInfo, $storeTitle]);
                //收货给用户发送消息
                event('notice.notice', [['order' => $order, 'storeTitle' => $storeTitle], 'order_take']);
                //收货给客服发送消息
                event('notice.notice', [['order' => $order, 'storeTitle' => $storeTitle], 'send_admin_confirm_take_over']);
            } catch (\Throwable $exception) {

            }
            return true;
        } else {
            return false;
        }
    }

    /**
     * 赠送积分
     * @param $order
     * @param $userInfo
     * @param $storeTitle
     * @return bool
     */
    public function gainUserIntegral($order, $userInfo, $storeTitle)
    {
        $res2 = true;
        if (!$userInfo) {
            return true;
        }
        // 营销产品送积分
        if (isset($order['combination_id']) && $order['combination_id']) {
            return true;
        }
        if (isset($order['seckill_id']) && $order['seckill_id']) {
            return true;
        }
        if (isset($order['bargain_id']) && $order['bargain_id']) {
            return true;
        }
        /** @var UserBillServices $userBillServices */
        $userBillServices = app()->make(UserBillServices::class);
        if ($order['gain_integral'] > 0) {
            $res2 = false != $userBillServices->income('pay_give_integral', $order['uid'], $order['gain_integral'], $userInfo['integral'], $order['id']);
        }
        $order_integral = 0;
        $res3 = true;
        $order_give_integral = sys_config('order_give_integral');
        if ($order['pay_price'] && $order_give_integral) {
            //会员消费返积分翻倍
            if ($userInfo['is_money_level'] > 0) {
                //看是否开启消费返积分翻倍奖励
                /** @var MemberCardServices $memberCardService */
                $memberCardService = app()->make(MemberCardServices::class);
                $integral_rule_number = $memberCardService->isOpenMemberCard('integral');
                if ($integral_rule_number) {
                    $order_integral = bcmul((string)$order['pay_price'], (string)$integral_rule_number, 2);
                }
            }
            $order_integral = bcmul((string)$order_give_integral, (string)($order_integral ? $order_integral : $order['pay_price']), 0);

            $res3 = false != $userBillServices->income('order_give_integral', $order['uid'], $order_integral, $userInfo['integral'], $order['id']);
        }
        $give_integral = $order_integral + $order['gain_integral'];
        if ($give_integral > 0) {
            $integral = $userInfo['integral'] + $give_integral;
            $userInfo->integral = $integral;
            $res1 = false != $userInfo->save();
            $res = $res1 && $res2 && $res3;
            event('notice.notice', [['order' => $order, 'storeTitle' => $storeTitle, 'give_integral' => $give_integral, 'integral' => $integral], 'integral_accout']);
            return $res;
        }
        return true;
    }

    /**
     * 一级返佣
     * @param $orderInfo
     * @param $userInfo
     * @return bool
     */
    public function backOrderBrokerage($orderInfo, $userInfo)
    {
        // 当前订单｜用户不存在  直接返回
        if (!$orderInfo || !$userInfo) {
            return true;
        }
        //商城分销功能是否开启 0关闭1开启
        if (!sys_config('brokerage_func_status')) return true;

        // 营销产品不返佣金
        if (isset($orderInfo['combination_id']) && $orderInfo['combination_id']) {
            return true;
        }
        if (isset($orderInfo['seckill_id']) && $orderInfo['seckill_id']) {
            return true;
        }
        if (isset($orderInfo['bargain_id']) && $orderInfo['bargain_id']) {
            return true;
        }
        //绑定失效
        if (isset($orderInfo['spread_uid']) && $orderInfo['spread_uid'] == -1) {
            return true;
        }
        //是否开启自购返佣
        $isSelfBrokerage = sys_config('is_self_brokerage', 0);
        if (!isset($orderInfo['spread_uid']) || !$orderInfo['spread_uid']) {//兼容之前订单表没有spread_uid情况
            //没开启自购返佣 没有上级 或者 当用用户上级时自己  直接返回
            if (!$isSelfBrokerage && (!$userInfo['spread_uid'] || $userInfo['spread_uid'] == $orderInfo['uid'])) {
                return true;
            }
            $one_spread_uid = $isSelfBrokerage ? $userInfo['uid'] : $userInfo['spread_uid'];
        } else {
            $one_spread_uid = $orderInfo['spread_uid'];
        }
        //检测是否是分销员
        /** @var UserServices $userServices */
        $userServices = app()->make(UserServices::class);
        if (!$userServices->checkUserPromoter($one_spread_uid)) {
            return $this->backOrderBrokerageTwo($orderInfo, $userInfo, $isSelfBrokerage);
        }

        $onebrokerage = $orderInfo['one_brokerage'] ?? 0;
        if ($onebrokerage) {//订单中取出
            $brokeragePrice = $onebrokerage;
        } else {
            $cartId = is_string($orderInfo['cart_id']) ? json_decode($orderInfo['cart_id'], true) : $orderInfo['cart_id'];
            /** @var StoreOrderCartInfoServices $cartServices */
            $cartServices = app()->make(StoreOrderCartInfoServices::class);
            $brokeragePrice = $cartServices->getProductBrokerage($cartId);
        }

        // 返佣金额小于等于0 直接返回不返佣金
        if ($brokeragePrice <= 0) {
            return true;
        }

        //TODO 获取上级推广员信息
        $spreadPrice = $userServices->value(['uid' => $one_spread_uid], 'brokerage_price');
        // 上级推广员返佣之后的金额
        $balance = bcadd($spreadPrice, $brokeragePrice, 2);
        // 添加推广记录
        /** @var UserBillServices $userBillServices */
        $userBillServices = app()->make(UserBillServices::class);
        $res1 = $userBillServices->income('get_brokerage', $one_spread_uid, [
            'nickname' => $userInfo['nickname'],
            'pay_price' => floatval($orderInfo['pay_price']),
            'number' => floatval($brokeragePrice)
        ], $balance, $orderInfo['id']);
        // 添加用户余额
        $res2 = $userServices->bcInc($one_spread_uid, 'brokerage_price', $brokeragePrice, 'uid');
        if ($res2) {
            /** @var UserBrokerageFrozenServices $frozenService */
            $frozenService = app()->make(UserBrokerageFrozenServices::class);
            $res2 = $frozenService->saveBrokage($one_spread_uid, $brokeragePrice, $res1->id, $orderInfo['order_id']);
            //给上级发送获得佣金的模板消息
            $this->sendBackOrderBrokerage($orderInfo, $one_spread_uid, $brokeragePrice);
        }
        // 一级返佣成功 跳转二级返佣
        $res = $res1 && $res2 && $this->backOrderBrokerageTwo($orderInfo, $userInfo, $isSelfBrokerage);
        return $res;
    }


    /**
     * 二级推广返佣
     * @param $orderInfo
     * @param $userInfo
     * @param int $isSelfbrokerage
     * @return bool
     */
    public function backOrderBrokerageTwo($orderInfo, $userInfo, $isSelfbrokerage = 0)
    {
        //绑定失效
        if (isset($orderInfo['spread_two_uid']) && $orderInfo['spread_two_uid'] == -1) {
            return true;
        }
        /** @var UserServices $userServices */
        $userServices = app()->make(UserServices::class);
        if (isset($orderInfo['spread_two_uid']) && $orderInfo['spread_two_uid']) {
            $spread_two_uid = $orderInfo['spread_two_uid'];
        } else {
            // 获取上推广人
            $userInfoTwo = $userServices->get((int)$userInfo['spread_uid']);
            // 订单｜上级推广人不存在   直接返回
            if (!$orderInfo || !$userInfoTwo) {
                return true;
            }
            //没开启自购返佣 或者 上推广人没有上级  或者 当用用户上上级时自己  直接返回
            if (!$isSelfbrokerage && (!$userInfoTwo['spread_uid'] || $userInfoTwo['spread_uid'] == $orderInfo['uid'])) {
                return true;
            }
            $spread_two_uid = $isSelfbrokerage ? $userInfoTwo['uid'] : $userInfoTwo['spread_uid'];
        }
        // 获取后台分销类型  1 指定分销 2 人人分销
        if (!$userServices->checkUserPromoter($spread_two_uid)) {
            return true;
        }
        $twobrokerage = $orderInfo['two_brokerage'] ?? 0;
        if ($twobrokerage) {
            $brokeragePrice = $twobrokerage;
        } else {//兼容之前下单未计算佣金类订单 重新计算一次
            $cartId = is_string($orderInfo['cart_id']) ? json_decode($orderInfo['cart_id'], true) : $orderInfo['cart_id'];
            /** @var StoreOrderCartInfoServices $cartServices */
            $cartServices = app()->make(StoreOrderCartInfoServices::class);
            $brokeragePrice = $cartServices->getProductBrokerage($cartId, false);
        }
        // 返佣金额小于等于0 直接返回不返佣金
        if ($brokeragePrice <= 0) {
            return true;
        }
        // 获取上上级推广员信息
        $spreadPrice = $userServices->value(['uid' => $spread_two_uid], 'brokerage_price');
        // 获取上上级推广员返佣之后余额
        $balance = bcadd($spreadPrice, $brokeragePrice, 2);
        // 添加返佣记录
        /** @var UserBillServices $userBillServices */
        $userBillServices = app()->make(UserBillServices::class);
        $res1 = $userBillServices->income('get_two_brokerage', $spread_two_uid, [
            'nickname' => $userInfo['nickname'],
            'pay_price' => floatval($orderInfo['pay_price']),
            'number' => floatval($brokeragePrice)
        ], $balance, $orderInfo['id']);
        if ($res1) {
            /** @var UserBrokerageFrozenServices $frozenService */
            $frozenService = app()->make(UserBrokerageFrozenServices::class);
            $res1 = $frozenService->saveBrokage($spread_two_uid, $brokeragePrice, $res1->id, $orderInfo['order_id']);
        }
        // 添加用户余额
        $res2 = $userServices->bcInc($spread_two_uid, 'brokerage_price', $brokeragePrice, 'uid');
        //给上级发送获得佣金的模板消息
        $this->sendBackOrderBrokerage($orderInfo, $spread_two_uid, $brokeragePrice);
        return $res1 && $res2;
    }

    /**
     * 佣金到账发送模板消息
     * @param $orderInfo
     * @param $spread_uid
     * @param $brokeragePrice
     */
    public function sendBackOrderBrokerage($orderInfo, $spread_uid, $brokeragePrice, string $type = 'order')
    {
        /** @var UserServices $userServices */
        $userServices = app()->make(UserServices::class);
        $userType = $userServices->value(['uid' => $spread_uid], 'user_type');
        if ($type == 'order') {
            /** @var StoreOrderCartInfoServices $storeOrderCartInfoService */
            $storeOrderCartInfoService = app()->make(StoreOrderCartInfoServices::class);
            $cartInfo = $storeOrderCartInfoService->getOrderCartInfo($orderInfo['id']);
            if ($cartInfo) {
                $cartInfo = array_column($cartInfo, 'cart_info');
                $goodsPrice = 0;
                $goodsName = "";
                foreach ($cartInfo as $k => $v) {
                    $goodsName .= $v['productInfo']['store_name'];
                    $goodsPrice += $v['productInfo']['price'];
                }
            }
        } else {
            $goodsName = '推广用户获取佣金';
            $goodsPrice = $brokeragePrice;
        }
        //提醒推送
        event('notice.notice', [['spread_uid' => $spread_uid, 'userType' => $userType, 'brokeragePrice' => $brokeragePrice, 'goodsName' => $goodsName, 'goodsPrice' => $goodsPrice, 'add_time' => $orderInfo['add_time'] ?? time()], 'order_brokerage']);
    }


    /**
     * 赠送经验
     * @param $order
     * @param $userInfo
     * @return bool
     */
    public function gainUserExp($order, $userInfo)
    {
        if (!$userInfo) {
            return true;
        }
        //用户等级是否开启
        if (!sys_config('member_func_status', 1)) {
            return true;
        }
        /** @var UserBillServices $userBillServices */
        $userBillServices = app()->make(UserBillServices::class);
        $order_exp = 0;
        $res3 = true;
        $order_give_exp = sys_config('order_give_exp');
        if ($order['pay_price'] && $order_give_exp) {
            $order_exp = bcmul($order_give_exp, (string)$order['pay_price'], 2);
            $res3 = false != $userBillServices->income('order_give_exp', $order['uid'], $order_exp, $userInfo['exp'], $order['id']);
        }
        $res = true;
        if ($order_exp > 0) {
            $exp = $userInfo['exp'] + $order_exp;
            $userInfo->exp = $exp;
            $res1 = false != $userInfo->save();
            $res = $res1 && $res3;
        }

        //用户升级事件
        event('user.userLevel', [$order['uid']]);

        return $res;
    }

    /**
     * 自动收货
     * @return bool
     */
    public function autoTakeOrder()
    {
        //7天前时间戳
        $systemDeliveryTime = (int)sys_config('system_delivery_time', 0);
        //0为取消自动收货功能
        if ($systemDeliveryTime == 0) {
            return true;
        }
        $sevenDay = strtotime(date('Y-m-d H:i:s', strtotime('-' . $systemDeliveryTime . ' day')));
        /** @var StoreOrderStoreOrderStatusServices $service */
        $service = app()->make(StoreOrderStoreOrderStatusServices::class);
        $orderList = $service->getTakeOrderIds([
            'change_time' => $sevenDay,
            'is_del' => 0,
            'paid' => 1,
            'status' => 1,
            'change_type' => ['delivery_goods', 'delivery_fictitious', 'delivery']
        ]);
        foreach ($orderList as $order) {
            if ($order['status'] == 2) {
                continue;
            }
            if ($order['paid'] == 1 && $order['status'] == 1) {
                $data['status'] = 2;
            } else if ($order['pay_type'] == 'offline') {
                $data['status'] = 2;
            } else {
                continue;
            }
            try {
                $this->transaction(function () use ($order, $data) {
                    /** @var StoreOrderStatusServices $statusService */
                    $statusService = app()->make(StoreOrderStatusServices::class);
                    $res = $this->dao->update($order['id'], $data) && $statusService->save([
                            'oid' => $order['id'],
                            'change_type' => 'take_delivery',
                            'change_message' => '已收货[自动收货]',
                            'change_time' => time()
                        ]);
                    $res = $res && $this->storeProductOrderUserTakeDelivery($order, false);
                    if (!$res) {
                        throw new ValidateException('订单号' . $order['order_id'] . '自动收货失败');
                    }
                });
            } catch (\Throwable $e) {
                Log::error('自动收货失败,失败原因：' . $e->getMessage());
            }

        }
    }
}
