
$(function () {

    $("#header nav a[href='#menu']").click(function () {
         $("body").addClass("toggled")
         console.log($("#menu").attr("id"))
    })

    $("#menu > div:nth-child(1)").click(function(){
        $("body").removeClass("toggled")
    })
})