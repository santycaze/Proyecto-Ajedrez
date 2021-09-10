import { loopBuscador } from "../juego.js";
import { setVariables } from "./Datos_De_Juego.js";
import { Movimiento } from "./Mover_Fichas.js";

const socket = io('http://localhost:3000');

var nombre = sessionStorage.getItem('j1')

socket.emit('conectado', nombre)
socket.emit('buscarJugador')

socket.on('movimiento', movida => {
    let numero2
    let numero
    let datos = JSON.parse(movida)
    if (datos.movimiento[0] !== null) {
        numero = datos.movimiento[1].split(".")
        numero2 = datos.movimiento[0].split(".")
        Movimiento(9 - numero2[0] + "." + numero2[1], 9 - numero[0] + "." + numero[1])
    }
})

socket.on('jugadorEncontrado', (jugador,color) => {

    console.log('jugadorEncontrado')
    sessionStorage.setItem('colorJugador',color)
    setVariables()

    if (jugador[0].nombreUsuario !== nombre) {
        clearInterval(loopBuscador)
        $('#Jugador2').html(jugador[0].nombreUsuario)
        let img = document.createElement('img');
        img.setAttribute('src', '../' + jugador[0].iconoUsuario)
        img.setAttribute('id', 'foto-jugador2')
        $('#icono-jugador2').html(img)
    }else{
        clearInterval(loopBuscador)
        $('#Jugador2').html(jugador[1].nombreUsuario)
        let img = document.createElement('img');
        img.setAttribute('src', '../' + jugador[1].iconoUsuario)
        img.setAttribute('id', 'foto-jugador2')
        $('#icono-jugador2').html(img)
    }

})

export function enviarDatos(datosJuego) {
    socket.emit('piezaMovida', datosJuego)
}
