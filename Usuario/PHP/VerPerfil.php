<?php

$usuario = $_POST['usr'];
$icono = $_POST['img'];

$ver = '
<div class="perfil-wrapper">
    <div class="perfil">
    <a class="cerrar-perfil" onclick="cerrarperfil()"><i class="far fa-times-circle"></i></a>
        <div class="contenedor-wrapper">
            <div class="foto-perfil-verperfil">
                <img src="' . $icono . '" alt=""> <h1>' . $usuario . '</h1>
            </div>
            <div class="contenedor-nombres-trofeos-verperfil">
                <div class="contenedor-trofeos-verperfil">
                    <h2>Trofeos</h2>
                    <div class="trofeos-wrapper">
                        <div class="trofeo-verperfil"><h2>Trofeo1</h2><div class="trofeo-icono-verperfil"><i class="fas fa-trophy"></i></div></div>
                        <div class="trofeo-verperfil"><h2>Trofeo2</h2><div class="trofeo-icono-verperfil"><i class="fas fa-trophy"></i></div></div>
                        <div class="trofeo-verperfil"><h2>Trofeo3</h2><div class="trofeo-icono-verperfil"><i class="fas fa-trophy"></i></div></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="contenedor-logros-verperfil">
            <div class="icono-logro-verperfil"> <i class="fas fa-medal"></i> </div>
            <div class="icono-logro-verperfil"><i class="fas fa-medal"></i></div>
            <div class="icono-logro-verperfil"><i class="fas fa-medal"></i></div>
            <div class="icono-logro-verperfil"><i class="fas fa-medal"></i></div>
            <div class="icono-logro-verperfil"><i class="fas fa-medal"></i></div>
            <div class="icono-logro-verperfil"><i class="fas fa-medal"></i></div>
            <div class="icono-logro-verperfil"><i class="fas fa-medal"></i></div>
        </div>
    </div>
</div>';

echo $ver;
return $ver;

?>





































</body>
</html>
