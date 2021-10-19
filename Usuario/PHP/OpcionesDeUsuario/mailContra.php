<?php
/*
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
*/
require '../../../PHPMailer-6.3.0/src/Exception.php';
require '../../../PHPMailer-6.3.0/src/PHPMailer.php';
require '../../../PHPMailer-6.3.0/src/SMTP.php';
//
/*------------------------------------------------------------------------------------------*/
//
$mailUsuario = $_POST['mail'];
$body = file_get_contents('../../../HTML/mailRestablecer.html');
//
/*------------------------------------------------------------------------------------------*/
//
$mail = new PHPMailer\PHPMailer\PHPMailer(true);
$mail->IsSMTP();
$mail->SMTPDebug = 2; 
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
$mail->addAddress($mailUsuario);
$mail->isHTML(true);
$mail->Subject = "Restablecer Contraseña";
$mail->Body = $body;
try {
    $mail->send();
    echo "Mail enviado...";
} catch (Exception $e) {
    echo "Mailer Error: " . $mail->ErrorInfo;
}
?>