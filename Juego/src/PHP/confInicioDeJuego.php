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

$ij2 = new instanciaDeJuego("1qfrsdfg4vfv","Jugador1",null);
$ij3 = new instanciaDeJuego("1qfr3sdfv4cw","Jugador2","Usuario6");
$ij4 = new instanciaDeJuego("1sfdsvdf14cw","Jugador3",null);
$ij5 = new instanciaDeJuego("1qfr3wsfdvcw","Firpo","Usuario4");

array_push($instancias,$ij->obtenerInstancia(),$ij2->obtenerInstancia(),$ij3->obtenerInstancia(),$ij4->obtenerInstancia(),$ij5->obtenerInstancia());

for ($i=0; $i < sizeof($instancias); $i++) { 
    echo $instancias[$i];
}