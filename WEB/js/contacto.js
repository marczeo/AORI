$(document).ready(function() {
	//Combo con checkbox
	$(".contact-dropdown-services dt a").on('click', function() {
		$(".contact-dropdown-services dd ul").slideToggle('fast');
	});

	$(".contact-dropdown-services dd ul li a").on('click', function() {
		$(".contact-dropdown-services dd ul").hide();
	});
	//Fin slide

	//Validacion formulario contacto
	$("#contact-form").submit(function(e) {

    var url = "php/sendmail.php";

    $.ajax({
           type: "POST",
           url: url,
           data: $("#contact-form").serialize(), // serializes the form's elements.
           success: function(data)
           {
           		if(data=="true")
           		{
           			alert"Mensaje enviado con exito");
				}
				else
				{
					alert("Debe llenar todos los campos");
				}
           }
         });

    e.preventDefault();
});
	//Fin de validacion


	
});
