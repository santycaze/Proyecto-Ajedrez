function relojJ1() {
    RelojJugador1 = setInterval(function () {
        if (turnoJugador1 === true && TiempoJugador1 !== 0) {
            TiempoJugador1Minutos = parseInt(TiempoJugador1 / 60)
            TiempoJugador1Segundos = parseInt(TiempoJugador1 % 60)
            TiempoJugador1 = TiempoJugador1 - 1
            $('#tiempoJugador1').html(formato(TiempoJugador1Minutos) + ':' + formato(TiempoJugador1Segundos))
        } else if(TiempoJugador1 === 0 && turnoJugador1 === true){
            clearInterval(RelojJugador1)
            $('#tiempoJugador1').html("Gana Jugador 2")
        } else {
            $('#tiempoJugador1').html(formato(TiempoJugador1Minutos) + ':' + formato(TiempoJugador1Segundos))
            clearInterval(RelojJugador1)
        }
    }, 1000);
}

function relojJ2() {
    RelojJugador2 = setInterval(function () {
        if (turnoJugador2 === true && TiempoJugador2 !== 0) {
            TiempoJugador2Minutos = parseInt(TiempoJugador2 / 60)
            TiempoJugador2Segundos = parseInt(TiempoJugador2 % 60)
            TiempoJugador2 = TiempoJugador2 - 1
            $('#tiempoJugador2').html(formato(TiempoJugador2Minutos) + ':' + formato(TiempoJugador2Segundos))
        } else if(TiempoJugador2 === 0 && turnoJugador2 === true){
            clearInterval(RelojJugador1)
            $('#tiempoJugador1').html("Gana Jugador 1")
        }  else {
            $('#tiempoJugador2').html(formato(TiempoJugador2Minutos) + ':' + formato(TiempoJugador2Segundos))
            clearInterval(RelojJugador2)
        }
    }, 1000);
}