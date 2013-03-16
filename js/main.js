(function($){
  $(document).ready(function(){
    $('#content-border').height($('.wab_content').outerHeight());
    $(window).resize(function(){
        console.log("Outer Height: "+$('.wab_content').outerHeight());
        $('#content-border').height($('.wab_content').outerHeight());
    });
  });
})(jQuery);

