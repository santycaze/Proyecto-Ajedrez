<?php
    include "C:/xampp/htdocs/Proyecto-Ajedrez/PHP/conexion.php";
    $nombreUsuario = $_POST['user'];  
    $password = $_POST['pass']; 
       
        $nombreUsuario = stripcslashes($nombreUsuario);  
        $password = stripcslashes($password);  
        $nombreUsuario = mysqli_real_escape_string($nombreUsuario);  
        $password = mysqli_real_escape_string($con, $password);  
      
        $sql = "select * from usuario where nombreUsuario = '$nombreUsuario' and password = '$password'";  
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