<?php

//---------------------------//
/* Abrir conexion mysql */
//---------------------------//

$mysqli = new mysqli('localhost','root','root','Ajedrez','33061');

//---------------------------//
/* Error de conexion */
//---------------------------//

if ($mysqli->connect_error) {

    die('Error : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);

}

?> 