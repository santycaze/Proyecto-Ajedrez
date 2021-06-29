<?php
     include "C:/xampp/htdocs/Proyecto-Ajedrez/PHP/servidor.php";
     $servidor = new Servidor();
     echo json_encode($servidor->datosPeriodista());
?>