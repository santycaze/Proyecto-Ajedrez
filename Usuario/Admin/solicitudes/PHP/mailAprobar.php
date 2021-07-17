<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../../../../PHPMailer-6.3.0/src/Exception.php';
require '../../../../PHPMailer-6.3.0/src/PHPMailer.php';
require '../../../../PHPMailer-6.3.0/src/SMTP.php';
//
/*------------------------------------------------------------------------------------------*/
//
$mailUsuario = $_POST['mail'];
$nombre = $_POST['nombre'];
//
/*------------------------------------------------------------------------------------------*/
//
$mail = new PHPMailer(true);
$mail->SMTPDebug = 2; 
$mail->IsSMTP();
$mail->SMTPAuth = true;
$mail->SMTPSecure = 'tls';
$mail->Host = 'smtp.gmail.com';
$mail->Port = 587;
$mail->CharSet = 'UTF-8';
$mail->Username ='eightbchess@gmail.com'; 
$mail->Password = 'silvinaaa'; 
//
/*------------------------------------------------------------------------------------------*/ 
//
$mail->From = "eightbchess@gmail.com";
$mail->FromName = "8-bit Chess";
$mail->addAddress($mailUsuario, $nombre);
$mail->isHTML(true);
$mail->Subject = "Solicitud de usuario";
$mail->Body = "Su usuario ha sido <h1 style='color:#79bf1d'>A P R O B A D O<h1><br/><a href='http://localhost/Proyecto-Ajedrez/'>Ir a 8-bit Chess</a>";
try {
    $mail->send();
    echo "Mail enviado...";
} catch (Exception $e) {
    echo "Mailer Error: " . $mail->ErrorInfo;
}
?>