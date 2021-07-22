<?php
    include '../../PHP/conexion.php';

    $nombreUsuario = $_POST['user'];  
    $contraseña = $_POST['pass'];   
      
        $sql = "select * from usuario where nombreUsuario = '$nombreUsuario' and contraseña = '$contraseña'";  
        $result = $mysqli->query($sql); 
        $row = mysqli_fetch_array($result, MYSQLI_ASSOC);  
        $count = mysqli_num_rows($result);  
          //valida si se loguea o no
        if($count == 1){  
            $_SESSION['nombre'] = $nombreUsuario;
            echo $_SESSION['nombre'];
        }  
        else{  
            echo "1";  
        }     
?>