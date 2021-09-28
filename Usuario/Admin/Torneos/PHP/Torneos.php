<?php

include "../../../../PHP/Servidor/servidor.php";

/*
 *
 * nombreTorneo - codigoIngreso - puntuacion - FCInscripciones - FFInscripciones - FCTorneo - FFTorneo - tiempoPartida - maximoParticipantes - tiempoMaxPartida - cantPartidas - horarios - tiempoMovimiento - nombreTrofeo - numeroPartidas
 * 
 */

$servidor = new Servidor();
//echo json_encode($_POST);

/*

{"nombreTorneo":"asdf","codIngreso":"3124","puntuacion":"1234","fci":"4123-03-12","ffi":"4234-12-04","tiempoPartida":"1324","maxPart":"1234","tiempoMaxPart":"1234","cantPartidas":"1234","horarios":"00:34","tiempoMov":"14324","nombreTrofeo":"dsfsdf","numeroPartidas":"23423"}

*/
$fecha = DateTime::createFromFormat('Y/m/d', $_POST['fci']);


$NombreTorneo = $_POST['nombreTorneo'];
$CodigoIngreso = $_POST['codIngreso'];
$FCInscripciones = date("Y/m/d", strtotime($_POST['fci']));
$FFInscripciones = date("Y/m/d", strtotime($_POST['ffi']));
$FCTorneo = date("Y/m/d", strtotime($_POST['fct']));
$FFTorneo = date("Y/m/d", strtotime($_POST['fft']));
$tiempoPartida = "00:".$_POST['tiempoPartida'];
$maximoParticipantes = $_POST['maxPart'];
$timepoMaxPartida = "00:".$_POST['tiempoMaxPart'];
$cantPartidas = $_POST['cantPartidas'];
$horarios = "00:".$_POST['horarios'];
$tiempoMovimiento = "00:".$_POST['tiempoMov'];
$nombreTrofeo = $_POST['nombreTrofeo'];
$numeroPartidas = $_POST['numeroPartidas'];

//echo $NombreTorneo."    ".$CodigoIngreso."    ".$puntuacion."    ".$FCInscripciones."    ".$FFInscripciones."    ".$FCTorneo."    ".$FFTorneo."    ".$tiempoPartida."    ".$maximoParticipantes."    ".$timepoMaxPartida."    ".$cantPartidas."    ".$horarios."    ".$tiempoMovimiento."    ".$nombreTrofeo."    ".$numeroPartidas;
$servidor->crearTorneo($NombreTorneo,$CodigoIngreso,$FCInscripciones,$FFInscripciones,$FCTorneo,$FFTorneo,$tiempoPartida,$maximoParticipantes,$timepoMaxPartida,$cantPartidas,$horarios,$tiempoMovimiento,$nombreTrofeo,$numeroPartidas);
?>