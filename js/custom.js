(function ($) {

  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').delay(100).slideUp('slow'); // set duration in brackets    
    });

    // MENU
    $('.navbar-collapse .navbar').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    $('.navbar-toggler').on('click',function(){
      $(this).toggleClass('navbar-toggler-close');
    });


    // HEADER
    $(".header").headroom();

    // PROJECTS SLIDE
    $('.projects-slide').owlCarousel({
      loop: true,
      autoplayHoverPause: false,
      autoplay: true,
      smartSpeed: 1000,
      margin: 30,
      dots: false,
      nav:true,
      items: 2,
      center: true,
      navText: [
          '<i class="fa fa-angle-left"></i>',
          '<i class="fa fa-angle-right"></i>'
      ],
      responsiveClass: true,
      responsive:{
        0:{
            items:1,
        },
        480:{
            items:2,
        }
      }
    });


    // SMOOTHSCROLL
    $(function() {
      $('.navbar-nav .nav-link').on('click', function(event) {
        var $anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
          }, 1000);
            event.preventDefault();
      });
    });  

})(jQuery);
