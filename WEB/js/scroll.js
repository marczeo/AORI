function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();

        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);
        var resta = Math.abs((element_top_position - window_bottom_position));
        var resta2 = Math.abs((element_bottom_position - window_top_position));
      
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {

            $element.display = "inline";
            
        } else if (Math.abs((element_top_position - window_bottom_position)) <= 40 || Math.abs((element_bottom_position - window_top_position)) <= 40) {

			el  = $(this);
			newone = el.clone(true),
			el.before(newone);

			var count = $('.prueba'+el.attr("id")).length;
			
			if(count > 1){
				
			$(".prueba"+el.attr("id") + ":last").remove();
			}
        }
    });
}
