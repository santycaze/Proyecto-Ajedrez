<?php

require '../../../../PHP/Servidor/servidor.php';

class CrearTorneo extends Servidor
{

    private $nombreTorneo;
    private $codigoIngreso;
    private $puntuacion;
    private $FCIns;
    private $FFIns;
    private $FCTor;
    private $FFTor;
    private $tiempoPart;
    private $maximoParticipantes;
    private $tiempoMaxPart;
    private $cantPartidas;
    private $horarios;
    private $tiempoMov;
    private $nombreTrofeo;
    private $numeroPartidas;

    function __construct($nombreTorneo,$codigoIngreso,$puntuacion,$fechaComInscripciones,$fechaFinInscripciones,$fechaComTorneo,$fechaFinTorneo,$tiempoPartida,$maximoParticipantes,$tiempoMaxPartida,$cantPart,$horarios,$tiempoMov,$nombreTrofeo,$numeroPartidas){
        $this->nombreTorneo = $nombreTorneo;
        $this->codigoIngreso = $codigoIngreso;
        $this->puntuacion = $puntuacion;
        $this->FCIns = $fechaComInscripciones;
        $this->FFIns = $fechaFinInscripciones;
        $this->FCTor = $fechaComTorneo;
        $this->FFTor = $fechaFinTorneo;
        $this->tiempoPart = $tiempoPartida;
        $this->maxPart = $maximoParticipantes;
        $this->tiempoMaxPart = $tiempoMaxPartida;
        $this->cantPart = $cantPart;
        $this->horarios = $horarios;
        $this->tiempoMov = $tiempoMov;
        $this->nombreTrofeo = $nombreTrofeo;
        $this->numeroPartidas = $numeroPartidas;
    }

    function guardarTorneo(){
        Servidor::crearTorneo($this->nombreTorneo,$this->codigoIngreso,$this->puntuacion,$this->FCIns,$this->FFIns,$this->FCTor,$this->FFTor,$this->tiempoPart,$this->maxPart,$this->tiempoMaxPart,$this->cantPart,$this->horarios,$this->tiempoMov,$this->nombreTrofeo,$this->numeroPartidas);
    }

    function modificarTorneo(){
        /**
         * realizo las modificaciones indicadas en el objeto y lo dguardo
         */
        $this->guardarTorneo();
    }

}
