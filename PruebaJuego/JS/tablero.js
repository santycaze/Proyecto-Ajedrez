$(document).ready(function () {
    crearTablero();
});

function seleccionado(casillaSeleccionada) {
    //Actualiza las casillas para eliminar cualquier seleccion hecha anteriormente.
    //
    actualizarTablero();
    //
    //Marca la casilla seleccionada.
    //
    var casilla = document.getElementById(casillaSeleccionada).value;
    if (casilla != "") {
        console.log(casilla);
        document.getElementById(casillaSeleccionada).style.backgroundColor = "#7a99c2";
    } else {
        console.log("vacio");
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
        }
    }
}
/*---------------------------------------------------------------------------------------------------------------------------------*/
//
/*---------------------------------------------------------------------------------------------------------------------------------*/
function crearTablero() {
    var contador = 8;
    var letras = new Array();
    var letras = { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "g", 8: "h" };
    var tablero = "<table>";
    for (let Y = 1; Y <= 8; Y++) {
        //crear tr
        //
        tablero += "<tr id=" + "t" + Y + ">"
        //
        for (let X = 1; X <= 8; X++) {
            //crear td
            //
            tablero += "<td><button class=" + "casilla" + X + " id='" + contador + letras[X] + "' onclick=" + "seleccionado(" + "'" + contador + letras[X] + "'" + ");" + " value='T'></button></td>"
            //
            //Asignar colores de casillas
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
            if (X == 8) {
                contador--;
            }
            //
        }
        tablero += "</tr>"
    }
    tablero += "</table>"
    $('#tabla').html(tablero);
    actualizarTablero();
}