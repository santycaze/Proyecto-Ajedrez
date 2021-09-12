import { crearTablero } from "./Crear_Tablero.js";
import { reanudarTiempo,mostrarTiempo,pararTiempo } from "./Tiempo.js";
/**
 * 
 */
export let numeros,
    colorJugador,
    colorOpuesto,
    color,
    blancas,
    negras,
    letras,
    colorPmovimiento,
    colorPmovimientoRGB,
    casillasClaras,
    casillasOscuras,
    puntos = 0,
    ganador = false,
    perdedor = false;


color = new Array();
blancas = new Array(); // 1: Rey, 2: Reina, 3: Torre, 4: Alfil, 5: Caballo, 6: Peon
negras = new Array(); // 1: Rey, 2: Reina, 3: Torre, 4: Alfil, 5: Caballo, 6: Peon
letras = new Array();
numeros = new Array();

color = { 1: "Blancas", 0: "Negras" }
blancas = { 1: "<img src='../IMG/ReyBlanco.png' id='ficha'></img>", 2: "<img src='../IMG/ReinaBlanca.png' id='ficha'></img>", 3: "<img src='../IMG/TorreBlanca.png' id='ficha'></img>", 4: "<img src='../IMG/AlfilBlanco.png' id='ficha'></img>", 5: "<img src='../IMG/CaballoBlanco.png' id='ficha'></img>", 6: "<img src='../IMG/PeonBlanco.png' id='ficha'></img>" }
negras = { 1: "<img src='../IMG/ReyNegro.png' id='ficha'></img>", 2: "<img src='../IMG/ReinaNegra.png' id='ficha'></img>", 3: "<img src='../IMG/TorreNegra.png' id='ficha'></img>", 4: "<img src='../IMG/AlfilNegro.png' id='ficha'></img>", 5: "<img src='../IMG/CaballoNegro.png' id='ficha'></img>", 6: "<img src='../IMG/PeonNegro.png' id='ficha'></img>" }

export function comenzarJuego() {
    colorPmovimiento = sessionStorage.getItem("colorMovimiento")
    colorPmovimientoRGB = sessionStorage.getItem("colorMovimientoRGB")
    casillasClaras = sessionStorage.getItem("casillasClaras")
    casillasOscuras = sessionStorage.getItem("casillasOscuras")


    if (sessionStorage.getItem('colorJugador') == null) {
        
        colorJugador = 1
        sessionStorage.setItem('turno', false)
        pararTiempo()

    } else {

        colorJugador = sessionStorage.getItem('colorJugador');  //1: blancas 0: negras
        reanudarTiempo()
        mostrarTiempo()
        switch (colorJugador) {
            case '1':
                sessionStorage.setItem('turno', true)
                break;
            case '0':
                sessionStorage.setItem('turno', false)
                break;

        }

    }


    if (colorJugador == 1) {
        colorOpuesto = 0;
        letras = { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "g", 8: "h" }
        numeros = { 1: "8", 2: "7", 3: "6", 4: "5", 5: "4", 6: "3", 7: "2", 8: "1" }
    } else if (colorJugador == 0) {
        colorOpuesto = 1;
        letras = { 1: "h", 2: "g", 3: "f", 4: "e", 5: "d", 6: "c", 7: "b", 8: "a" }
        numeros = { 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8" }
    }
    crearTablero()
    responsivetablero();
}