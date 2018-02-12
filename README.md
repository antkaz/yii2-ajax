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
    ```
    
2. Аdd the modal widget to your view file:

    ```php
    <?= yii\bootstrap\Modal::widget([
        'id' => 'modal',
    ]); ?>
    ```
    
3. Add a link that will open the modal window:

    ```php
    <?= Html::a('Create', ['create'], [
        'class' => 'btn btn-success',
        'data-toggle' => 'ajax-modal', // outputs the result to the modal window
        'data-target' => '#modal', // ID modal
    ]); ?>
    ```
    
4. Create an action in your controller that will handle this request:

     ```php
     public function actionCreate()
     {
         $model = new Model();
     
         if ($model->load(Yii::$app->request->post()) && $model->save()) {
             return $this->redirect(['index']);
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