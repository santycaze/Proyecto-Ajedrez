<?php
    include "../PHP/Servidor/servidor.php";
    $servidor = new Servidor();
    $datosJugadorTorneo = $servidor->datosJugadorTorneo(1);
    $cantidadJugadoresTorneo = count($datosJugadorTorneo);

    $jugadoresTorneo = '';

     for($x=0;$x<$cantidadJugadoresTorneo;$x++){
          $jugadoresTorneo='<div class="contenedorjugadores">

          <img src=".'.$datosJugadorTorneo[($x)]['icono'].'"></img><p id="nombreUsuario" >'.$datosJugadorTorneo[($x)]['nombreUsuarioTorneo'].'</p>';
          '</div>';
          echo $jugadoresTorneo;
     }


?>
