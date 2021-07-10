var tablero, casilla, contador, destino, seleccion, colorJugador, color, blancas, negras, letras, separadorA, separadorB, claseSeleccion, claseDestino;
let Y;
let X;
//Definicion de variables
color = new Array();
blancas = new Array();  // 1: Rey, 2: Reina, 3: Torre, 4: Alfil, 5: Caballo, 6: Peon
negras = new Array(); // 1: Rey, 2: Reina, 3: Torre, 4: Alfil, 5: Caballo, 6: Peon
letras = new Array();
//Definicion de arrays
color = { 1: "Blancas", 0: "Negras" }
blancas = { 1: "&#9812;", 2: "&#9813;", 3: "&#9814;", 4: "&#9815;", 5: "&#9816;", 6: "&#9817;" }
negras = { 1: "&#9818;", 2: "&#9819;", 3: "&#9820;", 4: "&#9821;", 5: "&#9822;", 6: "&#9823;" }
letras = { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "g", 8: "h" }
/*---------------------------------------------------------------------------------------------------------------------------------*/
$(document).ready(function () {
    colorJugador = asignarColor();
    crearTablero();
});
/*---------------------------------------------------------------------------------------------------------------------------------*/
//
/*---------------------------------------------------------------------------------------------------------------------------------*/
function seleccionado(casillaSeleccionada) {
    //Marca la casilla seleccionada.
    //
    casilla = document.getElementById(casillaSeleccionada).value;
    var infoFicha = casillaSeleccionada.split("-");
    if (infoFicha[1] == color[colorJugador]) {
        actualizarTablero();
        if (casilla != " ") {
            if (color[colorJugador] == 0) {
                seleccion = casillaSeleccionada;
                document.getElementById(casillaSeleccionada).style.backgroundColor = "#adadad";
                tableroIntel(casilla, infoFicha[0], color[1]);
            } else {
                seleccion = casillaSeleccionada;
                document.getElementById(casillaSeleccionada).style.backgroundColor = "#adadad";
                tableroIntel(casilla, infoFicha[0], color[0]);
            }

        }
    } else if (infoFicha[1] != color[colorJugador] || infoFicha[1] == color[colorJugador] && casilla == '') {
        let elemento = document.getElementById(casillaSeleccionada);
        let estilo = window.getComputedStyle(elemento);
        let color = estilo.getPropertyValue('background-color');
        if (color == "rgb(173, 150, 255)" || color == "rgb(158, 71, 65)") {
            destino = casillaSeleccionada;
        }
        if (destino != null && seleccion != null) {
            Movimiento(seleccion, destino);
            seleccion = null;
            destino = null;
        }
        //Actualiza las casillas para eliminar cualquier seleccion hecha anteriormente.
        //            
        actualizarTablero();
    } else {
        if (casilla != undefined) {
            console.log("No es: " + color[colorJugador]);
        }
    }

}
/*---------------------------------------------------------------------------------------------------------------------------------*/
//
/*---------------------------------------------------------------------------------------------------------------------------------*/
function actualizarTablero() {
    //Actualiza las casillas
    //
    for (let Y = 1; Y <= 8; Y++) {
        for (let X = 1; X <= 8; X++) {
            //
            // Colores asignados a casillas
            //
            if (Y % 2 == 0) {
                if (X % 2 == 0) {
                    $("#t" + Y + " " + ".casilla" + X).css("background-color", "white");
                } else {
                    $("#t" + Y + " " + ".casilla" + X).css("background-color", "grey");
                }
            } else {
                if (X % 2 != 0) {
                    $("#t" + Y + " " + ".casilla" + X).css("background-color", "white");
                } else {
                    $("#t" + Y + " " + ".casilla" + X).css("background-color", "grey");
                }
            }
            //
        }
    }
}
/*---------------------------------------------------------------------------------------------------------------------------------*/
//
/*---------------------------------------------------------------------------------------------------------------------------------*/
function asignarColor() {
    return (Math.floor(Math.random() * (1.9 - 0) + 0)); //1: blancas 0: negras
}
/*---------------------------------------------------------------------------------------------------------------------------------*/
//
/*---------------------------------------------------------------------------------------------------------------------------------*/
function crearTablero() {
    contador = 9;
    tablero = "<table>";
    if (contador == 9) {
        tablero += "<tr> <td> </td> <td id='sup'>A</td> <td id='sup'>B</td> <td id='sup'>C</td> <td id='sup'>D</td> <td id='sup'>E</td> <td id='sup'>F</td> <td id='sup'>G</td> <td id='sup'>H</td> </tr>";
        contador--;
    }
    for (Y = 1; Y <= 8; Y++) {

        //crear tr
        //
        tablero += "<tr id=" + "t" + Y + ">";
        tablero += "<td id='izq'>" + contador + "</td>";
        //
        for (X = 1; X <= 8; X++) {
            //crear td
            //
            colocarFichas();
            //
        }
        tablero += "</tr>";

    }
    tablero += "<tr> <td> </td> <td id='inf'>A</td> <td id='inf'>B</td> <td id='inf'>C</td> <td id='inf'>D</td> <td id='inf'>E</td> <td id='inf'>F</td> <td id='inf'>G</td> <td id='inf'>H</td> </tr>";
    tablero += "</table>";
    $('#tabla').html(tablero);
    actualizarTablero();
}
/*---------------------------------------------------------------------------------------------------------------------------------*/
//
/*---------------------------------------------------------------------------------------------------------------------------------*/
function casillas(value, color) {
    if (value == undefined) {
        if (contador == 8) {
            tablero += "<td><div id='c-" + contador + "." + letras[X] + "'><button class=" + "casilla" + X + " id='" + contador + "." + letras[X] + "' onclick=" + "seleccionado(" + "'" + contador + "." + letras[X] + "'" + ");" + " value=''></button></div></td>"
        } else {
            tablero += "<td><div id='c-" + contador + "." + letras[X] + "'><button class=" + "casilla" + X + " id='" + contador + "." + letras[X] + "' onclick=" + "seleccionado(" + "'" + contador + "." + letras[X] + "'" + ");" + " value=''></button></div></td>"
        }
    } else {
        if (contador == 8) {
            tablero += "<td><div id='c-" + contador + "." + letras[X] + "'><button class=" + "casilla" + X + " id='" + contador + "." + letras[X] + "-" + color + "' onclick=" + "seleccionado('" + contador + "." + letras[X] + "-" + color + "');" + " value='" + value + "' name='" + color + "'>" + value + "</button></div></td>"
        } else {
            tablero += "<td><div id='c-" + contador + "." + letras[X] + "'><button class=" + "casilla" + X + " id='" + contador + "." + letras[X] + "-" + color + "' onclick=" + "seleccionado('" + contador + "." + letras[X] + "-" + color + "');" + " value='" + value + "' name='" + color + "'>" + value + "</button></div></td>"
        }
    }
    if (X == 8) {
        tablero += "<td id='der'>" + contador + "</td>";
        contador--;
    }
}
/*---------------------------------------------------------------------------------------------------------------------------------*/
//
/*---------------------------------------------------------------------------------------------------------------------------------*/
function colocarFichas() {
    //ordeno las piezas dependiendo del color del jugador.
    if (colorJugador == 1) {
        if (contador == 2) {
            casillas(blancas[6], color[colorJugador]);
        } else if (contador == 3 && letras[X] == "a" || contador == 1 && letras[X] == "h") {
            casillas(blancas[3], color[colorJugador]);
        } else if (contador == 1 && letras[X] == "b" || contador == 1 && letras[X] == "g") {
            casillas(blancas[5], color[colorJugador]);
        } else if (contador == 4 && letras[X] == "c" || contador == 1 && letras[X] == "f") {
            casillas(blancas[4], color[colorJugador]);
        } else if (contador == 1 && letras[X] == "d") {
            casillas(blancas[2], color[colorJugador]);
        } else if (contador == 1 && letras[X] == "e") {
            casillas(blancas[1], color[colorJugador]);
        } else if (contador == 7) {
            casillas(negras[6], color[colorJugador - 1]);
        } else if (contador == 8 && letras[X] == "a" || contador == 8 && letras[X] == "h") {
            casillas(negras[3], color[colorJugador - 1]);
        } else if (contador == 8 && letras[X] == "b" || contador == 6 && letras[X] == "g") {
            casillas(negras[5], color[colorJugador - 1]);
        } else if (contador == 8 && letras[X] == "c" || contador == 8 && letras[X] == "f") {
            casillas(negras[4], color[colorJugador - 1]);
        } else if (contador == 8 && letras[X] == "d") {
            casillas(negras[2], color[colorJugador - 1]);
        } else if (contador == 8 && letras[X] == "e") {
            casillas(negras[1], color[colorJugador - 1]);
        } else {
            casillas();
        }
    } else {
        if (contador == 2) {
            casillas(negras[6], color[colorJugador]);
        } else if (contador == 3 && letras[X] == "a" || contador == 1 && letras[X] == "h") {
            casillas(negras[3], color[colorJugador]);
        } else if (contador == 1 && letras[X] == "b" || contador == 1 && letras[X] == "g") {
            casillas(negras[5], color[colorJugador]);
        } else if (contador == 4 && letras[X] == "c" || contador == 1 && letras[X] == "f") {
            casillas(negras[4], color[colorJugador]);
        } else if (contador == 1 && letras[X] == "d") {
            casillas(negras[2], color[colorJugador]);
        } else if (contador == 1 && letras[X] == "e") {
            casillas(negras[1], color[colorJugador]);
        } else if (contador == 7) {
            casillas(blancas[6], color[colorJugador + 1]);
        } else if (contador == 8 && letras[X] == "a" || contador == 8 && letras[X] == "h") {
            casillas(blancas[3], color[colorJugador + 1]);
        } else if (contador == 8 && letras[X] == "b" || contador == 8 && letras[X] == "g") {
            casillas(blancas[5], color[colorJugador + 1]);
        } else if (contador == 8 && letras[X] == "c" || contador == 8 && letras[X] == "f") {
            casillas(blancas[4], color[colorJugador + 1]);
        } else if (contador == 8 && letras[X] == "d") {
            casillas(blancas[2], color[colorJugador + 1]);
        } else if (contador == 8 && letras[X] == "e") {
            casillas(blancas[1], color[colorJugador + 1]);
        } else {
            casillas();
        }
    }
}
/*---------------------------------------------------------------------------------------------------------------------------------*/
//
/*---------------------------------------------------------------------------------------------------------------------------------*/
function Movimiento(seleccion, destino) {
    var ficha = document.getElementById(seleccion).value;
    separadorA = seleccion.split("-");
    separadorB = destino.split("-");
    var lnB = separadorB[0].split(".");
    claseSeleccion = document.getElementById(seleccion).className;
    claseDestino = document.getElementById(destino).className;
    //
    //
    if (Comible(lnB[0] - 1, lnB[1]) == true) {
        document.getElementById("c-" + separadorA[0]).innerHTML = "<button class=" + claseSeleccion + " id='" + separadorA[0] + "' onclick=" + "seleccionado('" + separadorA[0] + "');" + " value=''> </button>";
        document.getElementById("c-" + separadorB[0]).innerHTML = "<button class=" + claseDestino + " id='" + separadorB[0] + "-" + separadorA[1] + "' onclick=" + "seleccionado('" + separadorB[0] + "-" + separadorA[1] + "');" + " value='" + ficha + "'>" + ficha + "</button>";
    } else {
        document.getElementById("c-" + separadorA[0]).innerHTML = "<button class=" + claseSeleccion + " id='" + separadorA[0] + "' onclick=" + "seleccionado('" + separadorA[0] + "');" + " value=''> </button>";
        document.getElementById("c-" + destino).innerHTML = "<button class=" + claseDestino + " id='" + destino + "-" + separadorA[1] + "' onclick=" + "seleccionado('" + destino + "-" + separadorA[1] + "');" + " value='" + ficha + "'>" + ficha + "</button>";
    }
    /*
    despues se cambia por una funcion que asigne los turnos comunicandose con el servidor.

    if (colorJugador == 1) {
        colorJugador = 0;
    } else {
        colorJugador = 1;
    }
    */
}
/*---------------------------------------------------------------------------------------------------------------------------------*/
//
/*---------------------------------------------------------------------------------------------------------------------------------*/
const tableroIntel = (ficha, posicion) => {
    tableroIntel: {
        //--------------------------------------------------------------------------------------------------------------------------//
        coord = posicion.split(".");
        var letra = coord[1];
        var numero = coord[0];
        /*
        NO USAR "numero" PARA EL ELSE DEL PEÓN, hacer el for para encontrar la letra (igual que en el caballo).
        */
        //--------------------------------------------------------------------------------------------------------------------------//
        // marco en violeta los lugares donde puede mover.
        if (ficha == "♙" || ficha == "♟") {
            if (numero != 2 && Comible(numero, letra) == false) {
                //marco en violeta la casilla delante del peon
                numero++;
                document.getElementById(numero + "." + letra).style.backgroundColor = "#ad96ff";
            } else if (numero == 2 && Comible(numero, letra) == false) {
                //marco en violeta las DOS caillas delante del peon si es la primera movida
                for (let i = 0; i < 2; i++) {
                    numero++;
                    document.getElementById(numero + "." + letra).style.backgroundColor = "#ad96ff";
                }
            }
            for (let i = 1; i < 8; i++) {
                if (letras[i] == letra && Comible(numero, letras[i + 1]) == true || Comible(numero, letras[i - 1]) == true) {
                    numero++;
                    if (colorJugador == 1) {
                        document.getElementById(numero + "." + letras[i + 1] + "-" + color[colorJugador - 1]).style.backgroundColor = "#9e4741";
                        document.getElementById(numero + "." + letras[i - 1] + "-" + color[colorJugador + 1]).style.backgroundColor = "#9e4741";
                    }

                }
            }


            // marco en rojo las piezas que se pueden comer.   -----   style.backgroundColor = "#9e4741"
        } else if (ficha == "♖" || ficha == "♜") {
        } else if (ficha == "♘" || ficha == "♞") {
            numero++;
            for (let i = 1; i <= 8; i++) {
                if (letra == letras[i] && Comible(numero, letra) == false) {
                    numero++;
                    if (i < 7) {
                        if (!!document.getElementById(numero + "." + letras[i + 1] + "-Blancas") == false || !!document.getElementById(numero + "." + letras[i - 1] + "-Negras") == false) {
                            document.getElementById(numero + "." + letras[i + 1]).style.backgroundColor = "#ad96ff";
                            document.getElementById(numero + "." + letras[i - 1]).style.backgroundColor = "#ad96ff";
                        }
                        document.getElementById(numero - 1 + "." + letras[i + 2]).style.backgroundColor = "#ad96ff";
                        document.getElementById(numero - 1 + "." + letras[i - 2]).style.backgroundColor = "#ad96ff";

                        document.getElementById(numero - 4 + "." + letras[i + 1]).style.backgroundColor = "#ad96ff";
                        document.getElementById(numero - 4 + "." + letras[i - 1]).style.backgroundColor = "#ad96ff";
                    } else if (i > 7) {
                        document.getElementById(numero + "." + letras[i - 1]).style.backgroundColor = "#ad96ff";
                        document.getElementById(numero - 1 + "." + letras[i - 2]).style.backgroundColor = "#ad96ff";
                    } else if (i < 2) {
                        document.getElementById(numero + "." + letras[i - 1]).style.backgroundColor = "#ad96ff";
                        document.getElementById(numero - 1 + "." + letras[i - 2]).style.backgroundColor = "#ad96ff";
                    } else {
                        document.getElementById(numero + "." + letras[i + 1]).style.backgroundColor = "#ad96ff";
                        document.getElementById(numero + "." + letras[i - 1]).style.backgroundColor = "#ad96ff";
                    }
                }
            }
        } else if (ficha == "♗" || ficha == "♝") {
        } else if (ficha == "♚" || ficha == "♔") {
        } else if (ficha == "♛" || ficha == "♕") {
        }
    }
};
/*---------------------------------------------------------------------------------------------------------------------------------*/
//
/*---------------------------------------------------------------------------------------------------------------------------------*/
function Comible(numero, letra) {
    var Comible;
    numero++;
    if (!!document.getElementById(numero + "." + letra + "-Blancas") == true || !!document.getElementById(numero + "." + letra + "-Negras")) {
        Comible = true;
    } else {
        Comible = false;
    }
    return Comible;
}
/*---------------------------------------------------------------------------------------------------------------------------------*/
//
/*---------------------------------------------------------------------------------------------------------------------------------*/
function Output() {
    /* 
    Enviar todos los datos de movidas, fichas comidas, tiempo de movida,color de jugador, etc
    a un php y almacenarlos en el servidor.
    */
}
//+-68 lineas de comentarios.