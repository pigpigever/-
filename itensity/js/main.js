
$(function () {

    $("body").click(function(){
        $("body").removeClass("toggled")
    })

    $("#header nav a[href='#menu']").click(function () {
        event.stopPropagation() //阻止冒泡
         $("body").addClass("toggled")
    })

    $("#menu").click(function(){
        event.stopPropagation() //阻止冒泡
    })

    $("#menu > div:nth-child(1)").click(function(event){
        $("body").removeClass("toggled")
    })

})