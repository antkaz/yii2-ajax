<?php
/**
 * @link https://github.com/antkaz/yii2-ajax
 * @copyright Copyright (c) 2018 Anton Kazarinov
 * @license https://github.com/antkaz/yii2-ajax/blob/master/LICENSE
 */

namespace antkaz\ajax;

use yii\web\AssetBundle;

/**
 * ModalBundle registers ajax-modal.js to load controller actions in the modal bootstrap.
 *
 * @author Anton Kazarinov <askazarinov@gmail.com>
 * @package antkaz\ajax
 */
class ModalBundle extends AssetBundle
{
    public $sourcePath = '@antkaz/ajax/assets';

    public $css = [
        YII_ENV_DEV ? 'css/ajax-modal.css' : 'css/ajax-modal.min.css',
    ];

    public $js = [
        YII_ENV_DEV ? 'js/ajax-modal.js' : 'js/ajax-modal.min.js',
    ];

    public $depends = [
        'yii\bootstrap\BootstrapAsset',
        'yii\bootstrap\BootstrapPluginAsset',
    ];
}