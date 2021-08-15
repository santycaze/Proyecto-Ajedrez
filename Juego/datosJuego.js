const socket = io('http://localhost:3000');

var datosJuego;


socket.on('movimiento', movida => {
    sessionStorage.setItem("datosJuego", movida)
    recibirDatos();
})

function enviarDatos() {
    datosJuego = sessionStorage.getItem("datosJuego");
    socket.emit('piezaMovida', datosJuego)
    sessionStorage.removeItem("datosJuego")
}