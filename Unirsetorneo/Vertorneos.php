<?php
     include "../PHP/Servidor/servidor.php";
     $servidor = new Servidor();
     $datostorneo = $servidor->datosTorneo();
     $cantidadtorneos = count($datostorneo);

     $torneos = '';

     for($x=0;$x<$cantidadtorneos;$x++){
          $torneos.='<div class="contenedor-torneo">
          <div class="contenedor-arriba">
              <p id="Nombretorneo">'.$datostorneo[($x)]['nombreTorneo'].'</p>
              <div class="contenedor-tiempo">
                  <i class="fas fa-clock"></i>
                  <p class="Tiempo">'.$datostorneo[($x)]['tiempoPartida'].'</p>
              </div>
          </div>
          <div class="contenedor-centro">
              <div class="jugador1"> <img src="../IMG/Icono1.png" alt="">
                  <p>Jugador1</p>
              </div>

              <div class="vs">
                  <p>VS</p>
              </div>
              <div class="jugador2"> <img src="../IMG/Icono2.png" alt="">
                  <p>Jugador2</p>
              </div>
          </div>
          <div class="contenedor-boton"> <button>Ver Partido</button></div>
      </div>';
     }
   
     echo $torneos;
     return $torneos;

?>