/*
Por arreglar:

    *  Fallo de diseño en la tabla por 1px
*/

$(document).ready(function () {
    var color = asignarColor();
    crearTablero(color);
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
        document.getElementById(casillaSeleccionada).style.backgroundColor = "#adadad";
        $("#"+casillaSeleccionada).css("border", "1px solid #adadad");
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
                    $("#t" + Y + " " + ".casilla" + X).css("border", "none");
                } else {
                    $("#t" + Y + " " + ".casilla" + X).css("background-color", "black");
                    $("#t" + Y + " " + ".casilla" + X).css("border", "1px solid black");
                }
            } else {
                if (X % 2 != 0) {
                    $("#t" + Y + " " + ".casilla" + X).css("background-color", "white");
                    //$("#t" + Y + " " + ".casilla" + X).css("border", "1px solid black");
                } else {
                    $("#t" + Y + " " + ".casilla" + X).css("background-color", "black");
                    $("#t" + Y + " " + ".casilla" + X).css("border", "1px solid black");
                }
            }
        }
    }
}
/*---------------------------------------------------------------------------------------------------------------------------------*/
//
/*---------------------------------------------------------------------------------------------------------------------------------*/
function asignarColor(){
    return (Math.floor(Math.random() * (1.9 - 0)+0)); //1: blancas 0: negras
}
/*---------------------------------------------------------------------------------------------------------------------------------*/
//
/*---------------------------------------------------------------------------------------------------------------------------------*/
function crearTablero(color) {
    if (color == 1) {
        color = "Blancas";
    } else {
        color = "Negras";
    }
    var contador = 9;
    var letras = new Array();
    var letras = { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "g", 8: "h" };
    var tablero = "<table>";
    if (contador == 9) {
        tablero += "<tr> <td> </td> <td id='sup'>A</td> <td id='sup'>B</td> <td id='sup'>C</td> <td id='sup'>D</td> <td id='sup'>E</td> <td id='sup'>F</td> <td id='sup'>G</td> <td id='sup'>H</td> </tr>";
        contador--;
    }
        for (let Y = 1; Y <= 8; Y++) {

            //crear tr
            //
            tablero += "<tr id=" + "t" + Y + ">"
            tablero += "<td id='izq'>"+contador+"</td>";
            //
            for (let X = 1; X <= 8; X++) {
                //crear td
                //
                if (contador == 8) {

                    tablero += "<td><button class=" + "casilla" + X + " id='" + contador + letras[X] + "' onclick=" + "seleccionado(" + "'" + contador + letras[X] + "'" + ");" + " value='T'></button></td>"
                } else {
                    tablero += "<td><button class=" + "casilla" + X + " id='" + contador + letras[X] + "' onclick=" + "seleccionado(" + "'" + contador + letras[X] + "'" + ");" + " value='T'></button></td>"
                }
                if (X == 8) {
                    tablero += "<td id='der'>"+contador+"</td>";
                    contador--;
                }
                //
            }
            tablero += "</tr>"
        
    }
    tablero += "<tr> <td> </td> <td id='inf'>A</td> <td id='inf'>B</td> <td id='inf'>C</td> <td id='inf'>D</td> <td id='inf'>E</td> <td id='inf'>F</td> <td id='inf'>G</td> <td id='inf'>H</td> </tr>";
    tablero += "</table>"
    $('#tabla').html(tablero);
    actualizarTablero();
}