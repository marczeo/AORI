jQuery(document).ready(function(){
	var touch 	= jQuery('#touch-menu');
	var menu 	= jQuery('.menu');
	var nav = jQuery(".navbar");    
	var ele = jQuery(".element");
	jQuery(touch).on('click', function(e) {
		e.preventDefault();
		ele.slideToggle();
		menu.slideToggle();
	});

	/*jQuery(window).resize(function(){
		var w = jQuery(window).width();
		if(w > 767 && menu.is(':hidden')) {
			//menu.removeAttr('style');
		}
	});	*/

	
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 615) {
            nav.addClass("f-navbar");            
        } else {
            nav.removeClass("f-navbar");
        }
    });
});
