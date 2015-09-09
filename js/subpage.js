$(function(){ 
    
    $(window).scroll(function () {
    
    
         var wintop = $(window).scrollTop();
         var container_1_H = $(".container-1").height();

         if (wintop >= container_1_H) {
             $(".header").css("height", "100px");


         } else {
             $(".header").css("height", "0px");


         }
    });
    
      var $logo_a = $("#logo");
     var $a_A = $("#a");
     var $a_S = $("#s");
     var $a_I = $("#i");
     var $a_Y = $("#y");
     var $a_O = $("#o");
     var $a_OO = $("#oo");
     //logo change
     $logo_a.mouseenter(
         function () {

             $a_A.css({
                 left: '0px',
                 opacity: '1',
                 transition: "all 0.2s  linear 0.05s",
                 "-moz-transition": "all 0.2s  linear 0.05s",
                 "-o-transition": "all 0.2s  linear 0.05s",
                 "-webkit-transition": "all 0.2s  linear 0.05s",
                 "-ms-transition": "all 0.2s  linear 0.05s"






             });
             $a_S.css({
                 left: '0px',
                 opacity: '1',
                 transition: 'all 0.2s  linear 0.1s',
                 "-moz-transition": 'all 0.2s  linear 0.1s',
                 "-o-transition": 'all 0.2s  linear 0.1s',
                 "-webkit-transition": 'all 0.2s  linear 0.1s',
                 "-ms-transition": 'all 0.2s  linear 0.1s',
             });
             $a_I.css({
                 left: '0px',
                 opacity: '1',
                 transition: 'all 0.2s  linear 0.15s',
                 "-moz-transition": 'all 0.2s  linear 0.15s',
                 "-o-transition": 'all 0.2s  linear 0.15s',
                 "-webkit-transition": 'all 0.2s  linear 0.15s',
                 "-ms-transition": 'all 0.2s  linear 0.15s',

             });

             $a_Y.css({

                 left: '0px',
                 opacity: '1',
                 transition: 'all 0.2s  linear 0.2s',
                 "-moz-transition": 'all 0.2s  linear 0.2s',
                 "-o-transition": 'all 0.2s  linear 0.2s',
                 "-webkit-transition": 'all 0.2s  linear 0.2s',
                 "-ms-transition": 'all 0.2s  linear 0.2s',

             });
             $a_O.css({
                 left: '0px',
                 opacity: '1',
                 transition: 'all 0.2s  linear 0.25s',
                 "-moz-transition": 'all 0.2s  linear 0.25s',
                 "-o-transition": 'all 0.2s  linear 0.25s',
                 "-webkit-transition": 'all 0.2s  linear 0.25s',
                 "-ms-transition": 'all 0.2s  linear 0.25s',
             });
             $a_OO.css({
                 left: '0px',
                 opacity: '1',
                 transition: 'all 0.2s  linear 0.3s',
                 "-moz-transition": 'all 0.2s  linear 0.3s',
                 "-o-transition": 'all 0.2s  linear 0.3s',
                 "-webkit-transition": 'all 0.2s  linear 0.3s',
                 "-ms-transition": 'all 0.2s  linear 0.3s',
             });


         }

     );

     $logo_a.mouseleave(
         function () {
             $a_A.css({
                 left: '-20px',
                 opacity: '0',
                 transition: "all 0.2s  linear 0.3s",
                 "-moz-transition": 'all 0.2s  linear 0.3s',
                 "-o-transition": 'all 0.2s  linear 0.3s',
                 "-webkit-transition": 'all 0.2s  linear 0.3s',
                 "-ms-transition": 'all 0.2s  linear 0.3s',



             });
             $a_S.css({
                 left: '-20px',
                 opacity: '0',
                 transition: 'all 0.2s  linear 0.25s',
                 "-moz-transition": 'all 0.2s  linear 0.25s',
                 "-o-transition": 'all 0.2s  linear 0.25s',
                 "-webkit-transition": 'all 0.2s  linear 0.25s',
                 "-ms-transition": 'all 0.2s  linear 0.25s',
             });
             $a_I.css({
                 left: '-20px',
                 opacity: '0',
                 transition: 'all 0.2s  linear 0.2s',
                 "-moz-transition": 'all 0.2s  linear 0.2s',
                 "-o-transition": 'all 0.2s  linear 0.2s',
                 "-webkit-transition": 'all 0.2s  linear 0.2s',
                 "-ms-transition": 'all 0.2s  linear 0.2s',
             });

             $a_Y.css({

                 left: '-20px',
                 opacity: '0',
                 transition: 'all 0.2s  linear 0.15s',
                 "-moz-transition": 'all 0.2s  linear 0.15s',
                 "-o-transition": 'all 0.2s  linear 0.15s',
                 "-webkit-transition": 'all 0.2s  linear 0.15s',
                 "-ms-transition": 'all 0.2s  linear 0.15s',


             });
             $a_O.css({
                 left: '-20px',
                 opacity: '0',
                 transition: 'all 0.2s  linear 0.1s',
                 "-moz-transition": 'all 0.2s  linear 0.1s',
                 "-o-transition": 'all 0.2s  linear 0.1s',
                 "-webkit-transition": 'all 0.2s  linear 0.1s',
                 "-ms-transition": 'all 0.2s  linear 0.1s',
             });
             $a_OO.css({
                 left: '-20px',
                 opacity: '0',
                 transition: 'all 0.2s  linear 0.05s',
                 "-moz-transition": "all 0.2s  linear 0.05s",
                 "-o-transition": "all 0.2s  linear 0.05s",
                 "-webkit-transition": "all 0.2s  linear 0.05s",
                 "-ms-transition": "all 0.2s  linear 0.05s"
             });


         }

     );

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
//         var $logo = $(".logo");
//         if (wintop > 50 && wintop < 580) {
//             $logo.css("font-size", "45px")
//
//         } else {
//
//             $logo.css("font-size", "38px")
//
//         }

   

     //iconmenu animate
     var ico = $(".iconmenu");
     var $menu = $(".menu");
     var menu_width = $menu.width();
     var menu_left_0 = $menu.position().left;
     var menu_left_1 = menu_left_0 - menu_width;
     var $main = $("body");
     var main_left_0 = $main.position().left;
     var main_left_1 = main_left_0 - menu_width;

     var hexiao = false;


     //当鼠标点击菜单
     ico.click(function () {

         if (hexiao)

         {

             $('.menu').stop().animate({
                 left: menu_left_0
             }, 400);
             $('body,.header,.parallax').stop().animate({
                 left: main_left_0
             }, 400);

             hexiao = false;
         } else {

             $('.menu').stop().animate({

                 "left": menu_left_1
             }, 400);

             $('body,.header,.parallax').stop().animate({
                 "left": main_left_1

             }, 400);

             hexiao = true;


         }

     });

     var $link = $(".menu ul li:eq(4)");
     $link.click(function () {

             $('.menu').stop().animate({

                 "left": menu_left_0
             }, 400);

             $('body,.header,.parallax').stop().animate({
                 "left": main_left_0

             }, 400);


         });
         //To solve the bug about the location of menu  when resizing  screen.


     $(window).bind('resize', function () {
         window.location.href = window.location.href;
     });
});