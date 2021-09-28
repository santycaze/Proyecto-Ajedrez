import { comenzarJuego } from "./Modulos_Juego/Datos_De_Juego.js";
import { seleccionado } from "./Modulos_Juego/Mover_Fichas.js";
/**
 * 
 */

$(document).ready(function () {
    comenzarJuego()
    resultado(0);
});

$(document).on('click', 'button', function () {
    let casilla = this.id;
    seleccionado(casilla)
});
/**
 * 
 * loop de buscador de jugadores
 * 
 */
$('#Jugador2').html('Buscando...')
let numeroIcono = 1;
let ICONO_JUGADOR_2 = document.createElement('img');
ICONO_JUGADOR_2.setAttribute('id', 'foto-jugador2')
//
export let loopBuscador = setInterval(function () {
    if (numeroIcono === 16) {
        numeroIcono = 1;
    }
    ICONO_JUGADOR_2.setAttribute('src', '../../Proyecto-Ajedrez/IMG/Icono' + numeroIcono + '.png')
    $('#icono-jugador2').html(ICONO_JUGADOR_2)
    numeroIcono++
}, 100);

function resultado(result){
    if(result == 1){
        $('#carita').attr('class', 'fas fa-laugh-beam'); 
        $('#mensaje-modal').html('Ganaste!'); 
    }else if(result == 0){
        $('#carita').attr('class', 'fas fa-frown'); 
        $('#mensaje-modal').html('Perdiste!'); 
    }
    
}