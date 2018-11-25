$(document).ready(function() {
  // MagnificPopup
  var magnifPopup = function() {
    $('.image-popup').magnificPopup({
      type: 'image',
      removalDelay: 300,
      mainClass: 'mfp-with-zoom',
      gallery:{
        enabled:true
      },
      zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function(openerElement) {
        // openerElement is the element on which popup was initialized, in this case its <a> tag
        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
        return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    });
  };

  
  // Call the functions 
  //magnifPopup();

  $('.image-popup').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
    iframe: {
        markup: '<div class="mfp-iframe-scaler">'+
                '<div class="mfp-close"></div>'+
                '<iframe name="mfp-iframe" id="mfp-iframe" class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
              '</div>',

        srcAction: 'iframe_src',
        },
    callbacks: {
      open: function() {
        document.getElementById('mfp-iframe').addEventListener("load", function () {
          window.frames['mfp-iframe'].document.body.style.overflow = "hidden"
          window.frames['mfp-iframe'].document.body.firstElementChild.style.width = "100%"
          window.frames['mfp-iframe'].document.body.firstElementChild.style.height = "auto"
        })
      }
    },

    gallery:{
      enabled:true
    }
});

});