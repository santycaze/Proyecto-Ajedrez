const socket = io('http://192.168.1.6:3000');

var datosJuego;
var posicionPieza = 7
let inicio = true

socket.on('movimiento', movida => {
    let datos = JSON.parse(movida)
    let numero = datos.movimiento[1].split(".")
    let numero2 = datos.movimiento[0].split(".")
    
    if (numero[1].length > 1) {
        Movimiento(9-numero2[0]+"."+numero2[1],9-numero[0]+"."+numero[1])
    }else{
        Movimiento(9-numero2[0]+"."+numero2[1],9-numero[0]+"."+numero[1])
    }

    if (colorJugador == 1 && inicio == false) {
        colorJugador = 0
    }
})

socket.on('color', color => {
    if (color == 1) {
        socket.emit('asignarColor', 0)
    }else{
        socket.emit('asignarColor', 1)
    }
    console.log(color)
    asignarColor(color)
})

$(document).ready(function () {
    colorJugador = 1;
    socket.emit('colorJugador', colorJugador)
    inicio = false
});

function enviarDatos() {
    datosJuego = sessionStorage.getItem("datosJuego");
    socket.emit('piezaMovida', datosJuego)
    sessionStorage.removeItem("datosJuego")
}