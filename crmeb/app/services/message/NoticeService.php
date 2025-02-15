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

namespace app\services\message;


use app\jobs\notice\EnterpriseWechatJob;
use app\jobs\notice\PrintJob;
use app\services\BaseServices;
use app\services\order\StoreOrderCartInfoServices;
use app\services\system\SystemNotificationServices;
use crmeb\services\CacheService;
use think\exception\ValidateException;


class NoticeService extends BaseServices
{

    /**
     * 发送消息类型
     * @var array
     */
//    protected $type = [
//        'is_sms' => NoticeSmsService::class,
//        'is_system' => SystemSendServices::class,
//        'is_wechat' => WechatTemplateService::class,
//        'is_routine' => RoutineTemplateServices::class,
//        'is_ent_wechat' => EntWechatServices::class,
//    ];

    /**
     * @var array
     */
    protected $notceinfo;

    /**
     * @var string
     */
    protected $event;

    /**
     * @param string $event
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function setEvent(string $event)
    {
        if ($this->event != $event) {
            $this->notceinfo = CacheService::get('NOTCE_' . $event);
            if (!$this->notceinfo) {
                /** @var SystemNotificationServices $services */
                $services = app()->make(SystemNotificationServices::class);
                $notceinfo = $services->getOneNotce(['mark' => $event]);
                $this->notceinfo = $notceinfo ? $notceinfo->toArray() : [];
                CacheService::set('NOTCE_' . $event, $this->notceinfo);
            }
            $this->event = $event;
        }
        return $this;
    }

    /**
     * @param array $notceinfo
     * @param $data
     * @param string $msgtype
     */
    //企业微信群机器人
    public function EnterpriseWechatSend($data)
    {
        if ($this->notceinfo['is_ent_wechat'] == 1 && $this->notceinfo['url'] !== '') {
            $url = $this->notceinfo['url'];
            $ent_wechat_text = $this->notceinfo['ent_wechat_text'];
            EnterpriseWechatJob::dispatchDo('doJob', [$data, $url, $ent_wechat_text]);

        }
    }

    /**
     * 打印订单
     * @param $order
     * @param array $cartId
     */
    public function orderPrint($order)
    {
        /** @var StoreOrderCartInfoServices $cartServices */
        $cartServices = app()->make(StoreOrderCartInfoServices::class);
        $product = $cartServices->getCartInfoPrintProduct($order['cart_id']);
        if (!$product) {
            throw new ValidateException('订单商品获取失败,无法打印!');
        }
        $configdata = [
            'clientId' => sys_config('printing_client_id', ''),
            'apiKey' => sys_config('printing_api_key', ''),
            'partner' => sys_config('develop_id', ''),
            'terminal' => sys_config('terminal_number', '')
        ];
        $switch = (bool)sys_config('pay_success_printing_switch');
        if (!$switch) {
            throw new ValidateException('小票打印未开启!');
        }
        if (!$configdata['clientId'] || !$configdata['apiKey'] || !$configdata['partner'] || !$configdata['terminal']) {
            throw new ValidateException('请先配置小票打印开发者');
        }
        PrintJob::dispatch('doJob', ['yi_lian_yun', $configdata, $order, $product]);
    }


}
