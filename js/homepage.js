 $(function () {

     NProgress.start();




     var map;

     var myLatLng = new google.maps.LatLng(38.274723, 140.867572);

     var MY_MAPTYPE_ID = 'custom_style';

     function initialize() {
         
   



         var featureOpts = [
             {
                 stylers: [
                     {
                         hue:'#292b2f'
                     },
                     {
                         visibility: 'simplified'
                     },
                     {
                         gamma: 0.5
                     },
                     {
                         weight: 0.5
                     }
      ]
    },
             {
                 elementType: 'labels',
                 stylers: [
                     {
                         visibility: 'off'
                     }
      ]
    },
             {
                 featureType: 'water',
                 stylers: [
                     {
                         color: '#e1e1e5'
                     }
      ]
    }
  ];

         var mapOptions = {
             zoom: 12,
             center: new google.maps.LatLng(38.274723, 140.867572),

             mapTypeControlOptions: {
                 mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
             },
             mapTypeId: MY_MAPTYPE_ID,
             disableDefaultUI: true

         };

         map = new google.maps.Map(document.getElementById('map-canvas'),
             mapOptions);

         var styledMapOptions = {
             name: 'Custom Style'
         };

         var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

         map.mapTypes.set(MY_MAPTYPE_ID, customMapType);




         var image = '/svg2/location.svg';

         var marker = new google.maps.Marker({
             position: myLatLng,

             icon: image,

             map: map,
             title: '仙台市青葉区木町通二丁目６−５１'
         });





         marker.addListener('click', function () {
             map.setZoom(15);
             map.setCenter(marker.getPosition());
         });



         google.maps.event.addListener(map, 'center_changed', function () {
             // 3 seconds after the center of the map has changed, pan back to the
             // marker.
             window.setTimeout(function () {
                 map.panTo(marker.getPosition());
             }, 1000);
         });


     }


     google.maps.event.addDomListener(window, 'load', initialize);


     //iconmenu animate
     var $logo_a = $("#logo");
     var $a_A = $("#a");
     var $a_S = $("#s");
     var $a_I = $("#i");
     var $a_Y = $("#y");
     var $a_O = $("#o");
     var $a_OO = $("#oo");
     var ico = $(".iconmenu");
     var $menu = $(".menu");
     var $main = $("body");
     var $menuUl = $(".menu ul");
     var $header = $(".header");
     var $moveZ=$(".moveZone")
     //当鼠标点击菜单
     var num = 0;
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


         //         
         //         clearTimeout(timer);
         //         overlay.unbind("mousemove");


         var toped = $(window).scrollTop();

         var container_Y = toped * 0.4;


         $('.mybackgroundlayer').css({
             top: container_Y

         });

   

     });

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


      
    

     $(window).resize(function () {
         


         $menu.css({

             left: "100%",


         });

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


     //     $(window).bind('resize', function () {
     //         window.location.href = window.location.href;
     //     });

 });
 $(window).load(function () {
     NProgress.done();



 });
