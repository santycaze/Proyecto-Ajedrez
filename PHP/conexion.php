<?php

//---------------------------//
/* Abrir conexion mysql */
//---------------------------//

$mysqli = new mysqli('179.27.156.47','8bittech','8bittech8bittech','ajedrez','33061');

//---------------------------//
/* Error de conexion */
//---------------------------//

if ($mysqli->connect_error) {

    die('Error : (' . $mysqli->connect_errno . ') ' . $mysqli->connect_error);

}
