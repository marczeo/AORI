$(document).ready(function(){
	var touch 	= $('#touch-menu');
	var menu 	= $('.menu');
	var nav = $(".navbar");    
	$(touch).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});

	/*$(window).resize(function(){
		var w = $(window).width();
		if(w > 767 && menu.is(':hidden')) {
			//menu.removeAttr('style');
		}
	});	*/

	
    $(window).scroll(function () {
        if ($(this).scrollTop() > 615) {
            nav.addClass("f-navbar");            
        } else {
            nav.removeClass("f-navbar");
        }
    });
});
