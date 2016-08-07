function valida() {
	//Valida que se seleccione al menos un servicio
	var result="";
	var checkboxesCantidad = 0;
	checkboxesCantidad = $("#contact-form input[name='typeService[]']:checked").length;

	if(checkboxesCantidad==0){
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
	//Combo con checkbox
	$(".contact-dropdown-services dt a").on('click', function() {
		$(".contact-dropdown-services dd ul").slideToggle('fast');
	});

	$(".contact-dropdown-services dd ul li a").on('click', function() {
		$(".contact-dropdown-services dd ul").hide();
	});
	//Fin slide

	//Servcios seleccionados
	$("#contact-form input[name='typeService[]']").on('click',function(){
		if($("#contact-form input[name='typeService[]']:checked").length > 0){
			document.getElementsByClassName("selected-services")[0].innerHTML = "Servicios seleccionados:";
			document.getElementsByClassName("selected-services")[0].innerHTML += "<ul>";
			for(var i=0; i<$("#contact-form input[name='typeService[]']:checked").length; i++){
				document.getElementsByClassName("selected-services")[0].innerHTML += ("<li>" + $("#contact-form input[name='typeService[]']")[i].value + "</li>");
			}
			document.getElementsByClassName("selected-services")[0].innerHTML += "</ul>";
		}
		else{
			document.getElementsByClassName("selected-services")[0].innerHTML = "";
		}

	});
	//Fin servicios seleccionados


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
           				document.getElementById("contact-error").innerHTML = '[DEBE LLENAR TODOS LOS CAMPOS PARA PODER DAR CLICK EN "ENVIAR"]';
           				document.getElementById("contact-form").reset();
           				$(".contact-dropdown-services dd ul").hide();
					}
					else
					{
						document.getElementById("contact-error").innerHTML ="Completa todos los campos";
					}
				}
         	});
		}
		else{
			document.getElementById("contact-error").innerHTML =validacion;
		}
		return false;
	});
	//Datepicker
	var typeDate = document.getElementById("contact-date").type;
	if (typeDate!="date"){
			$fecha=$('#contact-date');
			$fecha.datepicker();
		}
});
