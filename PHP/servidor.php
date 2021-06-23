<?php
class Servidor
{
    function conectar()
    {
        if (!$conexion = mysqli_connect("localhost", "root", "root", "LocademiaDeChoferes")) {
            echo "Error al conectar con la Base de datos.";
            exit();
        } else {
            return $conexion;
        }
    }
}
