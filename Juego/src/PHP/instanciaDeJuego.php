<?php 
class instanciaDeJuego
{
    private $idTablero;
    private $jugador1;
    private $colorJugador1;
    private $jugador2;
    private $colorJugador2;
    private $infoJugadores = [];

    function __construct($idTablero,$jugador1,$jugador2){
        $this->idTablero = $idTablero;
        $this->jugador1 = $jugador1;
        $this->jugador2 = $jugador2;
    }
    
    function obtenerInstancia(){
        if ($this->jugador2 == null) {
            $this->setColorJugador1();
            $instanciaDeJuego = [
                'idTablero' => $this->idTablero,
                'jugador1' => $this->jugador1,
                'jugador2' => $this->jugador2,
                'colorJugador1' => $this->colorJugador1,
                'colorJugador2' => $this->colorJugador2
            ];
        }else{
            $this->setColorJugador1();
            $this->setColorJugador2();
            $instanciaDeJuego = [
                'idTablero' => $this->idTablero,
                'jugador1' => $this->jugador1,
                'jugador2' => $this->jugador2,
                'colorJugador1' => $this->colorJugador1,
                'colorJugador2' => $this->colorJugador2
            ];
        }
        return json_encode($instanciaDeJuego);
    }

    function setColorJugador1(){
        $this->colorJugador1 = rand(0, 1);
    }

    function setColorJugador2(){
        if ($this->colorJugador1 == 1 && $this->jugador2 != null) {
            $this->colorJugador2 = 0;
        }else if($this->jugador2 != null){
            $this->colorJugador2 = 1;
        }
    }
}
?>