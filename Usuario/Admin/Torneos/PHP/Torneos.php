<?php

include "../../../../PHP/Servidor/servidor.php";

/*
 *
 * nombreTorneo - codigoIngreso - puntuacion - FCInscripciones - FFInscripciones - FCTorneo - FFTorneo - tiempoPartida - maximoParticipantes - tiempoMaxPartida - cantPartidas - horarios - tiempoMovimiento - nombreTrofeo - numeroPartidas
 * 
 */

$servidor = new Servidor();

$NombreTorneo = $_POST['nombreTorneo'];
$CodigoIngreso = $_POST['codIngreso'];
$puntuacion = $_POST['puntuacion'];
$FCInscripciones = $_POST['fci'];
$FFInscripciones = $_POST['ffi'];
$FCTorneo = $_POST['fct'];
$FFTorneo = $_POST['fft'];
$tiempoPartida = $_POST['tiempoPartida'];
$maximoParticipantes = $_POST['maxPart'];
$timepoMaxPartida = $_POST['tiempoMaxPartida'];
$cantPartidas = $_POST['cantPartidas'];
$horarios = $_POST['horarios'];
$tiempoMovimiento = $_POST['tiempoMov'];
$nombreTrofeo = $_POST['nombreTrofeo'];
$numeroPartidas = $_POST['numeroParidas'];

echo $NombreTorneo."    ".$CodigoIngreso."    ".$puntuacion."    ".$FCInscripciones."    ".$FFInscripciones."    ".$FCTorneo."    ".$FFTorneo."    ".$tiempoPartida."    ".$maximoParticipantes."    ".$timepoMaxPartida."    ".$cantPartidas."    ".$horarios."    ".$tiempoMovimiento."    ".$nombreTrofeo."    ".$numeroPartidas;

//$servidor->crearTorneo($NombreTorneo,$CodigoIngreso,$puntuacion,$FCInscripciones,$FFInscripciones,$FCTorneo,$FFTorneo,$tiempoPartida,$maximoParticipantes,$timepoMaxPartida,$cantPartidas,$horarios,$tiempoMovimiento,$nombreTrofeo,$numeroPartidas);
?>