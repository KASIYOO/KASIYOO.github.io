jQuery(document).ready(function($){
    var $back = $("#background");
          $(window).scroll(function() {
         var toped = $(window).scrollTop();
         var container_Y = toped * 0.4;
         $back.css({
             top: container_Y

         });

     });

});
