const socket = io('http://localhost:3000');

var datosJuego;
var posicionPieza = 7;
var nombre = sessionStorage.getItem('j1')
var instanciasDeJuego = new Array()

socket.emit('conectado', nombre)

$.ajax({
    type: "GET",
    url: "src/PHP/confInicioDeJuego.php",
    data: { jugadores: nombre },
    success: function (response) {
        //
        var instancias = response.split('-')
        instancias.forEach(element => {
            if (element != "") {
                var objInstancias = JSON.parse(element)

                if (objInstancias.jugador1 == nombre) {
                    sessionStorage.setItem('colorJugador', objInstancias.colorJugador1)
                } else if (objInstancias.jugador1 == nombre) {
                    sessionStorage.setItem('colorJugador', objInstancias.colorJugador2)
                }
            }
        });
        //
    }
});

socket.on('movimiento', movida => {
    let datos = JSON.parse(movida)
    let numero = datos.movimiento[1].split(".")
    let numero2 = datos.movimiento[0].split(".")
    if (numero[1].length > 1) {
        Movimiento(9 - numero2[0] + "." + numero2[1], 9 - numero[0] + "." + numero[1])
    } else {
        Movimiento(9 - numero2[0] + "." + numero2[1], 9 - numero[0] + "." + numero[1])
    }
})

function enviarDatos() {
    datosJuego = sessionStorage.getItem("datosJuego");
    socket.emit('piezaMovida', datosJuego)
    sessionStorage.removeItem("datosJuego")
}
