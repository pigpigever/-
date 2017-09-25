
$(function () {

    //初始化
    init()

}())

function init() {
    $("body").addClass("is-loading")
    $(window).on("load", function () {
        window.setTimeout(function () {
            $("body").removeClass("is-loading")
        }, 100)
    })

    /**初始化侧边栏动画 */
    $("body").click(function () {
        $("body").removeClass("toggled")
    })

    $("#header nav a[href='#menu']").click(function () {
        event.stopPropagation() //阻止冒泡
        $("body").addClass("toggled")
    })

    $("#menu").click(function () {
        event.stopPropagation() //阻止冒泡
    })

    $("#menu > div:nth-child(1)").click(function (event) {
        $("body").removeClass("toggled")
    })
}
