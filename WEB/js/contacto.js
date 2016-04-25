function valida() {	
	//Valida que se seleccione al menos un servicio
	var checkboxes = document.getElementById("contact-form").typeService;
	var cont = 0; 
	var result="";
	for (var x=0; x < checkboxes.length; x++) {

		if (checkboxes[x].checked) {
			cont = cont + 1;
		}
	}
	if(cont==0){
		result += "Debe seleccionar al menos un servicio <br>";
	}
	//Fin validación servicios

	//Valida formato del teléfono
	var regExTelefono = new RegExp("[0123456789 -]"); 
	var telefono = document.getElementById("contact-phone").value;
	if (!telefono.match(regExTelefono) && telefono.length<8)
	{
		result+="Error en el teléfono";
	}
	//Fin validación de teléfono

	return result;
}


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
		var ret=true;
		var url = "php/sendmail.php";
		var regExTelefono = new RegExp("[0123456789 -]"); 
		var telefono = document.getElementById("contact-phone").value;
		var validacion= valida();
		if (validacion==""){
			$.ajax({
				type: "POST",
				url: url,
				data: $("#contact-form").serialize(),
				success: function(data)
				{
					if(data=="true")
           			{
           				alert("Se envio ");
           				document.getElementById("contact-error").innerHTML = "";
           				document.getElementById("contact-form").reset();
           				$(".contact-dropdown-services dd ul").hide();
					}
					else
					{
						$("#contact-error").show();
						document.getElementById("contact-error").innerHTML ="Completa todos los campos";
					}
				}
         	});
		}
		else{
			$("#contact-error").show();
			document.getElementById("contact-error").innerHTML =validacion;
		}
		return false;
	});
	
});

