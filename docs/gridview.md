# Group editing of items from GridView

If you want to perform some actions on several records in the table, you need to use the `data-gridview` attribute.
The following steps describe how to do this:

1. Аdd the modal widget to your view file:

    ```php
    <?= \antkaz\ajax\Modal::widget([
        'id' => 'modal',
        // other parameters
    ]); ?>
    ```
    
2. Add a link that opens the modal window and add the `data-gridview` attribute. This attribute must point to the GridView widget selector:
    
    ```php
    <?= \yii\bootstrap\Html::a('Edit Group', ['edit-group'], [
        'class' => 'btn btn-primary',
        'data-toggle' => 'ajax-modal',
        'data-target' => '#modal', // ID modal
        'data-gridview' => '#grid', // ID GridView
        'data-title' => 'Edit items'
    ]) ?>

    <?= \yii\grid\GridView::widget([   
        'id' => 'grid',
        'columns' => [
            ['class' => \yii\grid\CheckboxColumn::class],
            // other columns       
        ],
    ]) ?>

    ```
    
3. Create an action in the controller that will handle this request. 
The first argument `$ids` is an array of row identifiers that have been selected:
    
    ```php
    public function actionEditGroup(array $ids)
    {
        $model = new Model();
    
        // your code
    
        return $this->renderAjax('edit-group', [
            'model' => $model,
        ]);   
    }
    ```
