console.log(sessionStorage.getItem('j1'))
const socket = io('http://192.168.1.2:3000');

var datosJuego;
var posicionPieza = 7
var nombre = sessionStorage.getItem('j1')

socket.emit('conectado', nombre)


socket.on('movimiento', movida => {
    let datos = JSON.parse(movida)
    let numero = datos.movimiento[1].split(".")
    let numero2 = datos.movimiento[0].split(".")
    if (numero[1].length > 1) {
        Movimiento(9-numero2[0]+"."+numero2[1],9-numero[0]+"."+numero[1])
    }else{
        Movimiento(9-numero2[0]+"."+numero2[1],9-numero[0]+"."+numero[1])
    }
})

socket.on('color', (colorJugador) => { 
    sessionStorage.setItem('colorJugador', colorJugador)
})
function enviarDatos() {
    datosJuego = sessionStorage.getItem("datosJuego");
    socket.emit('piezaMovida', datosJuego)
    sessionStorage.removeItem("datosJuego")
}
