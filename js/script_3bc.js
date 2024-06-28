$(".box").mouseover(function(){
    $(this).find("video").get(0).play();
})
$(".box").mouseout(function(){
    $(this).find("video").get(0).pause();
})

$(".page").hide()
$(".box1").click(function(){
    $(".page1").fadeIn()
    $(".page1").addClass("active")
})

$(".close").click(function(){
    $(".page").fadeOut()
    $(".page").removeClass("active")
})

$(".box2").click(function(){
    $(".page2").fadeIn()
    $(".page2").addClass("active")
})
$(".box3").click(function(){
    $(".page3").fadeIn()
    $(".page3").addClass("active")
})
$(".box4").click(function(){
    $(".page4").fadeIn()
    $(".page4").addClass("active")
})
