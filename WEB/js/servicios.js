
  window.onload = function() {
    //init_map();
   /* $('.svg').click(function() {
		//alert("hola marco");
       alert($(this).attr('id'));
	if ($("."+$(this).attr('id')).is(':empty')){
		alert("Esta vacio empty");
  $( "."+$(event.target).attr('id') ).load( $(event.target).attr('id') + ".html" );
	}
	else{
  $(this).html("");
	}
return false;

    });*/
	$page_elements = $('.svg');
	$($page_elements).each(function() {
			//alert($(this).attr('id'));
			$( "."+$(this).attr('id') ).load( $(this).attr('id') + ".html" );
        });
    $('.svg').click(function() {
		$( "."+$(this).attr('id') ).slideToggle("slow",function(){
		});
	});
};
