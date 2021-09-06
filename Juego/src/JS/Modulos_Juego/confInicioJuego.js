import { RelojJugador1 } from "../juego.js";
import { setVariables } from "./Datos_De_Juego.js";
import { Movimiento } from "./Mover_Fichas.js";

const socket = io('http://localhost:3000');

var nombre = sessionStorage.getItem('j1')

socket.emit('conectado', nombre)

$.ajax({
    type: "POST",
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

socket.on('jugadorEncontrado', (jugador) => {

    setVariables()

    if (jugador.nombreUsuario !== nombre) {
        clearInterval(RelojJugador1)
        $('#Jugador2').html(jugador.nombreUsuario)
        let img = document.createElement('img');
        img.setAttribute('src', '../'+jugador.iconoUsuario)
        img.setAttribute('id', 'foto-jugador2')
        $('#icono-jugador2').html(img)
    }
    
})


export function enviarDatos(datosJuego) {
    socket.emit('piezaMovida', datosJuego)
}
