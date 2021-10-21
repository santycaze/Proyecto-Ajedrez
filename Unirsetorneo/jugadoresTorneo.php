<?php
    include "../PHP/Servidor/servidor.php";
    $servidor = new Servidor();
    $datosJugadorTorneo = $servidor->datosJugadorTorneo(1);
    $cantidadJugadoresTorneo = count($datosJugadorTorneo);

    $jugadoresTorneo = '';

     for($x=0;$x<$cantidadJugadoresTorneo;$x++){
          $jugadoresTorneo='
                    <div id="jugador" style="display: flex"> <img id="jugadores-torneo" src=".'.$datosJugadorTorneo[($x)]['icono'].'" style="width: 20%"></img><p id="nombreUsuario" >'.$datosJugadorTorneo[($x)]['nombreUsuarioTorneo'].'</p></div>
               ';

          echo $jugadoresTorneo;
     }


?>
