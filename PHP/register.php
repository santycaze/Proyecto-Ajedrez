<?php
//obtencion de los datos del submit
  $username = mysqli_real_escape_string($db, $_POST['username']);
  $email = mysqli_real_escape_string($db, $_POST['email']);
  $password_1 = mysqli_real_escape_string($db, $_POST['password']);
  $password_2 = mysqli_real_escape_string($db, $_POST['Rpassword']);

  //Llenar el campo
  if (empty($username)) { array_push($errors, "se requiere el nombre de usuario"); }
  if (empty($email)) { array_push($errors, "se requiere mail"); }
  if (empty($Rpassword)) { array_push($errors, "se requiere la contraseña"); }
  if ($password != $Rpassword) {
	array_push($errors, "Las contraseñas no son iguales");
  }
?>