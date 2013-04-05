(function($){
  $(window).load(function(){
    $('#content-border').height($('#content_row').outerHeight(true));
    $(window).resize(function(){
        console.log("Outer Height: "+$('#content_row').outerHeight(true));
        $('#content-border').height($('#content_row').outerHeight(true));
    });
  });
})(jQuery);

