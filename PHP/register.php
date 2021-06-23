<?php
//obtencion de los datos del submit
  $nombreUsuario = mysqli_real_escape_string($db, $_POST['nombreUsuario']);
  $nombreCompleto = mysqli_real_escape_string($db, $_POST['nombreCompleto']);
  $mail = mysqli_real_escape_string($db, $_POST['mail']);
  $ci = mysqli_real_escape_string($db, $_POST['ci']);
  $celular = mysqli_real_escape_string($db, $_POST['celular']);
  $nacimiento = mysqli_real_escape_string($db, $_POST['nacimiento']);
  $password = mysqli_real_escape_string($db, $_POST['password']);

  //Llenar el campo
  if (empty($username)) { array_push($errors, "se requiere el nombre de usuario"); }
  if (empty($email)) { array_push($errors, "se requiere mail"); }
  if (empty($Rpassword)) { array_push($errors, "se requiere la contraseña"); }
  if ($password != $Rpassword) {
	array_push($errors, "Las contraseñas no son iguales");
  }
?>