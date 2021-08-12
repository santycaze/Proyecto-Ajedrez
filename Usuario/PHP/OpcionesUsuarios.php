<?php
session_start();
$usuario = $_POST['usr'];
$foto = $_POST['img'];

$vistaPreviaUsuario = $usuario;
$usuario = "'" . $usuario . "'";
$llamarediocion = '
<div class="div-wrapper-mod">
       <div class="contenedor-mod">
            <a class="cerrar-mod" onclick="cerrarmod()"><i class="far fa-times-circle"></i></a>
          <div class="icono-usuario"><img src="' . $foto . '" alt="" id="vistaPrevia"></div>
          <div class="nick-usuario">
              <h1>' . $vistaPreviaUsuario . '</h1> <button onclick="cambiarNombre(' . $usuario . ')"><i class="fas fa-edit"></i></button>
          </div>
          <div class="contenedor-mod-icono">
            <button onclick="cambiarIcono(' . "'../Proyecto-Ajedrez/IMG/Icono1.png'" . ')"><img src="IMG/icono1.png" alt=""></button>
            <button onclick="cambiarIcono(' . "'../Proyecto-Ajedrez/IMG/Icono2.png'" . ')"><img src="IMG/icono2.png" alt=""></button>
            <button onclick="cambiarIcono(' . "'../Proyecto-Ajedrez/IMG/Icono3.png'" . ')"><img src="IMG/icono3.png" alt=""></button>
            <button onclick="cambiarIcono(' . "'../Proyecto-Ajedrez/IMG/Icono4.png'" . ')"><img src="IMG/icono4.png" alt=""></button>
            <button onclick="cambiarIcono(' . "'../Proyecto-Ajedrez/IMG/Icono5.png'" . ')"><img src="IMG/icono5.png" alt=""></button>
            <button onclick="cambiarIcono(' . "'../Proyecto-Ajedrez/IMG/Icono6.png'" . ')"><img src="IMG/icono6.png" alt=""></button>
            <button onclick="cambiarIcono(' . "'../Proyecto-Ajedrez/IMG/Icono7.png'" . ')"><img src="IMG/icono7.png" alt=""></button>
            <button onclick="cambiarIcono(' . "'../Proyecto-Ajedrez/IMG/Icono8.png'" . ')"><img src="IMG/icono8.png" alt=""></button>
            <button onclick="cambiarIcono(' . "'../Proyecto-Ajedrez/IMG/Icono9.png'" . ')"><img src="IMG/icono9.png" alt=""></button>
            <button onclick="cambiarIcono(' . "'../Proyecto-Ajedrez/IMG/Icono10.png'" . ')"><img src="IMG/icono10.png" alt=""></button>
            <button onclick="cambiarIcono(' . "'../Proyecto-Ajedrez/IMG/Icono11.png'" . ')"><img src="IMG/icono11.png" alt=""></button>
            
            <button onclick="cambiarIcono(' . "'../Proyecto-Ajedrez/IMG/Icono12.png'" . ')"><img src="IMG/icono12.png" alt=""></button>
            <button onclick="cambiarIcono(' . "'../Proyecto-Ajedrez/IMG/Icono14.png'" . ')"><img src="IMG/icono14.png" alt=""></button>
            <button onclick="cambiarIcono(' . "'../Proyecto-Ajedrez/IMG/Icono15.png'" . ')"><img src="IMG/icono15.png" alt=""></button>
            <button onclick="cambiarIcono(' . "'../Proyecto-Ajedrez/IMG/Icono16.png'" . ')"><img src="IMG/icono16.png" alt=""></button>
            <button onclick="cambiarIcono(' . "'../Proyecto-Ajedrez/IMG/Icono17.png'" . ')"><img src="IMG/icono17.png" alt=""></button>
        </div>

          <div class="guardar-edicion">
             <button onclick="guardarMod()">Guardar<i class="far fa-save"></i>
              </button>
          </div>
   </div> ';

echo $llamarediocion;
