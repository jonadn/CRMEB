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

namespace app\model\system;

use crmeb\basic\BaseModel;
use crmeb\traits\ModelTrait;
use think\Model;

/**
 * 系统等级设置模型
 * Class SystemUserLevel
 * @package app\model\system
 */
class SystemNotification extends BaseModel
{
    use ModelTrait;

    /**
     * 数据表主键
     * @var string
     */
    protected $pk = 'id';

    /**
     * 模型名称
     * @var string
     */
    protected $name = 'system_notification';

    public function searchTypeAttr($query, $value)
    {
        if ($value != '') {
            $query->where('type', $value);
        }
    }

    public function searchNameAttr($query, $value)
    {
        if ($value != '') {
            $query->whereLike('name|title', "%$value%");
        }
    }

}
