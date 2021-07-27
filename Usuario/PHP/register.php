<?php 
include '../../PHP/conexion.php';

$usuario = $_POST["usuario"];
$cedula = $_POST["cedula"];
$celular = $_POST["celular"];
$email = $_POST["email"];
$apellido = $_POST["apellido"];
$nombrecompleto = $_POST["NombreCompleto"];
$contrasena = $_POST["Contra"];
$tipo = $_POST["Tipo"];
$Nacimiento = $_POST["Nacimiento"];

if($sentencia = $mysqli->prepare("CALL register(?,?,?,?,?,?,?,?,?);")) {
  $sentencia->bind_param('ssissiiss', $usuario,$email,$celular,$contrasena,$apellido,$cedula,$tipo,$nombrecompleto,$Nacimiento);
  if ($sentencia->execute()) {
      $sentencia->bind_result($valor);
      if($sentencia->fetch()){
       if($valor == null){
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