(function($){
  $(window).load(function(){
    $('#content-border').height($('#content_row').outerHeight(true));
    $('.wab_header').height($('#header_image').outerHeight(true));
    console.log($('#header_image').outerHeight(true));
    $(window).resize(function(){
        $('#content-border').height($('#content_row').outerHeight(true));
        $('.wab_header').height($('#header_image').outerHeight(true));
    });
  });
})(jQuery);

