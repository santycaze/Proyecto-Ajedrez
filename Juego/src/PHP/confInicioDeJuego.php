<?php
include "instanciaDeJuego.php";

$jugador = $_POST['jugadores'];

$jugadores = [];
$instancias = [];

array_push($jugadores,$jugador);

if (!isset($jugadores[1])) {
    $ij = new instanciaDeJuego("1qfr3wef14cw",$jugadores[0],null);
}else {
    $ij = new instanciaDeJuego("1qfr3wef14cw",$jugadores[0],$jugadores[1]);
}

array_push($instancias,$ij->obtenerInstancia());

for ($i=0; $i < sizeof($instancias); $i++) { 
    echo '-'.$instancias[$i];
}