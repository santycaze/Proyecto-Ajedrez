<?php

include "CrearTorneo.php";
include "Fixture.php";

/*
 * Parametros - crearTorneos
 * 
 * nombreTorneo - codigoIngreso - puntuacion - FCInscripciones - FFInscripciones - FCTorneo - FFTorneo - tiempoPartida - maximoParticipantes - tiempoMaxPartida - cantPartidas - horarios - tiempoMovimiento - nombreTrofeo - numeroPartidas
 * 
 */

$NombreTorneo = $_POST['nombreTorneo'];
$CodigoIngreso = $_POST['codIngreso'];
$puntuacion = $_POST['puntuacion'];
$FCInscripciones = $_POST['fci'];
$FFInscripciones = $_POST['ffi'];
$FCTorneo = $_POST['fct'];
$FFTorneo = $_POST['fft'];
$tiempoPartida = $_POST['timepoPartida'];
$maximoParticipantes = $_POST['maxPart'];
$timepoMaxPartida = $_POST['tiempoMaxPartida'];
$cantPartidas = $_POST['cantPartida'];
$horarios = $_POST['horarios'];
$tiempoMovimiento = $_POST['tiempoMov'];
$nombreTrofeo = $_POST['nombreTrofeo'];
$numeroPartidas = $_POST['numeroParidas'];

$torneos = new CrearTorneo($numeroTorneo,$CodigoIngreso,$puntuacion, $FCInscripciones,$FFInscripciones,$FCTorneo, $FFTorneo,$tiempoPartida,$maximoParticipantes,$timepoMaxPartida,$cantPartidas,$horarios,$tiempoMovimiento,$nombreTrofeo,$numeroPartidas);


/**
 * realizo validacion de datos antes de guardar el torneo;
 */
$torneos->devolverTorneo();
?>