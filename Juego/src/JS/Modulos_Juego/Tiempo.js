

let RelojJugador1;
let RelojJugador2;

let minutos = 5;
let tiempoInicial = minutos * 60

let TiempoJugador1 = tiempoInicial;
let TiempoJugador2 = tiempoInicial;


let TIEMPO_JUGADOR_1_MINUTOS = TiempoJugador1 / 60
let TIEMPO_JUGADOR_1_SEGUNDOS = TiempoJugador1 % 60

let TIEMPO_JUGADOR_2_MINUTOS
let TIEMPO_JUGADOR_2_SEGUNDOS

export function mostrarTiempo() {
    $('#Tiempo-jugador1').html(formato(TIEMPO_JUGADOR_1_MINUTOS) + ':' + formato(TIEMPO_JUGADOR_1_SEGUNDOS))
    $('#Tiempo-jugador2').html(formato(TIEMPO_JUGADOR_1_MINUTOS) + ':' + formato(TIEMPO_JUGADOR_1_SEGUNDOS))
}

export function reanudarTiempo() {
    if (sessionStorage.getItem('turno') == 'true') {
        rj1()
    } else {
        rj2()
    }
}


export function pararTiempo() {
    clearInterval(RelojJugador1)
    clearInterval(RelojJugador2)
}

function rj1() {
    RelojJugador1 = setInterval(() => {
        if (sessionStorage.getItem('turno') == 'true' && TiempoJugador1 !== 0) {

            TIEMPO_JUGADOR_1_MINUTOS = parseInt(TiempoJugador1 / 60)
            TIEMPO_JUGADOR_1_SEGUNDOS = parseInt(TiempoJugador1 % 60)
            $('#Tiempo-jugador1').html(formato(TIEMPO_JUGADOR_1_MINUTOS) + ':' + formato(TIEMPO_JUGADOR_1_SEGUNDOS))
            TiempoJugador1-=1;
        } else if (TiempoJugador1 === 0 && sessionStorage.getItem('turno') == 'true') {
            pararTiempo()
        } else {
            clearInterval(RelojJugador1)
        }


    }, 1000);
}

function rj2() {
    RelojJugador2 = setInterval(() => {
        if (sessionStorage.getItem('turno') != 'true' && TiempoJugador2 !== 0) {
            TIEMPO_JUGADOR_2_MINUTOS = parseInt(TiempoJugador2 / 60)
            TIEMPO_JUGADOR_2_SEGUNDOS = parseInt(TiempoJugador2 % 60)
            $('#Tiempo-jugador2').html(formato(TIEMPO_JUGADOR_2_MINUTOS) + ':' + formato(TIEMPO_JUGADOR_2_SEGUNDOS))
            TiempoJugador2-=1;
        } else if (TiempoJugador2 === 0 && sessionStorage.getItem('turno') != 'true') {

            pararTiempo()

        } else {
            clearInterval(RelojJugador2)
        }
    }, 1000);
}







export function formato(tiempo) {
    if (tiempo < 10) { return '0' + tiempo } else { return tiempo }
}

/*


let TiempoJugador2Minutos
let TiempoJugador2Segundos
let TiempoJugador1Minutos
let TiempoJugador1Segundos
let turnoJugador1;
let turnoJugador2;
let parar;

function rj1() {
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

function rj2() {
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

$(document).on('click', '#mvj1', function () {

    var tiempoMovida =tiempoInicial-TiempoJugador1

    if (turnoJugador2 !== true) {
        turnoJugador1 = false
        turnoJugador2 = true

        console.log(tiempoMovida)

        clearInterval(RelojJugador1)
        rj2()
    } else {
        alert('No es tu Turno.')
    }
});

$(document).on('click', '#mvj2', function () {

    TiempoJugador2 += 3

    if (turnoJugador1 !== true) {
        turnoJugador1 = true
        turnoJugador2 = false
        clearInterval(RelojJugador2)
        rj1()

    } else {
        alert('No es tu Turno.')
    }
});

$(document).on('click', '#empezar', function () {
    rj2()
    rj1()
    turnoJugador1 = true
});


*/