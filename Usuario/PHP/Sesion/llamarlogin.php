<?PHP
$llamarlogin = '

<div class="login">
<div class="contenedor-login">
    <button class="cerrarlogin" onclick="cerrarLogin()"><i class="far fa-times-circle"></i></button>
    <div class="contenedor-contenedor-textologin">
<div class="contenedor-textologin">
<h2>Iniciar sesión</h2>
<div class="box">
    <input type="text" onkeypress="onkey(event)" id="usr" class="input-login" name="username" required="" placeholder="Usuario">
</div>
<div class="box">
    <input type="password" onkeypress="onkey(event)" class="input-login" id="pass" name="password" required="" placeholder="Contraseña">
</div>
<div class="err">*Usuario o contraseña incorrecta</div>
<br><br>
<button onclick="login()" class="submit">Iniciar sesion</button>
<br>
<p>Si no tienes usuario <a href="./HTML/register.html">Registrate aqui</a></p>
<p><a href="./HTML/solicitudRestablecerContra.html">¿Olvidaste tu contraseña?</a></p>
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