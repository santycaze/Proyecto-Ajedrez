<?php

include "CrearTorneo.php";

/*
 * Parametros - crearTorneos
 * 
 * nombreTorneo - codigoIngreso - puntuacion - FCInscripciones - FFInscripciones - FCTorneo - FFTorneo - tiempoPartida - maximoParticipantes - tiempoMaxPartida - cantPartidas - horarios - tiempoMovimiento - nombreTrofeo - numeroPartidas
 * 
 */


$torneos = new CrearTorneo("Nombre del torneo","12345","15", "2021-12-12","2021-01-01","2021-10-20","2021-10-20","00:10:00","10","00:10:00","9","13:55:00","00:05:00","Nombre del trofeo","7");

$torneos->guardarTorneo();
?>