import { setVariables } from "./Modulos_Juego/Datos_De_Juego.js";
import { seleccionado } from "./Modulos_Juego/Mover_Fichas.js";

$(document).ready(function () {
    setVariables()
});

$(document).on('click', 'button', function() {
    let casilla = this.id;
    seleccionado(casilla)
});


let img = document.createElement('img');
img.setAttribute('src', '../'+sessionStorage.getItem('foto'))
img.setAttribute('id', 'foto-jugador1')
$('#icono-jugador1').html(img)
$('#Jugador1').html(sessionStorage.getItem('j1'))



$('#Jugador2').html('Buscando...')

let numeroIcono = 1;

export let RelojJugador1 = setInterval(function () {
        let img = document.createElement('img');
        if (numeroIcono === 16) {
            numeroIcono = 1;
        }
        img.setAttribute('src', '../../Proyecto-Ajedrez/IMG/Icono'+numeroIcono+'.png')
        img.setAttribute('id', 'foto-jugador2')
        $('#icono-jugador2').html(img)
        numeroIcono++
},100);

