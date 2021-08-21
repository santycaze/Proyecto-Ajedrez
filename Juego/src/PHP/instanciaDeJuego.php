<?php 
class instanciaDeJuego
{
    private $idTablero;
    private $jugador1;
    private $jugador2;
    private $infoJugadores = [];

    function __construct($idTablero,$jugador1,$jugador2){
        $this->idTablero = $idTablero;
        $this->jugador1 = $jugador1;
        $this->jugador2 = $jugador2;
    }

    function mostrarInstancia(){
        if ($this->jugador1 == null || $this->jugador2 == null || $this->idTablero == null) {
            echo "instancia de juego incompleta...";
            $instanciaDeJuego = null;
        }else{
            $instanciaDeJuego = [
                'idTablero' => $this->idTablero,
                'jugador1' => $this->jugador1,
                'jugador2' => $this->jugador2,
                'colorJugador1' => $this->infoJugadores[$this->jugador1],
                'colorJugador2' => $this->infoJugadores[$this->jugador2]
            ];
        }
        return json_encode($instanciaDeJuego);
    }

    
    function setColorJugador1($color){
        $this->infoJugadores[$this->jugador1] = $color;
    }

    function setColorJugador2($color){
        $this->infoJugadores[$this->jugador2] = $color;
    }
}

?>