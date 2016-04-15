
window.onload = function() {
//alert ($('.animated').attr('id'));
$window = $(window);
$animation_elements = $('.prueba');
$window.on('scroll', check_if_in_view);
$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
//alert("yey");
}
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
    var resta = Math.abs((element_top_position-window_bottom_position));
	var resta2 = Math.abs((element_bottom_position-window_top_position));
	//alert("una resta:" + resta + "otra resta" + resta2);
	//check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      
		$element.display = "inline";
	  //$( ".inner" ).append( "<object class="'piramid'" type="'image/svg+xml" data="Iconos/piramide.svg'">Imágen de circulo</object>" );
	  //alert("la veo");
    } else if(Math.abs((element_top_position-window_bottom_position))<=5 || Math.abs((element_bottom_position-window_top_position))<=5){
	//alert("ya no la veo");
	/*alert("element_bottom_position = " + element_bottom_position + "\n element_top_position = " + element_top_position + "\n window_bottom_position = " 
	+ window_bottom_position + "\n window_top_position = " + window_top_position);*/
	  $element.removeClass('test');
	  //$element.display = "none";
	  var new_url = 'Iconos/piramide.svg';
	$('#graph').attr('data', new_url);
	document.getElementById('MyDIV').setAttribute("style","width:"+$('#graph').width()+"px"+ "height:"+$('#graph').height()+"px");
	$('#graph').load(new_url);
	
    }
  });
}