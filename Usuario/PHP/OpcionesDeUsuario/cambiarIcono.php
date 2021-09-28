<?php
include "../../PHP/Servidor/servidor.php";
$iconoNuevo = $_POST['icono'];
$nombreActual = $_POST['nombreActual'];
$servidor = new Servidor();
$servidor->cambiarIcono($nombreActual, $iconoNuevo);
