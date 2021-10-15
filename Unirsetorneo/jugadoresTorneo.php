<?php
    include "../PHP/Servidor/servidor.php";
    $servidor = new Servidor();
    $datosJugadorTorneo = $servidor->datosJugadorTorneo();
    $cantidadJugadoresTorneo = count($datosJugadorTorneo);

    $jugadoresTorneo = '';

     for($x=0;$x<$cantidadJugadoresTorneo;$x++){
          $jugadoresTorneo='<div class="contenedorjugadores">

          <p id="nombreUsuario" >'.$datosJugadorTorneo[($x)]['nombreUsuarioTorneo'].'</p>';
          '</div>';
          echo $jugadoresTorneo;
     }


?>
