<?php
    include "../../PHP/Servidor/conexion.php";
    include "../../PHP/Servidor/config.php";
    $nombreUsuario = $_POST['user'];  
    $contraseña = $_POST['pass']; 
       
        $nombreUsuario = stripcslashes($nombreUsuario);  
        $contraseña = stripcslashes($contraseña);  
        $nombreUsuario = mysqli_real_escape_string($nombreUsuario);  
        $contraseña = mysqli_real_escape_string($con, $contraseña);  
      
        $sql = "select * from usuario where nombreUsuario = '$nombreUsuario' and contraseña = '$contraseña'";  
        $result = $mysqli->query($sql); 
        $row = mysqli_fetch_array($result, MYSQLI_ASSOC);  
        $count = mysqli_num_rows($result);  
          //valida si se loguea o no
        if($count == 1){  
            header('Location: ../Usuario/Administrador/administrador.html');
        }  
        else{  
            echo "1";  
        }     
?>