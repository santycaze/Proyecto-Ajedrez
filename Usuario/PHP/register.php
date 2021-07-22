<?php
session_start();
//obtencion de los datos del submit
  $db = mysqli_connect("localhost", "root", "root", "ajedrez");
  $nombreUsuario = mysqli_real_escape_string($db, $_POST['nombreUsuario']);
  $nombreCompleto = mysqli_real_escape_string($db, $_POST['nombreCompleto']);
  $mail = mysqli_real_escape_string($db, $_POST['mail']);
  $ci = mysqli_real_escape_string($db, $_POST['ci']);
  $celular = mysqli_real_escape_string($db, $_POST['celular']);
  $nacimiento = mysqli_real_escape_string($db, $_POST['nacimiento']);
  $contraseña = mysqli_real_escape_string($db, $_POST['contraseña']);
  $Rcontraseña = mysqli_real_escape_string($db, $_POST['Rcontraseña']);
  $errors = array(); 

   //--------------------//
    //Llenar el campo//
   //--------------------//
  if (empty($nombreUsuario)) { array_push($errors, "se requiere nombre de usuario"); }
  if (empty($nombreCompleto)) { array_push($errors, "se requiere nombre completo"); }
  if (empty($contraseña)) { array_push($errors, "se requiere la contraseña"); }
  if (empty($mail)) { array_push($errors, "se requiere mail"); }
  if (empty($ci)) { array_push($errors, "se requiere la cedula"); }
  if (empty($celular)) { array_push($errors, "se requiere numero telefonico"); }
  if (empty($nacimiento )) { array_push($errors, "se requiere fecha de nacimiento"); }
  $user_check_query = "SELECT * FROM Usuario WHERE nombreCompleto='$nombreCompleto' OR nombreUsuario='$nombreUsuario' OR mail='$mail' 
  OR ci='$ci' OR  celular='$celular' OR nacimiento='$nacimiento' OR contraseña='$contraseña' OR Rcontraseña='$Rcontraseña' LIMIT 1";
  $result = mysqli_query($db, $user_check_query);
  $user = mysqli_fetch_assoc($result);
  
  if ($idUsuario) { /* nombre repetido */
    if ($idUsuario['nombreUsuario'] === $nombreUsuario) {
      array_push($error, "Ese nombre de usuario ya existe");
    }
    if ($idUsuario['mail'] === $mail) { /* mail repetido */
      array_push($error, "El email ya existe");
    }
    if ($idUsuario['ci'] === $ci) { /* cedula repetida */
      array_push($error, "ci ya existe");
    }
    if ($idUsuario['celular'] === $celular) { /* num telefonico repetido */
      array_push($error, "numero telefonico ya existe");
    }
    if ($contraseña != $Rcontraseña) {
      array_push($errors, "las contraseñas no son iguales");
      }
  }
  //---------------------//
       // Registrar//
  //---------------------//

  	$query = "INSERT INTO Usuario (nombreUsuario, nombreCompleto, mail, contraseña, ci, celular, nacimiento) 
  			  VALUES('$nombreUsuario', '$nombreCompleto', '$mail', '$contraseña', '$ci', '$celular', '$nacimiento')";
  	mysqli_query($db, $query);
?>