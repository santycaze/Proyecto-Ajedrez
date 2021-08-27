<?php
     include "../PHP/Servidor/servidor.php";
     $servidor = new Servidor();
<<<<<<< HEAD
     echo json_encode($servidor->datosTorneo());
     
     $torneos = '
     <div class="contenedor-torneo">
                    <p id="Nombretorneo">Nombre torneo</p> <button>Ver</button>
                </div>
     ';
?>

=======
     $datostorneo = $servidor->datosTorneo();
     $cantidadtorneos = count($datostorneo);

     $torneos = '';

     for($x=0;$x<$cantidadtorneos;$x++){
          $torneos.='<div class="contenedor-torneo">
          <p id="Nombretorneo">'.$datostorneo[($x)]['nombreTorneo'].'</p> <button>Ver</button>
      </div>';
     }
   
     echo $torneos;
     return $torneos;

?>
>>>>>>> 90be1e71fb7cbf2a82549335b093961afa9dc6c4
