<?php

$todoBien="true";

//OBTENER DATOS DEL FORMULARIO
$nombre=$_POST['contact-name'];
$edad=$_POST['contact-age'];
$telefono=$_POST['contact-phone'];
$destinatario=$_POST['email-contact'];

//Obtener servicios en lo que está interesado
$serviciosInteres="";
if(!empty($_POST['typeService'])) {
    foreach($_POST['typeService'] as $check) {
    	$serviciosInteres.=$check."\n";
    }
}
$descripcionMensaje=$_POST['contact-description'];
$fecha=$_POST['contact-date'];

/*echo "Nombre: ".$nombre."\n Antigüedad: ".$edad."\n telefono: ".$telefono."\n mail: ".$destinatario."\n servicios: ".$serviciosInteres."\n descripcion: ".$descripcionMensaje."\n fecha: ".$fecha;*/



/*if($todoBien=="true")
{

	
	$asunto = "Gracias por contactarnos";
	$cuerpo = 'Mensaje (contenido) del e-mail';

	//para el envío en formato HTML 
	$headers = "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";

	//dirección del remitente
	$headers .= "From: AORI <sistemas@aori.mx>\r\n";
	$headers .= "Reply-To: sistemas@aori.mx\r\n";

	//ruta del mensaje desde origen a destino
	$headers .= "Return-path: sistemas@aori.mx\r\n";

	//direcciones que recibirán copia oculta
	$headers .= "Bcc: sistemas@aori.mx\r\n";

	mail($destinatario,$asunto,$cuerpo,$headers);
}*/
echo $todoBien;
 ?>
