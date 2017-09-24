
$(function () {

    $("#header nav a[href='#menu']").click(function () {
        $("#menu").show().animate({
            left: '0'
        })
    })

    $(".gg").click(function () {
        var width = $("#menu").outerWidth()
        $("#menu").show().animate({
            left: `-${width}px`
        })
    })

    // $("*:not()").on("click", function () {
    //     var width = $("#menu").outerWidth()
    //     $("#menu").show().animate({
    //         left: `-${width}px`
    //     })
    //     console.log(width)
    // })
})