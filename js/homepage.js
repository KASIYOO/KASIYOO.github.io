jQuery(document).ready(function ($) {
    NProgress.start();
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
    var $musical = $(".menu_tool img");
    var $move = $(".me,html,#container");
    //当鼠标点击菜单
    var num = 0;
    var mum = 0;
    function keepPositioin(a) {
        var he_width = $(document).width();
        var l_r_width = (he_width - 1000) / 2;
        var container_2_height = $("#home_container_2").height();
        $(".keepPosition").css({
            "width": l_r_width + 'px',
            "height": Number(a)+ container_2_height + 'px'
        });

    }
    keepPositioin(0);
    document.oncontextmenu = function () {
        return false;
    };
    
    // stop refresh
    document.onkeydown = function (event) {
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if (e && e.keyCode == 116) {
            return false;
        }
    };

    //stop musical
    $musical.click(function (e) {
        if (mum++ % 2 === 0) {
            document.getElementById('musical').pause();

            $musical.attr({
                "src": "/image/musical%20audio.gif"
            });
        } else {
            document.getElementById('musical').play();


            $musical.attr({
                "src": "/image/muscial-audio.gif"
            });
        }

    });
    //animation for menu
    ico.click(
        function (e) {

        if (num++ % 2 === 0) {
            $menu.addClass("ox");
            ico.children().css({
                "background-color": "#fff"
            });

            $("#goTopBtn").css({
                "color": "#fff"
            });
            $move.css({
                right: "300px"
            });

        } else {
            $menu.removeClass("ox");
            ico.children().css({
                "background-color": " #242323"
            });
            $("#goTopBtn").css({
                "color": "#242323"
            });
            $move.css({
                right: "0"
            });
        }
        e.preventDefault(); //阻止元素的默认动作（如果存在） 
    });
    $(".paper").click(function () {
        if ($menu.hasClass("ox")) {
            ico.trigger('click');
        }
    });
    $(".menu a").click(function(){
             setTimeout(function(){
                 ico.trigger('click');
             },500);
    });
    $(window).scroll(function () {
        
   
             var  viewH =$(window).height();//可见高度  
            var contentH =$(document).height();//内容高度 
             var toped = $(window).scrollTop();

            if(contentH - viewH - toped <=200) {
                $("#goTopBtn").css({
                "color": "#fff"
            });
            }else{
              $("#goTopBtn").css({
                "color": "#242323"
            });  
                
            }
            
         
        //           bgstyleChange();
 
        if (toped > 0) {
            $("#goTopBtn").css("display", "block");
        } else {
            $("#goTopBtn").css("display", "none");
        }
    });

    $("#goTopBtn").click(function () {
        var toped = $(window).scrollTop();
        $('body,html').animate({
            scrollTop: 0
        }, 500);
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
    //butto_more
    $("#button_more").click(function(){
     $("#no_6").slideDown();
      keepPositioin(150);
    });
    
    //moblie layout
    var str = "<embed  class='str'  id='mobile_port_title'  src='/svg/mobile_title_portfolio.svg'>";
    var str2 = "<embed class='str2' id='port_title' src='/svg/title_portfolio.svg'>";
    var str3 = "<embed class='str' id='mobile_about_title' src='/svg/mobile_title_about.svg'>";
    var str4 = "<embed class='str2' id='about_title' src='/svg/title_about.svg'>";
    if ($(window).width() < 640) {
        $("#port_title #about_title").remove();
        $(".home_container_2_title").html(str);
        $(".home_container_3_title").html(str3);
    } else {
        $('#mobile_port_title #mobile_about_title').remove();
        $(".home_container_2_title").html(str2);
        $(".home_container_3_title").html(str4);
    }
    $(window).bind('resize', function () {
        keepPositioin(0);
        var win_width = $(window).width();
        if (win_width < 640 && (!$("#mobile_port_title").hasClass('str') || !("#mobile_about_title").hasClass("str"))) {
            $("#port_title #about_title").remove();
            $(".home_container_2_title").html(str);
            $(".home_container_3_title").html(str3);
        } else if (win_width > 641 && (!$("#port_title").hasClass('str2') || !("#about_title").hasClass("str2"))) {
            $('#mobile_port_title #mobile_about_title').remove();
            $(".home_container_2_title").html(str2);
            $(".home_container_3_title").html(str4);
        }
    });
      

    $(document).pjax('a[data-pjax]', '#container_var', {
        fragment: '#container_var',
        timeout: 6000
    });
    $(document).on('pjax:start', function () {
        $('#fade').show();
    });
    $(document).on('pjax:end', function () {
        $('#fade').fadeOut(1000);
    });
    var map;
    var myLatLng = new google.maps.LatLng(38.274723, 140.867572);
    var MY_MAPTYPE_ID = 'custom_style';

    function initialize() {
        var featureOpts = [{
            stylers: [{
                hue: '#24a2fd'
             }, {
                visibility: 'simplified'
             }, {
                gamma: 0.5
             }, {
                weight: 0.5
             }]
         }, {
            elementType: 'labels',
            stylers: [{
                visibility: 'off'
             }]
         }, {
            featureType: 'water',
            stylers: [{
                color: '#30b7ff'
             }]
         }];
        var mapOptions = {
            zoom: 10,
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
   //image preload
    var preloadimages=function(){
       for(var i=0; i<arguments.length;i++ ){
           $("<img/>").attr("src",arguments[i]);
       }
   };
   
    // loading bar done
    $(window).load(function () {
            preloadimages("/image/prolifoto_web.jpg","/image/prolifoto_vi.jpg","/image/%E7%A9%BA%E6%B0%94%E5%87%80%E5%8C%96.jpg","/image/subpage_bk.jpg","/image/portfolio_ai.jpg","/image/display.jpg");

    NProgress.done();
 
});

});
