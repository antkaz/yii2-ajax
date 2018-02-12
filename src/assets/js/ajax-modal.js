/*!
 * @copyright Copyright &copy; Anton Kazarinov 2018
 *
 * Author: Anton Kazarinov
 */
$(function () {
    // open modal
    $(document).on('click', 'a[data-toggle="ajax-modal"]', function (event) {
        event.preventDefault();

        var self = $(this),
            target = $(self.attr('data-target')),
            url = self.attr('href'),
            modalBody = target.modal('show').find('.modal-body').empty();

        if (url) {
            $.ajax({
                url: url,
                beforeSend: function () {
                    modalBody.addClass('loading');
                },
                success: function (data) {
                    modalBody.html(data);
                },
                complete: function () {
                    modalBody.removeClass('loading');
                }
            });
        }
    });

    // submit form
    $(document).on('submit', 'form[data-ajax]', function (event) {
        event.preventDefault();

        var formData = new FormData(this),
            form = $(this),
            modalBody = form.closest('.modal-body');

        $.ajax({
            url: form.attr('action'),
            type: 'POST',
            processData: false,
            contentType: false,
            data: formData,
            beforeSend: function () {
                form.find(':input').attr('disabled', true);
            },
            success: function (data) {
                modalBody.html(data);
            },
            complete: function () {
                form.find(':input').attr('disabled', false);
            }
        });
    });
});