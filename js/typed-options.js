(function ($) {

    "use strict";

        // Typed JS
        var subElementArray = $.map($('.typing-text'), function(el) { return $(el).text(); });    
        $(".typing").typed({
          strings: subElementArray,
          typeSpeed: 100,
          contentType: 'html',
          showCursor: false,
          loop: true,
          loopCount: true,
        });

})(jQuery);
