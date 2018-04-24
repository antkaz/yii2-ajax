# yii2-ajax

This extension allows you to create forms in the Twitter Bootstrap modal window.

# Installation

The preferred way to install this extension is through composer.

Run

```bash
php composer.phar require antkaz/yii2-ajax
```

or add

```
"antkaz/yii2-ajax": "dev-master"
```

to the **require** section of your `composer.json` file.

## Usage

1. Register asset bundle with a view by calling the `antkaz\ajax\modalBundle::register()` method. For example:

    ```php
    <?php
    use antkaz\ajax\ModalBundle;
    ModalBundle::register($this); // $this represents the view object
    ?>
    ```
    
2. Аdd the modal widget to your view file:

    ```php
    <?= yii\bootstrap\Modal::widget([
        'id' => 'modal',
        'clientEvents' => [
            'submit.result.bs.modal' => 'function(event, body) {$(this).modal("hide")}'
        ]
    ]); ?>
    ```
    
3. Add a link that will open the modal window:
    
    ```php
    <?= \yii\helpers\Html::a('Create', ['create'], [
        'class' => 'btn btn-success',
        'data-toggle' => 'ajax-modal', // outputs the result to the modal window
        'data-target' => '#modal', // ID modal
        'data-title' => 'Create item' // custom modal title
    ]); ?>
    ```
    
4. Add the `data-ajax` attribute in the ActiveForm options:
    
    ```php
    <?php $form = ActiveForm::begin([
        'options' => [
            'data-ajax' => 1
        ],
    ]); ?>
    
    // . . .
    
    <?php ActiveForm::end() ?>
    ```
    
5. Create an action in your controller that will handle this request:
    
    ```php
    public function actionCreate()
    {
        $model = new Model();
    
        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['index']); // optional
        }
    
        return $this->renderView('create', [
            'model' => $model,
        ]);
    
    }
    
    protected function renderView($view, $params = [])
    {
        if (Yii::$app->request->isAjax) {
            return $this->renderAjax($view, $params);
        }
        return $this->render($view, $params);
    }
    ```
    
## Events

Added the following events, in addition to those that already [exist](https://getbootstrap.com/docs/3.3/javascript/#modals-events)

* `submit.result.bs.modal` - This event is triggered after the form has been successfully submitted. The second parameter is the content of the response:
    
    ```js
    $('#myModal').on('submit.result.bs.modal', function (event, bodyResponse) {
      // do something...
    })
    ```
