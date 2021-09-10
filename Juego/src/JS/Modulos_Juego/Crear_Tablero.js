/**
 * 
 */
import { colorJugador,colorOpuesto,letras,numeros,color,blancas,negras } from "./Datos_De_Juego.js";
import { relojJ1,relojJ2 } from "./Tiempo.js";



var contador = 9,
tablero,
X,
Y;

export function crearTablero() {
    contador = 9
    tablero = "<table id='tablero'>";
    if (contador == 9) {
        tablero += "<tr> <td> </td> <td id='sup'></td> <td id='sup'></td> <td id='sup'></td> <td id='sup'></td> <td id='sup'></td> <td id='sup'></td> <td id='sup'></td> <td id='sup'></td> </tr>";
        contador--;
    }
    for (Y = 1; Y <= 8; Y++) {
        //crear tr
        tablero += "<tr id=" + "t" + Y + ">";
        tablero += "<td id='izq'>" + numeros[Y] + "</td>";

        for (X = 1; X <= 8; X++) {
            //crear td
            colocarFichas();
        }
        tablero += "</tr>";
    }
    tablero += "<tr> <td> </td> <td id='inf'>" + letras[1] + "</td> <td id='inf'>" + letras[2] + "</td> <td id='inf'>" + letras[3] + "</td> <td id='inf'>" + letras[4] + "</td> <td id='inf'>" + letras[5] + "</td> <td id='inf'>" + letras[6] + "</td> <td id='inf'>" + letras[7] + "</td> <td id='inf'>" + letras[8] + "</td> </tr>";
    tablero += "</table>";
    $('#tabla2').html(tablero);
    actualizarTablero();
}

function colocarFichas() {

    if (colorJugador == 1) {
        if (contador == 2) {
            casillas(blancas[6], color[colorJugador]);
        } else if (contador == 1 && letras[X] == "a" || contador == 1 && letras[X] == "h") {
            casillas(blancas[3], color[colorJugador]);
        } else if (contador == 1 && letras[X] == "b" || contador == 1 && letras[X] == "g") {
            casillas(blancas[5], color[colorJugador]);
        } else if (contador == 1 && letras[X] == "c" || contador == 1 && letras[X] == "f") {
            casillas(blancas[4], color[colorJugador]);
        } else if (contador == 1 && letras[X] == "d") {
            casillas(blancas[2], color[colorJugador]);
        } else if (contador == 1 && letras[X] == "e") {
            casillas(blancas[1], color[colorJugador]);
        } else if (contador == 7) {
            casillas(negras[6], color[colorOpuesto]);
        } else if (contador == 8 && letras[X] == "a" || contador == 8 && letras[X] == "h") {
            casillas(negras[3], color[colorOpuesto]);
        } else if (contador == 8 && letras[X] == "b" || contador == 8 && letras[X] == "g") {
            casillas(negras[5], color[colorOpuesto]);
        } else if (contador == 8 && letras[X] == "c" || contador == 8 && letras[X] == "f") {
            casillas(negras[4], color[colorOpuesto]);
        } else if (contador == 8 && letras[X] == "d") {
            casillas(negras[2], color[colorOpuesto]);
        } else if (contador == 8 && letras[X] == "e") {
            casillas(negras[1], color[colorOpuesto]);
        } else {
            casillas();
        }
    } else {
        if (contador == 2) {
            casillas(negras[6], color[colorJugador]);
        } else if (contador == 1 && letras[X] == "a" || contador == 1 && letras[X] == "h") {
            casillas(negras[3], color[colorJugador]);
        } else if (contador == 1 && letras[X] == "b" || contador == 1 && letras[X] == "g") {
            casillas(negras[5], color[colorJugador]);
        } else if (contador == 1 && letras[X] == "c" || contador == 1 && letras[X] == "f") {
            casillas(negras[4], color[colorJugador]);
        } else if (contador == 1 && letras[X] == "d") {
            casillas(negras[2], color[colorJugador]);
        } else if (contador == 1 && letras[X] == "e") {
            casillas(negras[1], color[colorJugador]);
        } else if (contador == 7) {
            casillas(blancas[6], color[colorOpuesto]);
        } else if (contador == 8 && letras[X] == "a" || contador == 8 && letras[X] == "h") {
            casillas(blancas[3], color[colorOpuesto]);
        } else if (contador == 8 && letras[X] == "b" || contador == 8 && letras[X] == "g") {
            casillas(blancas[5], color[colorOpuesto]);
        } else if (contador == 8 && letras[X] == "c" || contador == 8 && letras[X] == "f") {
            casillas(blancas[4], color[colorOpuesto]);
        } else if (contador == 8 && letras[X] == "d") {
            casillas(blancas[2], color[colorOpuesto]);
        } else if (contador == 8 && letras[X] == "e") {
            casillas(blancas[1], color[colorOpuesto]);
        } else {
            casillas();
        }
    }
}

