$(function () {

 $(document).pjax('a.next', '#container_var', {fragment:'#container_var', timeout:5000});
// $(document).on('pjax:start', function() { $('#cantaine').fadeOut(1000); })
//    $(document).on('pjax:end',   function() { $('#content').fadeIn(1000);})
        

            NProgress.start();








            var $logo_a = $("#logo");
            var $a_A = $("#a");
            var $a_S = $("#s");
            var $a_I = $("#i");
            var $a_Y = $("#y");
            var $a_O = $("#o");
            var $a_OO = $("#oo");
            //logo change
    var $video=$("#keynoteV");
    var $p=$(".paper p");
    var nun=0;
    
    $p.click(function(){
        
        if(nun++%2===0){
                   document.getElementById('keynoteV').play();

        }
        
       else{
           
                             document.getElementById('keynoteV').pause();
 
       }         
        
        
        
        
        
    });
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









            //iconmenu animate
            var ico = $(".iconmenu");
            var $menu = $(".menu");
            var menu_width = $menu.width();
            var menu_left_0 = $menu.position().left;
            var $main = $("body");
            var main_left_0 = $main.position().left;
            var $menuUl = $(".menu ul");
            var $header = $(".header");
         var $moveZ=$(".moveZone");
    var $back=$("#background");

            //当鼠标点击菜单
            var num = 0;


            //当鼠标点击菜单
            ico.click(function (e) {

         if (num++ % 2 === 0) {
             
             

             ico.children().css({
                 "background-color":"#fff"
                 
                 
             });
             $menu.css({
                 left: "-=300px"
             });

            $moveZ.css({
                 left: "-=300px"
             });
             $menuUl.css({
                 "padding-left": "90px",


                 opacity: "1"


             });



         } else {
             ico.children().css({
                     "background-color": " #242323"

                 
             });
             $menu.css({

                 "left": "100%"
             });
          $moveZ.css({
                 left: "0"
             });

             $menuUl.css({
                 "padding-left": "0px",


                 opacity: "0"


             });

         }
         e.preventDefault(); //阻止元素的默认动作（如果存在） 


     });



            $(window).scroll(function () {
                
                
                
                
      var toped = $(window).scrollTop();

         var container_Y = toped * 0.4;


    $back.css({
             top: container_Y

         });




            });

//
//            var $link = $(".menu ul li:eq(4)");
//            $link.click(function () {
//
//                $('.menu').stop().animate({
//
//                    "left": menu_left_0
//                }, 400);
//
//                $('body,.header,.parallax').stop().animate({
//                    "left": main_left_0
//
//                }, 400);
//
//
//            });
            //To solve the bug about the location of menu  when resizing  screen.


            $(window).resize(function () {


                $menu.css({

                    left: "100%",


                });





            });});


            $(window).load(function () {
                NProgress.done();
                $("#cover").fadeOut();


            });
