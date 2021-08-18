const socket = io('http://192.168.1.6:3000');

var datosJuego;
var posicionPieza = 7

socket.on('movimiento', movida => {
    let datos = JSON.parse(movida)
    let numero = datos.movimiento[1].split(".")
    let numero2 = datos.movimiento[0].split(".")
    console.log(numero[1].length)
    if (numero[1].length > 1) {
        Movimiento(9-numero2[0]+"."+numero2[1],9-numero[0]+"."+numero[1])
    }else{
        Movimiento(9-numero2[0]+"."+numero2[1],9-numero[0]+"."+numero[1])
    }

})

function enviarDatos() {
    datosJuego = sessionStorage.getItem("datosJuego");
    socket.emit('piezaMovida', datosJuego)
    sessionStorage.removeItem("datosJuego")
}