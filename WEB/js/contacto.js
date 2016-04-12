$(document).ready(function() {
	$("#contact-error").hide();
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

		var regExTelefono = new RegExp("[0123456789 -]"); 
		var telefono = document.getElementById("contact-phone").value;
		if (telefono.match(regExTelefono) && telefono.length>=8){
			$.ajax({
				type: "POST",
				url: url,
				data: $("#contact-form").serialize(),
				success: function(data)
				{
					if(data==true)
           			{
           				alert("Se envio ");
					}
					else
					{
						$("#contact-error").show();
						document.getElementById("contact-error").innerHTML ="Completa todos los campos";
						e.preventDefault();
					}
				}
         	});
			
		}
		else{			
			$("#contact-error").show();
			document.getElementById("contact-error").innerHTML ="Error en el telefono";
			e.preventDefault();
		}
	});
	
});

