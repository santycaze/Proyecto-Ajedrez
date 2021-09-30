<?php
include "../../../PHP/Servidor/servidor.php";
$iconoNuevo = $_POST['icono'];
$_SESSION['foto'] = $iconoNuevo;
$nombreActual = $_POST['nombreActual'];
$servidor = new Servidor();
$servidor->cambiarIcono($nombreActual, $iconoNuevo);
