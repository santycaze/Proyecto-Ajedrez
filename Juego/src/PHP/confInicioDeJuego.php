<?php
include "instanciaDeJuego.php";

$ij = new instanciaDeJuego("1qfr3wef14cw","Firpo","Larry");

$ij->setColorJugador1(1);
$ij->setColorJugador2(0);

echo $ij->mostrarInstancia();
