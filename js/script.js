$(function() {
    $(window).on("scroll", function() {
        var position = $(this).scrollTop();
    
        $('.content div.session-title').each(function() {
            var target = $(this).offset().top;
            var id = $(this).attr('id');
    
            if (position >= target) {
               $('#navbar > ul > li > a').removeClass('active');
               $('#navbar > ul > li > a[href=#' + id + ']').addClass('active');
            }
        });
    });
})
