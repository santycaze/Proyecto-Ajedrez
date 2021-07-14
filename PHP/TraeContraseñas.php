<?php
     include "Servidor.php";
     $servidor = new Servidor();
     echo json_encode($servidor->Contraseñas());
?>