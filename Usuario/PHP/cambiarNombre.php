<?php
     include "../../PHP/Servidor/servidor.php";
     $nombreActual = $_POST['nombreActual'];
     $nombreNuevo = $_POST['nuevoNombre'];
     $servidor = new Servidor();
     $servidor->cambiarNombre($nombreActual,$nombreNuevo);
?>