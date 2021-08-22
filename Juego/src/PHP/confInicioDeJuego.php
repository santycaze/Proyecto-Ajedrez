<?php
include "instanciaDeJuego.php";

$instancias = [];

$ij1 = new instanciaDeJuego("1qfr3wef14cw","Firpo","Larry");
$ij2 = new instanciaDeJuego("1qfrfasdgtrt","pulga","Larry");
$ij3 = new instanciaDeJuego("1qfr32345dvs","Firpo","pulga");
$ij4 = new instanciaDeJuego("1qfg45ed2ccw","Firpo","Usuario5");
$ij5 = new instanciaDeJuego("1q!@wercwe34","Usuario3","Larry");

array_push($instancias,$ij1->obtenerInstancia(),$ij2->obtenerInstancia(),$ij3->obtenerInstancia(),$ij4->obtenerInstancia(),$ij5->obtenerInstancia());

for ($i=0; $i < sizeof($instancias); $i++) { 
    echo $instancias[$i]."\n";
}

