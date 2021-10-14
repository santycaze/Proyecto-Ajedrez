<?php
    include "../PHP/Servidor/servidor.php";
    $servidor = new Servidor();
    $datosJugadorTorneo = $servidor->datosJugadorTorneo();
    $cantidadJugadoresTorneo = count($datosJugadorTorneo);

    $jugadoresTorneo = '';

     for($x=0;$x<$cantidadJugadoresTorneo;$x++){
          $jugadoresTorneo.='<div class="contenedor-jugadores">

          <p id="nombreUsuario" >'.$datosJugadoresTorneo[($x)]['nombreUsuarioTorneo']'</p>'
          
          

          

      </div>';
     }


?>
