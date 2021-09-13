<?php
include '../../PHP/conexion.php';

$nombreUsuario = $_POST['user'];
$contra = $_POST['pass'];
$cifrado =sha1($contra);
if ($nombreUsuario != " " && $contra != " ") {
    if ($sentencia = $mysqli->prepare("CALL login(?,?);")) {
        $sentencia->bind_param('ss', $nombreUsuario, $cifrado);
        if ($sentencia->execute()) {
            $sentencia->bind_result($usr, $cont, $icono, $tipoUsr);
            if ($sentencia->fetch()) {
                if ($usr == $nombreUsuario && $cont == $cifrado) {
                    $fila = array('nombre' => $nombreUsuario,'icono' => $icono, 'tipo' => $tipoUsr);
                    echo json_encode($fila);
                }
            } else {
                echo 1;
            }
        } else {
            throw new Exception('Error en prepare: ' . $mysqli->error);
        }
    } else {
        throw new Exception('Error en prepare: ' . $mysqli->error);
    }
}
