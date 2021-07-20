<?php
    include "C:\xampp\htdocs\Proyecto-Ajedrez\PHP\Servidor\servidor.php";
    include "C:\xampp\htdocs\Proyecto-Ajedrez\PHP\conexion.php";

    define('DB_SERVER', 'localhost');
    define('DB_USERNAME', 'root');
    define('DB_PASSWORD', 'root');
    define('DB_DATABASE', 'Ajedrez');
    $db = mysqli_connect(DB_SERVER,DB_USERNAME,DB_PASSWORD,DB_DATABASE);
   
    $nombreUsuario = $_POST['user'];  
    $contraseña = $_POST['pass']; 
        
        $nombreUsuario = stripcslashes($nombreUsuario);  
        $contraseña = stripcslashes($contraseña);  
        $nombreUsuario = mysqli_real_escape_string($db, $nombreUsuario);  
        $contraseña = mysqli_real_escape_string($db, $contraseña);
      
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