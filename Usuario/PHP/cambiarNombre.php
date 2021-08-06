<?php
include "../../PHP/Servidor/servidor.php";
$nombreActual = $_POST['nombreActual'];
$nombreNuevo = $_POST['nuevoNombre'];
$servidor = new Servidor();
if ($nombreActual != null && $nombreNuevo != null) {
    $servidor->cambiarNombre($nombreActual, $nombreNuevo);
} else {
    echo 1;
}
