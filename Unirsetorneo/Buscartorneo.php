<?php
     include "../PHP/Servidor/servidor.php";
     $servidor = new Servidor();
     echo json_encode($servidor->datosTorneo());
     
     $torneos = '
     <div class="contenedor-torneo">
                    <p id="Nombretorneo">Nombre torneo</p> <button>Ver</button>
                </div>
     ';
?>

