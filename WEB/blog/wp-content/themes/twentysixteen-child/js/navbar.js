jQuery(document).ready(function(){
				var touch 	= jQuery('#touch-menu');
				var menu 	= jQuery('.menu');
				var ele = jQuery(".element");
				jQuery(touch).on('click', function(e) {
					e.preventDefault();
					ele.slideToggle();
					menu.slideToggle();
				});
				
			});