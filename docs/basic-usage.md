# Basic usage

1. Аdd the modal widget to your view file:

    ```php
    <?= \antkaz\ajax\Modal::widget([
        'id' => 'modal',
        'clientEvents' => [
            'submit.success.bs.modal' => 'function(event, body) {$(this).modal("hide")}'
        ]
    ]); ?>
    ```
    
2. Add a link that will open the modal window:
    
    ```php
    <?= \yii\bootstrap\Html::a('Create', ['create'], [
        'class' => 'btn btn-success',
        'data-toggle' => 'ajax-modal', // outputs the result to the modal window
        'data-target' => '#modal', // ID modal
        'data-title' => 'Create item' // custom modal title
    ]); ?>
    ```
    
3. Add the `data-ajax` attribute in the ActiveForm options:
    
    ```php
    <?php $form = \yii\bootstrap\ActiveForm::begin([
        'options' => [
            'data-ajax' => 1
        ],
    ]); ?>
    
    // your fields
    
    <?php \yii\bootstrap\ActiveForm::end() ?>
    ```
    
4. Create an action in your controller that will handle this request:
    
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