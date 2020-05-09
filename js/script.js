$(document).ready(function(){
    $('.loginbutton').click(function(){
    $('#loginmodal').modal("toggle");
    $('#loginmodal').modal("show");
});

$(".loginmodalclose").click(function(){
    $('#loginmodal').modal("hide");
});

$('.reservebutton').click(function(){
    $('#reserveform').modal("toggle");
    $('#reserveform').modal("show");
});
$(".reservemodalclose").click(function(){
    $('#reserveform').modal("hide");
});
    $('#mycarousel').carousel({interval:2000});
    $("#carouselbutton").click(function(){
    if ($("#carouselbutton").children("span").hasClass('fa-pause')) {
        $("#mycarousel").carousel('pause');
        $("#carouselbutton").children("span").removeClass('fa-pause');
        $("#carouselbutton").children("span").addClass('fa-play');
    }
    else if ($("#carouselbutton").children("span").hasClass('fa-play')){
        $("#mycarousel").carousel('cycle');
        $("#carouselbutton").children("span").removeClass('fa-play');
        $("#carouselbutton").children("span").addClass('fa-pause');                    
    }
});
});