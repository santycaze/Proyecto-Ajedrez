<?php
include '../../../../servidor.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../../../../PHPMailer-6.3.0/src/Exception.php';
require '../../../../PHPMailer-6.3.0/src/PHPMailer.php';
require '../../../../PHPMailer-6.3.0/src/SMTP.php';
/*------------------------------------------------------------------------------------------*/
//
$mailUsuario = $_POST['mail'];
$nombre = $_POST['nombre'];
$servidor = new servidor();
$servidor->AgregarUsuario($_POST['tipo'],$_POST['usuario'],$_POST['ci'],$_POST['año'],$_POST['apellido'],$_POST['institucion'],$_POST['nombre'],$_POST['contacto'],$_POST['contraseña'],$_POST['nacimiento'],$_POST['mail']);
//
/*------------------------------------------------------------------------------------------*/
//
$mail = new PHPMailer(true);
$mail->SMTPDebug = 2; 
$mail->IsSMTP();
$mail->SMTPAuth = true;
$mail->SMTPSecure = 'tls';
$mail->Host = 'smtp.gmail.com';
$mail->Port = 587;// TCP port to connect to
$mail->CharSet = 'UTF-8';
$mail->Username ='cyberhydrauy@gmail.com'; 
$mail->Password = 'hugoturbio667'; 
//
/*------------------------------------------------------------------------------------------*/ 
//
$mail->From = "cyberhydrauy@gmail.com";
$mail->FromName = "CyberHydra";
$mail->addAddress($mailUsuario, $nombre);
$mail->isHTML(true);
$mail->Subject = "Solicitud de Usuario";
$mail->Body = " <div style='width: 500px; height: 400px; padding: 20px; background-color: #111111; border-radius: 30px;
                            text-align: center; font-weight: lighter;' class='email-wrapper'>
                    <img style='width: 100%; height: auto;'  src='https://i.imgur.com/DlPs135.png' alt=''>
                    <hr style='border: 1px solid #0076be; margin: 20px 0'>
                    <p style='font-size: 17px; color: white;'>Tu cuenta de <b>ChessUY Championship</b> fue:</p><p style='font-size: 25px; color: greenyellow;'>APROBADA</p><p style='font-size: 17px; color: white;'>Haz click abajo para loguearte.</p>
                    <hr style='border: 1px solid #0076be; margin: 20px 0'>
                    <br>
                    <a style='font-size: 15px; margin: 40px 0; padding: 20px 40px; background-color: #0076be; text-decoration: none; color: white; border-radius: 30px' href='https://localhost:8080/ChessUY/Form/Login'><i class='fas fa-chess-knight' style='margin: 0 10px'></i> Ir a ChessUY</a>
                </div>";
try {
    $mail->send();
    echo "Mail enviado...";
} catch (Exception $e) {
    echo "Mailer Error: " . $mail->ErrorInfo;
}