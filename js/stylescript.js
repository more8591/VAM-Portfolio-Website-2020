// Slide menu-container out if not scrolling, slide in on scroll
(function() {
  const menu = document.querySelector('.menu-container');
  let scrollTimeout;
  function showMenu() {
    if (menu) menu.classList.remove('menu-slide-out');
  }
  function hideMenu() {
    if (menu) menu.classList.add('menu-slide-out');
  }
  function onScroll() {
    showMenu();
    if (scrollTimeout) clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(hideMenu, 2000); // 2s after scroll stops
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  // Start hidden if not scrolling
  hideMenu();
})();
// Menu auto-hide after 1 min inactivity, slide out, reappear on mousemove
(function() {
  const menu = document.querySelector('.menu-container');
  let hideTimeout;
  function showMenu() {
    if (menu) {
      menu.classList.remove('menu-hide');
    }
  }
  function hideMenu() {
    if (menu) {
      menu.classList.add('menu-hide');
    }
  }
  function resetHideTimer() {
    showMenu();
    if (hideTimeout) clearTimeout(hideTimeout);
    hideTimeout = setTimeout(hideMenu, 60000);
  }
  // Show on any mousemove or touch
  window.addEventListener('mousemove', resetHideTimer);
  window.addEventListener('touchstart', resetHideTimer);
  // Start timer on load
  resetHideTimer();
})();
/*
Developed by Victor Moreno
This js doc effects the following:
-text animation
-
*/

function slideShow() {
    var count = 0;
    const IMG_PATH = 'img/mypics/';
    setInterval(function() {
        jQuery('.img-slider').attr('src', IMG_PATH + count + '.JPG');
        count++;
        if (count > 2) {
            count = 0;
        }
    }, 2500);
}

$(document).ready(function() {
    /////////////////////////////
    /////BIG TEXT ANIMATION//////
    /////////////////////////////
    $(".slide").textSlider({
        timeout: 1500,
        slideTime: 10,
        loop: 1
    });

    //////////////////////////////////////////
    /////SHOW ON SCROLL POINT ANIMATION//////
    ////////////////////////////////////////

    $(window).scroll(function() {
     var scrlnum = $(this).scrollTop();
     //////SCROLL DOWN MORE FLOAT/////
     if (scrlnum >=300) {
      $(".scr-body, .scr-container").fadeOut();
     } else {
      $(".scr-body, .scr-container").fadeIn();
     }
    })
    ////////////////////////////////////
    /////ANIMATION SCROLL TRIGGER//////
    //////////////////////////////////


    ///////////////////////////////
    /////MENU TOGGLE ANIMATION////
    /////////////////////////////
    $(".cb02, .cb03, .cb04, .cb05, .hidethis").hide();

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
     //SLIDE ANIMATION//
        $(".circleTrans").delay(200).animate({
            left: '-100%',
        });
        //FADE IN CONTENT BLOCKS 1 - 4//
        $(".cb02, .cb03, .cb04, .cb05, .contentBlock, .scr-container, .hidethis").delay(1000).fadeIn(2000);
        $(".cb01, #bg, #toggleOff").delay(200).fadeOut();
        //AUTO START AT TOP//
        $(window).scrollTop(0);
        //START IMAGE SLIDE SHOW
        slideShow();
    });


////////////////////
///END OF SCRIPT///
//////////////////
});
