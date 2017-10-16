
$(document).ready(function () {

    var $header = $("#header"),
        $footer = $("#footer > a")

    $header.each(function () {
        var t = jQuery(this),
            button = t.find('.button')
        button.click(function (event) {

            t.toggleClass('hide')

            if (t.hasClass('preview')) {
                return true
            } else {
                event.preventDefault()
            }

        })
    })

    $footer.click(function (event) {
        event.preventDefault()
        $("#footer").toggleClass('show')
    })

})