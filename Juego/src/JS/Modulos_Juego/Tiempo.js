
$('#Tiempo-Jugador1').html(formato(TiempoJugador1Minutos) + ':' + formato(TiempoJugador1Segundos))
$('#Tiempo-Jugador2').html(formato(TiempoJugador2Minutos) + ':' + formato(TiempoJugador2Segundos))

export function relojJ1() {

    RelojJugador1 = setInterval(function () {
        if (turnoJugador1 === true && TiempoJugador1 !== 0) {

            TIEMPO_JUGADOR_1_MINUTOS = parseInt(TiempoJugador1 / 60)
            TIEMPO_JUGADOR_1_SEGUNDOS = parseInt(TiempoJugador1 % 60)
            --TiempoJugador1
            $('#Tiempo-Jugador1').html(formato(TiempoJugador1Minutos) + ':' + formato(TiempoJugador1Segundos))

        } else if(TiempoJugador1 === 0 && turnoJugador1 === true){

            clearInterval(RelojJugador1)
            $('#Tiempo-Jugador1').html("Gana Jugador 2")

        } else {

            $('#Tiempo-Jugador1').html(formato(TiempoJugador1Minutos) + ':' + formato(TiempoJugador1Segundos))
            clearInterval(RelojJugador1)

        }
    }, 1000);

}

export function relojJ2() {
    RelojJugador2 = setInterval(function () {
        if (turnoJugador2 === true && TiempoJugador2 !== 0) {

            TIEMPO_JUGADOR_2_MINUTOS = parseInt(TiempoJugador2 / 60)
            TIEMPO_JUGADOR_2_SEGUNDOS = parseInt(TiempoJugador2 % 60)
            TIEMPO_JUGADOR_2 = TIEMPO_JUGADOR_2 - 1
            $('#Tiempo-Jugador2').html(formato(TiempoJugador2Minutos) + ':' + formato(TiempoJugador2Segundos))

        } else if(TiempoJugador2 === 0 && turnoJugador2 === true){

            clearInterval(RelojJugador1)
            $('#Tiempo-Jugador1').html("Gana Jugador 1")

        }  else {

            $('#Tiempo-Jugador2').html(formato(TiempoJugador2Minutos) + ':' + formato(TiempoJugador2Segundos))
            clearInterval(RelojJugador2)

        }
    }, 1000);
}