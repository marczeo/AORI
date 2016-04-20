function check_if_in_view() {
    //alert("entre a nueva funcion");
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);
	
    $.each($animation_elements, function() {
        //alert("llegue a la funcion");
        var $element = $(this);
        var element_height = $element.outerHeight();

        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);
        //alert("element_bottom_position = " + element_bottom_position + "\n window_top_position = " + window_top_position + "\nResta = " + (element_bottom_position-window_top_position));
        var resta = Math.abs((element_top_position - window_bottom_position));
        var resta2 = Math.abs((element_bottom_position - window_top_position));
        //alert("una resta:" + resta + "otra resta" + resta2);
        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {

            $element.display = "inline";
            //$( ".inner" ).append( "<object class="'piramid'" type="'image/svg+xml" data="Iconos/piramide.svg'">Imágen de circulo</object>" );
            //alert("la veo");
        } else if (Math.abs((element_top_position - window_bottom_position)) <= 40 || Math.abs((element_bottom_position - window_top_position)) <= 40) {
            
			 //newone = $element.clone(true);
			 //el.
            //$element.display = "none";
            //var new_url = 'Iconos/piramide.svg';
            //$element.attr('data', new_url);
			//alert("Entré");
			el  = $(this);
			//alert("attr: "+el.attr("id"))
			newone = el.clone(true),
			el.before(newone);
			
			var count = $('.prueba'+el.attr("id")).length;
			//alert(('.prueba'+el.attr("id")));
			//alert(count);
			//alert(count);
			if(count > 1){
				//alert("entre");
				//alert(("#"+el.attr("id")+"[class=" + el.attr("class") + ":last]"));
			//$("#"+el.attr("id")+"[class=" + el.attr("class") + "]:last").remove();
				//alert("Lo quite?");
			//$("." + el.attr("class")+l.attr("id") + ":last[id="+el.attr("id")+"]").remove();
			//$('#'+el.attr("id")+'').remove("prueba:last");
			//$("." + el.attr("class") + ":last").remove();
			//alert(("." + el.attr("class")+el.attr("id") + ":last"));
			//alert(("." + el.attr("class") + ":last"));
			$(".prueba"+el.attr("id") + ":last").remove();
			}
			//$animation_elements = $('.prueba');
		  

        }
    });
	
}
