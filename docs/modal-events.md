# Events

Added the following events, in addition to those that already [exist](https://getbootstrap.com/docs/3.3/javascript/#modals-events)

* `submit.success.bs.modal` - This event is triggered after the form has been successfully submitted. The second parameter is the content of the response:
    
    ```js
    $('#myModal').on('submit.success.bs.modal', function (event, bodyResponse) {
      // do something...
    })
    ```