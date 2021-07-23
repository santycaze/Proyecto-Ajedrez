<?PHP
$llamarlogin = '

<div class="login">
<div class="contenedor-login">
    <button class="cerrarlogin"><i class="far fa-times-circle"></i></button>
    <div class="contenedor-contenedor-textologin">
<div class="contenedor-textologin">
<h2>Iniciar sesión</h2>
<div class="box">
    <input type="text" id="usr" class="input-login" name="username" required="" placeholder="Usuario">
</div>
<div class="box">
    <input type="password" class="input-login" id="pass" name="password" required="" placeholder="Contraseña">
</div>
<br><br>
<button onclick="login()" class="submit">Iniciar sesion</button>
</div>


</div>
    <div class="contenedor-contenedor-imagenlogin">
    <div class="contenedor-imagenlogin">
<img src="../Proyecto-Ajedrez/IMG/logo.png">
</div>
</div>
</div>
</div>

   ';

    echo $llamarlogin;
    return $llamarlogin;


    ?>