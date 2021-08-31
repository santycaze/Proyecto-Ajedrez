const socket = io('http://192.168.1.2:3000');

var datosJuego;
var posicionPieza = 7
var nombre = sessionStorage.getItem('j1')
var instanciasDeJuego = new Array()

socket.emit('conectado', nombre)

$.ajax({
    type: "POST",
    url: "src/PHP/confInicioDeJuego.php",
    data: {jugadores:nombre},
    success: function (response) {
        console.log(response)
        var gi = JSON.parse(response)
        if (gi.jugador1 == nombre) {
            instanciasDeJuego.push(gi);
        }
        sessionStorage.setItem('colorJugador', gi.colorJugador1)
        console.log(instanciasDeJuego)
    }
});

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
    
})
function enviarDatos() {
    datosJuego = sessionStorage.getItem("datosJuego");
    socket.emit('piezaMovida', datosJuego)
    sessionStorage.removeItem("datosJuego")
}
