<?php
// hacer validacion de contrasenas
include "../../PHP/Servidor/servidor.php";
$usr = $_POST['usuario'];
$passwd = $_POST['passwd'];
$servidor = new Servidor();
$servidor->Contraseñas($usr, $passwd);