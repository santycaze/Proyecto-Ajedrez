<?php
     include "../../../../PHP/Servidor/servidor.php";
     $servidor = new Servidor();
     echo json_encode($servidor->datosJugador());
?>