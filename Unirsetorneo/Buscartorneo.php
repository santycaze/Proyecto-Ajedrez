<?php
     include "../PHP/Servidor/servidor.php";
     $servidor = new Servidor();
     $datostorneo = $servidor->datosTorneo();
     $cantidadtorneos = count($datostorneo);

     $torneos = '';

     for($x=0;$x<$cantidadtorneos;$x++){
          $torneos.='<div class="contenedor-torneo">

          <p id="Nombretorneo" >'.$datostorneo[($x)]['nombreTorneo'].'</p> 
          <button id="'.$datostorneo[($x)]['nombreTorneo'].'" onclick="verTorneos()">Ver</button>
          

          

      </div>';
     }
   
     echo $torneos;
     return $torneos;

?>
