const socket = io('http://192.168.1.2:3000');

var datosJuego;
var posicionPieza = 7

socket.on('movimiento', movida => {
    let datos = JSON.parse(movida)
    console.log(datos.movimiento[0]+" --- "+datos.movimiento[1])
    var numero = datos.movimiento[1].split(".")
    var numero2 = datos.movimiento[0].split(".")
    console.log(numero[0])
    console.log(numero2[0])
    Movimiento(9-numero2[0]+"."+numero2[1],9-numero[0]+"."+numero[1])
})

function enviarDatos() {
    datosJuego = sessionStorage.getItem("datosJuego");
    socket.emit('piezaMovida', datosJuego)
    sessionStorage.removeItem("datosJuego")
}