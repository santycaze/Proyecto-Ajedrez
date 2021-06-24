var tablero,contador,colorJugador;
let Y,X;
var color = new Array({ 1: "Blancas", 0: "Negras" });
var blancas = new Array({1: "&#9812;", 2: "&#9813;", 3: "&#9814;", 4: "&#9815;", 5: "&#9816;", 6: "&#9817;"});   // 1: Rey, 2: Reina, 3: Torre, 4: Alfil, 5: Caballo, 6: Peon
var negras = new Array({ 1: "&#9818;", 2: "&#9819;", 3: "&#9820;", 4: "&#9821;", 5: "&#9822;", 6: "&#9823;" }); // 1: Rey, 2: Reina, 3: Torre, 4: Alfil, 5: Caballo, 6: Peon
var letras = new Array({ 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "g", 8: "h" });
/*---------------------------------------------------------------------------------------------------------------------------------*/
$(document).ready(function () {
    colorJugador = asignarColor();
    crearTablero();
});
/*---------------------------------------------------------------------------------------------------------------------------------*/
//
/*---------------------------------------------------------------------------------------------------------------------------------*/
function seleccionado(casillaSeleccionada) {
    /*
        Hacer split de casillaSeleccionada para verificar si hay piezas o las casillas estan vacias para hacer un movimiento.
    */
    //Actualiza las casillas para eliminar cualquier seleccion hecha anteriormente.
    //
    actualizarTablero();
    //
    //Marca la casilla seleccionada.
    //
    var casilla = document.getElementById(casillaSeleccionada).value;
    infoFicha = casillaSeleccionada.split("-");
    if (infoFicha[1] == color[colorJugador]) {
        if (casilla != " ") {
            console.log(casillaSeleccionada)
            document.getElementById(casillaSeleccionada).style.backgroundColor = "#adadad";
            tableroIntel(casilla, infoFicha[0]);
        }
    } else if (infoFicha[1] != color[colorJugador] && casilla == '') {
        console.log("vacio");
    } else {
        if (casilla != " ") {
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
            tablero += "<td><button class=" + "casilla" + X + " id='" + contador + "." + letras[X] + "' onclick=" + "seleccionado(" + "'" + contador + "." + letras[X] + "'" + ");" + " value=''></button></td>"
        } else {
            tablero += "<td><button class=" + "casilla" + X + " id='" + contador + "." + letras[X] + "' onclick=" + "seleccionado(" + "'" + contador + "." + letras[X] + "'" + ");" + " value=''></button></td>"
        }
    } else {
        if (contador == 8) {
            tablero += "<td><button class=" + "casilla" + X + " id='" + contador + "." + letras[X] + "-" + color + "' onclick=" + "seleccionado('" + contador + "." + letras[X] + "-" + color + "');" + " value='" + value + "' name='" + color + "'>" + value + "</button></td>"
        } else {
            tablero += "<td><button class=" + "casilla" + X + " id='" + contador + "." + letras[X] + "-" + color + "' onclick=" + "seleccionado('" + contador + "." + letras[X] + "-" + color + "');" + " value='" + value + "' name='" + color + "'>" + value + "</button></td>"
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
        } else if (contador == 5 && letras[X] == "a" || contador == 1 && letras[X] == "h") {
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
        } else if (contador == 8 && letras[X] == "b" || contador == 8 && letras[X] == "g") {
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
        } else if (contador == 5 && letras[X] == "a" || contador == 1 && letras[X] == "h") {
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
const tableroIntel = (ficha, posicion) => {
    tableroIntel: {
        //--------------------------------------------------------------------------------------------------------------------------//
        coord = posicion.split(".");
        console.log(posicion);
        var letra = coord[1];
        var numero = coord[0];
        //--------------------------------------------------------------------------------------------------------------------------//
        if (ficha == "♙" || ficha == "♟") {
            console.log("intel activa   Posicion : " + posicion);
            for (let i = 0; i < 2; i++) {
                numero++;
                if(numero == 1){

                }else{
                    document.getElementById(numero + "." + coord[1]).style.backgroundColor = "#ad96ff";
                }
            }
        } else if (ficha == "♖" || ficha == "♜") {
            //no funcion todavia
            console.log("intel activa   Posicion : " + posicion);
                for (let i = 1; i < 8; i++) {
                    numero++;
                    document.getElementById(numero + "." + coord[1]).style.backgroundColor = "#ad96ff";
                }
                for (let i = 8; i < 1; --i) {
                    numero--;
                    document.getElementById(numero + "." + coord[1]).style.backgroundColor = "#ad96ff";
                }


        } else if (ficha == "♘" || ficha == "♞") {
            console.log("intel activa   Posicion : " + posicion);
            numero++;
            try {
                if (coord[1] == letras[2]) {
                    document.getElementById(numero + 1 + "." + letras[1]).style.backgroundColor = "#ad96ff";
                    document.getElementById(numero + 1 + "." + letras[3]).style.backgroundColor = "#ad96ff";
                } else if (coord[1] == letras[7]) {
                    document.getElementById(numero + 1 + "." + letras[6]).style.backgroundColor = "#ad96ff";
                    document.getElementById(numero + 1 + "." + letras[8]).style.backgroundColor = "#ad96ff";
                }
            } catch (error) {
                console.log("Hay una ficha adelante.");
                break tableroIntel;
            }
        } else if (ficha == "♗" || ficha == "♝") {
            console.log("intel activa   Posicion : " + posicion);

        } else if (ficha == "♚" || ficha == "♔") {
            console.log("intel activa   Posicion : " + posicion);
            console.log(coord);
        } else if (ficha == "♛" || ficha == "♕") {
            console.log("intel activa   Posicion : " + posicion);
            console.log(coord);
        }
    }
};