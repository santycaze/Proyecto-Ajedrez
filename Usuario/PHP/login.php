<?php
    include '../../PHP/conexion.php';

    $nombreUsuario = $_POST['user'];  
    $contra = $_POST['pass'];   
      
    if($sentencia = $mysqli->prepare("CALL login(?,?);")) {
        $sentencia->bind_param('ss', $nombreUsuario,$contra);
        if ($sentencia->execute()) {
            $sentencia->bind_result($valor);
            if($sentencia->fetch()){
                echo $valor;
               session_start();
               $_SESSION['nombre'] = $nombreUsuario;
               echo $_SESSION['nombre'];
                }else{
                    echo 1;
                } 
        }else{
            throw new Exception('Error en prepare: ' . $mysqli->error);
        }
    }else{
        throw new Exception('Error en prepare: ' . $mysqli->error);
    }    
?>