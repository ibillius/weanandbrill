(function($){
  $(window).load(function(){
    $('#content-border').height($('#content_row').outerHeight(true));
    $('.wab_content').height($('#content_row').outerHeight(true));
    $('#header_image').height($('#header_row').outerHeight(true));
    $('.wab_header').height($('#header_row').outerHeight(true));
    $('#footer_row').height($('#footer_image').outerHeight(true));
    $('.wab_footer').height($('#footer_row').outerHeight(true));
    
    $(window).resize(function(){
        /*
         *$('#content-border').height($('#content_row').outerHeight(true));
         *$('#header_image').height($('#header_row').outerHeight(true));
         */
      $('#content-border').height($('#content_row').outerHeight(true));
      $('.wab_content').height($('#content_row').outerHeight(true));
      $('#header_image').height($('#header_row').outerHeight(true));
      $('.wab_header').height($('#header_row').outerHeight(true));
      $('#footer_row').height($('#footer_image').outerHeight(true));
      $('.wab_footer').height($('#footer_row').outerHeight(true));
    });
  });
})(jQuery);

