<?php
include '../../PHP/conexion.php';
//obtencion de los datos del submit
$nombreUsuario = $_POST["nombreUsuario"]; 
$nombreCompleto = $_POST["nombreCompleto"];
$mail = $_POST["mail"];
$ci=111;
$celular = $_POST["celular"];
$nacimiento = $_POST["nacimiento"];
$contrasena = $_POST["contrasena"];
$Rcontrasena = $_POST["Rcontrasena"];
$tipo=1;
  

   
 
   if($sentencia = $mysqli->prepare("CALL register(?,?,?,?,?,?,?);")) {
    $sentencia->bind_param('ssissii', $nombreUsuario,$mail,$celular,$contrasena,$nombreCompleto,$ci,$tipo);
    if ($sentencia->execute()) {
        $sentencia->bind_result($valor);
        if($sentencia->fetch()){
            if($valor == 1){
                $sentencia->close();
                echo 1;
            }else{
                echo 2;
            }
        }
    }else{
        throw new Exception('Error en prepare: ' . $mysqli->error);
    }
}else{
    throw new Exception('Error en prepare: ' . $mysqli->error);
}
?>