function casillas(value, color) {
    /*
    Creo las casillas del tablero y coloco las fichas.
    */
    if (value == undefined) { //si la casilla no tiene ficha
        if (contador == 8) {
            tablero += "<td><div class='divCas' id='c-" + contador + "." + letras[X] + "'><button class=" + "casilla" + X + " id='" + contador + "." + letras[X] + "  value=''><span></span><skull class='fas fa-skull' id='laskull' lacaveira='" + contador + "." + letras[X] + "'></skull></button></div></td>"
        } else {
            tablero += "<td><div class='divCas' id='c-" + contador + "." + letras[X] + "'><button class=" + "casilla" + X + " id='" + contador + "." + letras[X] + "'  value=''><div class='pMovimiento' position='" + contador + "." + letras[X] + "'><skull class='fas fa-skull' id='laskull' lacaveira='" + contador + "." + letras[X] + "'></skull></div></button></div></td>"
        }
    } else { // si la casilla tiene ficha
        if (contador == 8) {
            tablero += '<td><div class="divCas" id="c-' + contador + '.' + letras[X] + '"><button class=' + 'casilla' + X + ' id="' + contador + '.' + letras[X] + '-' + color + '" value="' + value + '"><div class="pMovimiento" position="' + contador + "." + letras[X] + '"><span></span><skull class="fas fa-skull" id="laskull" lacaveira="' + contador + "." + letras[X] + '"></skull></div>' + value + '</button></div></td>';
        } else {
            tablero += '<td><div class="divCas" id="c-' + contador + '.' + letras[X] + '"><button class=' + 'casilla' + X + ' id="' + contador + '.' + letras[X] + '-' + color + '" value="' + value + '"><div class="pMovimiento" position="' + contador + "." + letras[X] + '"><span></span><skull class="fas fa-skull" id="laskull" lacaveira="' + contador + "." + letras[X] + '"></skull></div>' + value + '</button></div></td>';
        }
    }
    if (X == 8) {
        tablero += "<td id='der'> </td>";
        contador--;
    }
}

export function actualizarTablero() {
    //casillasClaras = sessionStorage.getItem("casillasClaras")
    //casillasOscuras = sessionStorage.getItem("casillasOscuras")
    //Actualiza las casillas para eliminar selecciones anteriores
    for (let Y = 1; Y <= 8; Y++) {
        for (let X = 1; X <= 8; X++) {
            // Colores asignados a casillas

            if (Y % 2 == 0) {
                if (X % 2 == 0) {
                    $("#t" + Y + " " + ".casilla" + X).css("background-color", casillasClaras);
                } else {
                    $("#t" + Y + " " + ".casilla" + X).css("background-color", casillasOscuras);
                }
            } else {
                if (X % 2 != 0) {
                    $("#t" + Y + " " + ".casilla" + X).css("background-color", casillasClaras);
                } else {
                    $("#t" + Y + " " + ".casilla" + X).css("background-color", casillasOscuras);
                }
            }
        }
    }
    $('.pMovimiento').css("display", "none")
    $('.pMovimiento').css("background-color", "transparent")
    $('skull').css("color", "transparent")
}