<?php



$destinatario=$_POST['email-contact'];
$asunto = "Gracias por contactrnos";
$cuerpo = 'Mensaje (contenido) del e-mail';

//para el envío en formato HTML 
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";

//dirección del remitente
$headers .= "From: AORI <sistemas@aori.mx>\r\n";
$headers .= "Reply-To: hola@aori.mx\r\n";

//ruta del mensaje desde origen a destino
$headers .= "Return-path: sistemas@aori.mx\r\n";

//direcciones que recibirán copia oculta
$headers .= "Bcc: sistemas@aori.mx\r\n";

mail($destinatario,$asunto,$cuerpo,$headers);
 ?>
