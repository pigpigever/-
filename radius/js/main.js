
$(document).ready(function () {

    var $header = $("#header")

    $header.each(function () {
        var t = jQuery(this),
            button = t.find('.button')
        button.click(function (e) {

            t.toggleClass('hide')

            if (t.hasClass('preview')) {
                return true
            } else {
                e.preventDefault()
            }

        })
    })

})