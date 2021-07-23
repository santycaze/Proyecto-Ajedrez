<?php
session_start();
$usuario = $_POST['usr'];
$foto = $_POST['img'];

$vistaPreviaUsuario = $usuario;
$usuario = "'".$usuario."'";
$llamarediocion = '
<div class="div-wrapper-mod">
       <div class="contenedor-mod">
            <a class="cerrar-mod" onclick="cerrarmod()"><i class="far fa-times-circle"></i></a>
          <div class="icono-usuario"><img src="'.$foto.'" alt="" id="vistaPrevia"></div>
          <div class="nick-usuario">
              <h1>'.$vistaPreviaUsuario.'</h1> <button onclick="cambiarNombre('.$usuario.')"><i class="fas fa-edit"></i></button>
          </div>
          <div class="contenedor-mod-icono">
            <button onclick="cambiarIcono('."'../Proyecto-Ajedrez/IMG/Icono1.png'".')"><img src="IMG/icono1.png" alt=""></button>
            <button onclick="cambiarIcono('."'../Proyecto-Ajedrez/IMG/Icono2.png'".')"><img src="IMG/icono2.png" alt=""></button>
            <button onclick="cambiarIcono('."'../Proyecto-Ajedrez/IMG/Icono3.png'".')"><img src="IMG/icono3.png" alt=""></button>
            <button onclick="cambiarIcono('."'../Proyecto-Ajedrez/IMG/Icono4.png'".')"><img src="IMG/icono4.png" alt=""></button>
            <button onclick="cambiarIcono('."'../Proyecto-Ajedrez/IMG/Icono5.png'".')"><img src="IMG/icono5.png" alt=""></button>
        </div>
          
          <div class="guardar-edicion">
             <button onclick="guardarMod()">Guardar<i class="far fa-save"></i>
              </button>
          </div>
   </div> ';

   echo $llamarediocion;
?>