<?php
/**
 * @link https://github.com/antkaz/yii2-ajax
 * @copyright Copyright (c) 2018 Anton Kazarinov
 * @license https://github.com/antkaz/yii2-ajax/blob/master/LICENSE
 */

namespace antkaz\ajax;

/**
 * Modal renders a modal window that can be toggled by clicking on a link and loading the content via ajax request.
 *
 * @since 1.3
 *
 * @author Anton Kazarinov <askazarinov@gmail.com>
 * @package antkaz\ajax
 */
class Modal extends \yii\bootstrap4\Modal
{
    /**
     * @inheritdoc
     */
    public function init()
    {
        $this->registerJs();

        parent::init();
    }

    /**
     * Registers a specific asset bundles.
     */
    protected function registerJs()
    {
        $view = $this->getView();
        ModalBundle::register($view);
    }
}