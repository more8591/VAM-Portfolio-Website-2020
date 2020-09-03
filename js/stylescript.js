/*
Developed by Victor Moreno
This js doc effects the following:
-text animation
-
*/

$(document).ready(function() {

    /////////////////////////////
    /////BIG TEXT ANIMATION//////
    /////////////////////////////
    $(".slide").textSlider({
        timeout: 1500,
        slideTime: 10,
        loop: 1
    });

    ///////////////////////////////
    /////MENU TOGGLE ANIMATION////
    /////////////////////////////
    var b1 = $("#toggleOff");
    waterFloat(b1,900,0,8);

    $(".cb02, .cb03").hide();

    $("#toggleOff").mouseenter(function(){
        $(this).animate({
            opacity: 0.70
        });
    }).mouseleave(function(){
        $(this).animate({
            opacity: 1
        });
    });

    ///FADES OUT KNOW MORE BUTTON TO SHOW MENU///
    $("#toggleOff").on("click", function(){
        $(".circleTrans").delay(200).animate({
            left: '-100%',
        });
        $(".cb02, .contentBlock, .scr-container").delay(1000).fadeIn(2000);
        $(".cb01, #bg, .toggleOff").delay(200).fadeOut();
    });

});
