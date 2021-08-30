<?php

class Fixture extends CrearTorneo
{   
    private $numeroJugadores;
     
    function __construct($numeroJugadores){

    }

    function obtenerFixture(){
        /**
         * Devuelve los datos del fixture creado para el torneo 
         * especificado. 
         */
    }

    function crearFases(){
        /**
         * Crea las distinatas fases del fixture dependiendo de los jugadores que tenga el torneo
         */
    }

    function modificarFases(){
        /**
         * permite modificar las fases del fixture anteriormente creadas
         */
    }

    function modificarInstancias(){
        /**
         * permite modificar las instancias de juego del fixture
         */
    }
}
