<?php
     include "Servidor/Servidor.php";
     $servidor = new Servidor();
     echo json_encode($servidor->datosPeriodista());
?>