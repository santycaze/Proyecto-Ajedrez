<?php
include '../../PHP/conexion.php';

$nombreUsuario = $_POST['user'];
$contra = $_POST['pass'];
$cifrado =sha1($contra);
if ($nombreUsuario != " " && $contra != " ") {
    if ($sentencia = $mysqli->prepare("CALL login(?,?);")) {
        $sentencia->bind_param('ss', $nombreUsuario, $cifrado);
        if ($sentencia->execute()) {
            $sentencia->bind_result($usr, $cont, $icono);
            if ($sentencia->fetch()) {
                if ($usr == $nombreUsuario && $cont == $cifrado) {
                    session_start();
                    $_SESSION['nombre'] = $nombreUsuario;
                    $fila = array('nombre' => $nombreUsuario,'icono' => $icono);
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
