<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $from = 'From: $name'; 
    $to = 'santycaze@gmail.com'; 
    $subject = 'Soporte Técnico - 8BitTech';
    $ip = $_SERVER['REMOTE_ADDR'];
    $select_enquirytype = strip_tags($_POST['enquirytype']);

    $body = "From: $name\n E-Mail: $email\n Message:\n $message  \n IP User: $ip";
?>

<?php
if ($_POST['submit']) {
    if (mail ($to, $subject, $body, $from)) { 
        echo '<p>Gracias, nos comunicaremos lo mas pronto posible!</p>';
    } else { 
        echo '<p> Hubo un error, Intenta mas tarde :(</p>'; 
    }
}
?>