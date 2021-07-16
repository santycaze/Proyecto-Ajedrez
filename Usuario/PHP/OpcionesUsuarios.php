<?php
session_start();
$usuario = $_POST['usr'];
$llamarediocion = '
<div class="div-wrapper-mod">
       <div class="contenedor-mod">
            <a class="cerrar-mod" onclick="cerrarmod()"><i class="far fa-times-circle"></i></a>
          <div class="icono-usuario"><img src="IMG/icono1.png" alt="" id="vistaPrevia"></div>
          <div class="nick-usuario">
              <h1>'.$usuario.'</h1> <button><i class="fas fa-edit"></i></button>
          </div>
          <div class="contenedor-mod-icono">
            <button onclick="cambiarIcono('."'../Proyecto-Ajedrez/IMG/Icono1.png'".')"><img src="IMG/icono1.png" alt=""></button>
            <button onclick="cambiarIcono('."'../Proyecto-Ajedrez/IMG/Icono2.png'".')"><img src="IMG/icono2.png" alt=""></button>
            <button onclick="cambiarIcono('."'../Proyecto-Ajedrez/IMG/Icono3.png'".')"><img src="IMG/icono3.png" alt=""></button>
            <button onclick="cambiarIcono('."'../Proyecto-Ajedrez/IMG/Icono4.png'".')"><img src="IMG/icono4.png" alt=""></button>
            <button onclick="cambiarIcono('."'../Proyecto-Ajedrez/IMG/Icono5.png'".')"><img src="IMG/icono5.png" alt=""></button>
        </div>
          
          <div class="guardar-edicion">
             <button onclick="guardarmod()">Guardar<i class="far fa-save"></i>
              </button>
          </div>
   </div> ';

   echo $llamarediocion;
?>