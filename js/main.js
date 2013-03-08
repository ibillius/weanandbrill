(function($){
  $(document).ready(function(){
    var height = $('.wab_content').height();

    console.log('Height: '+height);
    $('#content-border').height(height);
    //$('#content-border').width('940px');

    $(window).resize(function(){
        console.log($('.wab_content').height());
        $('#content-border').height($('.wab_content').outerHeight());
    });
  });
})(jQuery);

