const socket = io('http://192.168.4.48:3000');

var datosJuego;


socket.on('movimiento', movida => {
    let datos = JSON.parse(movida)
    console.log(socket.id)
    Movimiento(datos.movimiento[0],datos.movimiento[1])
})

function enviarDatos() {
    datosJuego = sessionStorage.getItem("datosJuego");
    socket.emit('piezaMovida', datosJuego)
    sessionStorage.removeItem("datosJuego")
}