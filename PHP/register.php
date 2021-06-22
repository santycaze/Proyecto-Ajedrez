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
  if (empty($nombreUsuario)) { array_push($errors, "se requiere nombre de usuario"); }
  if (empty($nombreCompleto)) { array_push($errors, "se requiere nombre completo"); }
  if (empty($mail)) { array_push($errors, "se requiere mail"); }
  if (empty($ci)) { array_push($errors, "se requiere la cedula"); }
  if (empty($celular)) { array_push($errors, "se requiere numero telefonico"); }
  if (empty($nacimiento )) { array_push($errors, "se requiere fecha de nacimiento"); }
  if (empty($password)) { array_push($errors, "se requiere contraseña"); }
?>