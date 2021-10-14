<?php
// hacer validacion de contraseñas
include "../../../PHP/Servidor/servidor.php";
$usr = $_POST['usuario'];
$passwd = $_POST['passwd'];
$servidor = new Servidor();
$servidor->Contraseñas($usr, sha1($passwd));