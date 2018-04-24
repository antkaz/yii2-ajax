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
            title = (self.attr('data-title') || ''),
            modalTitle = target.find('.modal-header').find('.modal-title'),
            modalBody = target.modal('show').find('.modal-body').empty();

        if (modalTitle.length === 0) {
            $('<h4>' + title + '</h4>').addClass('modal-title').appendTo(target.find('.modal-header'));
        } else {
            modalTitle.text(title);
        }

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
            modalBody = form.closest('.modal-body'),
            modalId = form.closest('.modal').attr('id');

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
                $('#' + modalId).trigger('submit.result.bs.modal', [data]);
                modalBody.html(data);
            },
            complete: function () {
                form.find(':input').attr('disabled', false);
            }
        });
    });
});