<?php

//---------------------------//
/* Abrir conexion mysql */
//---------------------------//
//Puerto  - 33061
$mysqli = new mysqli('localhost','root','root','Ajedrez');

//---------------------------//
/* Error de conexion */
//---------------------------//

if ($mysqli->connect_error) {

    die('Error : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);

}

?> 