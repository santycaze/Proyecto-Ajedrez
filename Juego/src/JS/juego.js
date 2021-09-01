var numeros, tablero, casilla, contador, destino, seleccion, colorJugador, color, blancas, negras, letras, separadorA, separadorB, claseSeleccion, claseDestino, X, Y, colorPmovimiento, colorPmovimientoRGB, casillasClaras, casillasOscuras, puntos = 0;
//Definicion de variables
//DEFINICION DE ESTILOS
colorPmovimiento = sessionStorage.getItem("colorMovimiento")
colorPmovimientoRGB = sessionStorage.getItem("colorMovimientoRGB")
casillasClaras = sessionStorage.getItem("casillasClaras")
casillasOscuras = sessionStorage.getItem("casillasOscuras")
//DEFINICION DE VARIABLES
color = new Array();
blancas = new Array(); // 1: Rey, 2: Reina, 3: Torre, 4: Alfil, 5: Caballo, 6: Peon
negras = new Array(); // 1: Rey, 2: Reina, 3: Torre, 4: Alfil, 5: Caballo, 6: Peon
letras = new Array();
numeros = new Array();
//Definicion de arrays
color = { 1: "Blancas", 0: "Negras" }
blancas = { 1: "<img src='../IMG/ReyBlanco.png' id='ficha'></img>", 2: "<img src='../IMG/ReinaBlanca.png' id='ficha'></img>", 3: "<img src='../IMG/TorreBlanca.png' id='ficha'></img>", 4: "<img src='../IMG/AlfilBlanco.png' id='ficha'></img>", 5: "<img src='../IMG/CaballoBlanco.png' id='ficha'></img>", 6: "<img src='../IMG/PeonBlanco.png' id='ficha'></img>" }
negras = { 1: "<img src='../IMG/ReyNegro.png' id='ficha'></img>", 2: "<img src='../IMG/ReinaNegra.png' id='ficha'></img>", 3: "<img src='../IMG/TorreNegra.png' id='ficha'></img>", 4: "<img src='../IMG/AlfilNegro.png' id='ficha'></img>", 5: "<img src='../IMG/CaballoNegro.png' id='ficha'></img>", 6: "<img src='../IMG/PeonNegro.png' id='ficha'></img>" }
/*---------------------------------------------------------------------------------------------------------------------------------*/
$(document).ready(function () {
    asignarColor();
    if (colorJugador == 1) {
        letras = { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "g", 8: "h" }
        numeros = { 1: "8", 2: "7", 3: "6", 4: "5", 5: "4", 6: "3", 7: "2", 8: "1" }
    } else {
        letras = { 1: "h", 2: "g", 3: "f", 4: "e", 5: "d", 6: "c", 7: "b", 8: "a" }
        numeros = { 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8" }
    }
    crearTablero();
});
/*---------------------------------------------------------------------------------------------------------------------------------*/
//

function seleccionado(casillaSeleccionada) {
    //Marca la casilla seleccionada.
    casilla = document.getElementById(casillaSeleccionada).value;
    var infoFicha = casillaSeleccionada.split("-");
    if (infoFicha[1] == color[colorJugador]) { //si el color de la ficha es igual al del jugador se selecciona la pieza
        actualizarTablero(); //actualizo el tablero para eliminar lo seleccionado anteriormente
        //===============================================================================================================//
        /*
            Si la casilla no esta vacia dependiendo del color llama a la funcion tableroIntel() para marcar las podibles
            movidas
        */
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
        //===================================================================================================================//
    } else if (infoFicha[1] != color[colorJugador] || casilla == " ") { //si la casilla seleccionada esta vacia o tiene una ficha del otro color
        /* 
        verifico que casillas estan en color "#6EB85B", si la proxima accion del usuario es apretar un
        boton de ese color la ficha se movera a la casilla seleccionada, si selecciona otra casilla o mueve la ficha el tablero se 
        actualiza
        */
        var colorMovida = $('[position="' + infoFicha[0] + '"]').css("backgroundColor")
        var colorComida = $('[lacaveira="' + infoFicha[0] + '"]').css("color")
        if (colorMovida == "rgb(" + colorMovimientoRGB + ")" || colorComida == "rgb(158, 71, 65)") {
            destino = casillaSeleccionada;
        }
        if (destino != null && seleccion != null) {
            Movimiento(seleccion, destino);
            seleccion = null;
            destino = null;
        }
        //Actualiza las casillas para eliminar cualquier seleccion hecha anteriormente.         
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
/*---------------------------------------------------------------------------------------------------------------------------------*/
//
/*----- ----------------------------------------------------------------------------------------------------------------------------*/
function asignarColor() {
    colorJugador = sessionStorage.getItem('colorJugador'); //1: blancas 0: negras
}
/*---------------------------------------------------------------------------------------------------------------------------------*/
//
/*---------------------------------------------------------------------------------------------------------------------------------*/
function crearTablero() {
    contador = 9;
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
/*---------------------------------------------------------------------------------------------------------------------------------*/
//
/*---------------------------------------------------------------------------------------------------------------------------------*/
function casillas(value, color) {
    /*
    Creo las casillas del tablero y
    */
    if (value == undefined) { //si la casilla no tiene ficha
        if (contador == 8) {
            tablero += "<td><div class='divCas' id='c-" + contador + "." + letras[X] + "'><button class=" + "casilla" + X + " id='" + contador + "." + letras[X] + "' onclick=" + "seleccionado(" + "'" + contador + "." + letras[X] + "'" + ");" + " value=''><span></span><skull class='fas fa-skull' id='laskull' lacaveira='" + contador + "." + letras[X] + "'></skull></button></div></td>"
        } else {
            tablero += "<td><div class='divCas' id='c-" + contador + "." + letras[X] + "'><button class=" + "casilla" + X + " id='" + contador + "." + letras[X] + "' onclick=" + "seleccionado(" + "'" + contador + "." + letras[X] + "'" + ");" + " value=''><div class='pMovimiento' position='" + contador + "." + letras[X] + "'><skull class='fas fa-skull' id='laskull' lacaveira='" + contador + "." + letras[X] + "'></skull></div></button></div></td>"
        }
    } else { // si la casilla tiene ficha
        if (contador == 8) {
            tablero += '<td><div class="divCas" id="c-' + contador + '.' + letras[X] + '"><button class=' + 'casilla' + X + ' id="' + contador + '.' + letras[X] + '-' + color + '" onclick=' + 'seleccionado("' + contador + '.' + letras[X] + '-' + color + '");' + ' value="' + value + '"><div class="pMovimiento" position="' + contador + "." + letras[X] + '"><span></span><skull class="fas fa-skull" id="laskull" lacaveira="' + contador + "." + letras[X] + '"></skull></div>' + value + '</button></div></td>';
        } else {
            tablero += '<td><div class="divCas" id="c-' + contador + '.' + letras[X] + '"><button class=' + 'casilla' + X + ' id="' + contador + '.' + letras[X] + '-' + color + '" onclick=' + 'seleccionado("' + contador + '.' + letras[X] + '-' + color + '");' + ' value="' + value + '"><div class="pMovimiento" position="' + contador + "." + letras[X] + '"><span></span><skull class="fas fa-skull" id="laskull" lacaveira="' + contador + "." + letras[X] + '"></skull></div>' + value + '</button></div></td>';
        }
    }
    if (X == 8) {
        tablero += "<td id='der'> </td>";
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
    if (colorJugador == 1) {
        colorOpuesto = 0;
    } else {
        colorOpuesto = 1;
    }
    var ficha = document.getElementById(seleccion).value;
    var destinoMov = document.getElementById(destino).value;
    separadorA = seleccion.split("-");
    separadorB = destino.split("-");
    var lnB = separadorB[0].split(".");
    claseSeleccion = document.getElementById(seleccion).className;
    claseDestino = document.getElementById(destino).className;

    if (destino.length > 3) { // paso el numero y la letra del destino para ver si es una ficha comible
        //document.getElementById('efectoMovimiento').play()
        console.log(separadorB[0] + '-' + separadorA[1])
        document.getElementById('c-' + separadorA[0]).innerHTML = '<button class=' + claseSeleccion + ' id="' + separadorA[0] + '" onclick=' + 'seleccionado("' + separadorA[0] + '");' + ' value=' + " " + '><div class="pMovimiento" position="' + separadorA[0] + '"></button>';//calavera
        document.getElementById('c-' + separadorB[0]).innerHTML = '<button class=' + claseDestino + ' id="' + separadorB[0] + '-' + separadorA[1] + '" onclick=' + 'seleccionado("' + separadorB[0] + '-' + separadorA[1] + '");' + ' value="' + ficha + '">' + ficha + '<div class="pMovimiento" position="' + separadorB[0] + '"><span></span><skull class="fas fa-skull" id="laskull" lacaveira="' + separadorB[0] + '"></skull></div></button>'; //calavera
        puntaje(destinoMov);
        $('#tablaMovimientos').append('<tr><td>' + sessionStorage.getItem('pieza') + '</td><td>' + "x" + lnB[0] + lnB[1] + '</td></tr>')
    } else {
        //document.getElementById('efectoMovimiento').play()
        document.getElementById('c-' + separadorA[0]).innerHTML = '<button class=' + claseSeleccion + ' id="' + separadorA[0] + '" onclick=' + 'seleccionado("' + separadorA[0] + '");' + ' value=' + " " + '><div class="pMovimiento" position="' + separadorA[0] + '"><skull class="fas fa-skull" id="laskull" lacaveira="' + separadorA[0] + '"></skull></div></button>';
        document.getElementById('c-' + destino).innerHTML = '<button class=' + claseDestino + ' id="' + destino + '-' + separadorA[1] + '" onclick=' + 'seleccionado("' + destino + '-' + separadorA[1] + '");' + ' value="' + ficha + '"><div class="pMovimiento" position="' + destino + '"><span></span><skull class="fas fa-skull" id="laskull" lacaveira="' + destino + '"></skull></div>' + ficha + '</button>'; //va calavera
        $('#tablaMovimientos').append('<tr><td>' + sessionStorage.getItem('pieza') + '</td><td>' + lnB[0] + lnB[1] + '</td></tr>')
    }
    actualizarTablero()
    Output(destino)
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
        sessionStorage.removeItem("fichaArriba")
        sessionStorage.removeItem("fichaEArriba")
        sessionStorage.removeItem("fichaAbajo")
        sessionStorage.removeItem("fichaEAbajo")
        sessionStorage.removeItem("fichaIzquierda")
        sessionStorage.removeItem("fichaEIzquierda")
        sessionStorage.removeItem("fichaDerecha")
        sessionStorage.removeItem("fichaEDerecha")
        sessionStorage.removeItem("fichaDiagDerechaAbajo")
        sessionStorage.removeItem("fichaEDiagDerechaAbajo")
        sessionStorage.removeItem("fichaDiagDerechaArriba")
        sessionStorage.removeItem("fichaEDiagDerechaArriba")
        sessionStorage.removeItem("fichaDiagIzquierdaArriba")
        sessionStorage.removeItem("fichaEDiagIzquierdaArriba")
        sessionStorage.removeItem("fichaDiagIzquierdaAbajo")
        sessionStorage.removeItem("fichaEDiagIzquierdaAbajo")
        //--------------------------------------------------------------------------------------------------------------------------//
        /* 
            Marco los lugares para posibles movimientos o comidas de las piezas
        */
        switch (ficha) {
            case "<img src='../IMG/PeonBlanco.png' id='ficha'></img>": case "<img src='../IMG/PeonNegro.png' id='ficha'></img>":
                peon(numero, letra)
                break;
            case "<img src='../IMG/TorreBlanca.png' id='ficha'></img>": case "<img src='../IMG/TorreNegra.png' id='ficha'></img>":
                torre(numero, letra)
                break;
            case "<img src='../IMG/CaballoBlanco.png' id='ficha'></img>": case "<img src='../IMG/CaballoNegro.png' id='ficha'></img>":
                caballo(numero, letra)
                break;
            case "<img src='../IMG/AlfilBlanco.png' id='ficha'></img>": case "<img src='../IMG/AlfilNegro.png' id='ficha'></img>":
                alfil(numero, letra)
                break;
            case "<img src='../IMG/ReyBlanco.png' id='ficha'></img>": case "<img src='../IMG/ReyNegro.png' id='ficha'></img>":
                rey(numero, letra)
                break;
            case "<img src='../IMG/ReinaBlanca.png' id='ficha'></img>": case "<img src='../IMG/ReinaNegra.png' id='ficha'></img>":
                reina(numero, letra)
                break;
            default:
                break;
        }
    }
};
/*---------------------------------------------------------------------------------------------------------------------------------*/
//
/*---------------------------------------------------------------------------------------------------------------------------------*/
function Comible(numero, letra, colorComible) {
    var Comible;
    /*
    Dependiendo del color del jugador verifica si una pieza se puede comer (si es del otro color)
    */
    numero++
    if (!!document.getElementById(numero + "." + letra + "-" + color[colorComible])) {
        Comible = true;
    } else {
        Comible = false;
    }
    return Comible;
}
/*---------------------------------------------------------------------------------------------------------------------------------*/
//
/*---------------------------------------------------------------------------------------------------------------------------------*/
function jugadasEspeciales() {

}
/*=================================================================================================================================*/
//                                                           INPUT / OUTPUT     
/*=================================================================================================================================*/
function Output(destino) {
    let datos = {
        jugador: sessionStorage.getItem('j1'),
        cambioDeTurno: 'true',
        colorJugador: colorJugador,
        timepoMovida: '00:30',
        pieza: sessionStorage.getItem('pieza'),
        puntaje: puntos,
        movimiento: [seleccion, destino]
    };
    datos = JSON.stringify(datos);
    sessionStorage.setItem("datosJuego", datos)
    enviarDatos()
}
/*=================================================================================================================================*/
//                                                            PIEZAS     (agregar bug comer del peon)
/*=================================================================================================================================*/
function peon(numero, letra) {
    if (colorJugador == 1) {
        sessionStorage.setItem('pieza', '&#9817')
        colorOpuesto = 0;
    } else {
        sessionStorage.setItem('pieza', '&#9823')
        colorOpuesto = 1;
    }
    /*
    *
    */
    if (Comible(numero, letra, colorJugador) == false && sessionStorage.getItem("fichaAdlnt") != 1 && Comible(numero, letra, colorOpuesto) == false) {
        //marco en verde las DOS caillas delante del peon si es la primera movida
        if (numero == 2) {
            for (let i = 1; i <= 2; i++) {
                numero++;
                $('[position="' + numero + "." + letra + '"]').css("display", "flex")
                $('[position="' + numero + "." + letra + '"]').css("background-color", colorPmovimiento)
            }
            --numero
            --numero
        } else {
            numero++
            $('[position="' + numero + "." + letra + '"]').css("display", "flex")
            $('[position="' + numero + "." + letra + '"]').css("background-color", colorPmovimiento)
            --numero
        }
    }
    /*
     * 
     */
    // marco en rojo las piezas que se pueden comer.   -----   style.backgroundColor = "#9e4741"
    for (let i = 0; i <= 8; i++) {
        if (letras[i] == letra) {
            if (Comible(numero, letras[i - 1], colorOpuesto) == true && Comible(numero, letras[i + 1], colorOpuesto) == true && i < 8 && i > 1) {
                numero++
                $('[position="' + numero + "." + letras[i - 1] + '"]').css("display", "flex")
                $('[position="' + numero + "." + letras[i - 1] + '"]').css("background-color", "transparent")
                $('[lacaveira="' + numero + "." + letras[i - 1] + '"]').css("color", "#9e4741")
                $('[lacaveira="' + numero + "." + letras[i - 1] + '"]').css("display", "block")
                $('[position="' + numero + "." + letras[i + 1] + '"]').css("display", "flex")
                $('[position="' + numero + "." + letras[i + 1] + '"]').css("background-color", "transparent")
                $('[lacaveira="' + numero + "." + letras[i + 1] + '"]').css("color", "#9e4741")
                $('[lacaveira="' + numero + "." + letras[i + 1] + '"]').css("display", "block")
                --numero
            } else if (Comible(numero, letras[i - 1], colorOpuesto) == true) {
                numero++
                $('[position="' + numero + "." + letras[i - 1] + '"]').css("display", "flex")
                $('[position="' + numero + "." + letras[i - 1] + '"]').css("background-color", "transparent")
                $('[lacaveira="' + numero + "." + letras[i - 1] + '"]').css("color", "#9e4741")
                $('[lacaveira="' + numero + "." + letras[i - 1] + '"]').css("display", "block")
                --numero
            } else if (Comible(numero, letras[i + 1], colorOpuesto) == true) {
                numero++
                $('[position="' + numero + "." + letras[i + 1] + '"]').css("display", "flex")
                $('[position="' + numero + "." + letras[i + 1] + '"]').css("background-color", "transparent")
                $('[lacaveira="' + numero + "." + letras[i + 1] + '"]').css("color", "#9e4741")
                $('[lacaveira="' + numero + "." + letras[i + 1] + '"]').css("display", "block")
                --numero
            }
            //
            //verifico si es jaque
            //
            /*
            =================================
                      jaque de peon
            =================================
            if (document.getElementById(numero + "." + letras[i - 1] + "-" + color[colorJugador - 1]).value == "<img src='../IMG/ReyNegro.png' id='ficha'></img>" || document.getElementById(numero + "." + letras[i + 1] + "-" + color[colorJugador - 1]).value == "<img src='../IMG/ReyNegro.png' id='ficha'></img>") {
                console.log("jaque");
                actualizarTablero();
            }
            */
        }
    }
}
/*=================================================================================================================================*/
function torre(numero, letra) {
    if (colorJugador == 1) {
        sessionStorage.setItem('pieza', '&#9814')
        colorOpuesto = 0;
    } else {
        sessionStorage.setItem('pieza', '&#9820')
        colorOpuesto = 1;
    }
    var arriba = numero;
    var abajo = numero;
    for (let i = 1; i <= 9; i++) {
        if (letra == letras[i]) {
            var derecha = i;
            var izquierda = i;
            for (let x = 1; x < 8; x++) {
                arriba++
                --abajo
                derecha++
                --izquierda
                /*
                =============================================================================================================================================================

                =============================================================================================================================================================
                */
                if (!!document.getElementById(arriba + "." + letras[i] + "-" + color[colorJugador]) == false && sessionStorage.getItem("fichaArriba") != 1 && !!document.getElementById(arriba + "." + letras[i] + "-" + color[colorOpuesto]) == false) {
                    $('[position="' + arriba + "." + letras[i] + '"]').css("display", "flex")
                    $('[position="' + arriba + "." + letras[i] + '"]').css("background-color", colorPmovimiento)
                } else if (!!document.getElementById(arriba + "." + letras[i] + "-" + color[colorOpuesto]) == true && sessionStorage.getItem("fichaEArriba") != 1) {
                    $('[position="' + arriba + "." + letras[i] + '"]').css("display", "flex")
                    $('[position="' + arriba + "." + letras[i] + '"]').css("background-color", "transparent")
                    $('[lacaveira="' + arriba + "." + letras[i] + '"]').css("color", "#9e4741")
                    $('[lacaveira="' + arriba + "." + letras[i] + '"]').css("display", "block")
                    sessionStorage.setItem("fichaEArriba", 1)
                    sessionStorage.setItem("fichaArriba", 1)
                } else {
                    sessionStorage.setItem("fichaArriba", 1)
                    sessionStorage.setItem("fichaEArriba", 1)
                }
                if (!!document.getElementById(abajo + "." + letras[i] + "-" + color[colorJugador]) == false && sessionStorage.getItem("fichaAbajo") != 1 && !!document.getElementById(abajo + "." + letras[i] + "-" + color[colorOpuesto]) == false) {
                    $('[position="' + abajo + "." + letras[i] + '"]').css("display", "flex")
                    $('[position="' + abajo + "." + letras[i] + '"]').css("background-color", colorPmovimiento)
                } else if (!!document.getElementById(abajo + "." + letras[i] + "-" + color[colorOpuesto]) == true && sessionStorage.getItem("fichaEAbajo") != 1) {
                    $('[position="' + abajo + "." + letras[i] + '"]').css("display", "flex")
                    $('[position="' + abajo + "." + letras[i] + '"]').css("background-color", "transparent")
                    $('[lacaveira="' + abajo + "." + letras[i] + '"]').css("color", "#9e4741")
                    $('[lacaveira="' + abajo + "." + letras[i] + '"]').css("display", "block")
                    sessionStorage.setItem("fichaEAbajo", 1)
                    sessionStorage.setItem("fichaAbajo", 1)
                } else {
                    sessionStorage.setItem("fichaEAbajo", 1)
                    sessionStorage.setItem("fichaAbajo", 1)
                }
                if (!!document.getElementById(numero + "." + letras[derecha] + "-" + color[colorJugador]) == false && sessionStorage.getItem("fichaDerecha") != 1 && !!document.getElementById(numero + "." + letras[derecha] + "-" + color[colorOpuesto]) == false) {
                    $('[position="' + numero + "." + letras[derecha] + '"]').css("display", "flex")
                    $('[position="' + numero + "." + letras[derecha] + '"]').css("background-color", colorPmovimiento)
                } else if (!!document.getElementById(numero + "." + letras[derecha] + "-" + color[colorOpuesto]) == true && sessionStorage.getItem("fichaEDerecha") != 1) {
                    $('[position="' + numero + "." + letras[derecha] + '"]').css("display", "flex")
                    $('[position="' + numero + "." + letras[derecha] + '"]').css("background-color", "transparent")
                    $('[lacaveira="' + numero + "." + letras[derecha] + '"]').css("color", "#9e4741")
                    $('[lacaveira="' + numero + "." + letras[derecha] + '"]').css("display", "block")
                    sessionStorage.setItem("fichaEDerecha", 1)
                    sessionStorage.setItem("fichaDerecha", 1)
                } else {
                    sessionStorage.setItem("fichaEDerecha", 1)
                    sessionStorage.setItem("fichaDerecha", 1)
                }
                if (!!document.getElementById(numero + "." + letras[izquierda] + "-" + color[colorJugador]) == false && sessionStorage.getItem("fichaIzquierda") != 1 && !!document.getElementById(numero + "." + letras[izquierda] + "-" + color[colorOpuesto]) == false) {
                    $('[position="' + numero + "." + letras[izquierda] + '"]').css("display", "flex")
                    $('[position="' + numero + "." + letras[izquierda] + '"]').css("background-color", colorPmovimiento)
                } else if (!!document.getElementById(numero + "." + letras[izquierda] + "-" + color[colorOpuesto]) == true && sessionStorage.getItem("fichaEIzquierda") != 1) {
                    $('[position="' + numero + "." + letras[izquierda] + '"]').css("display", "flex")
                    $('[position="' + numero + "." + letras[izquierda] + '"]').css("background-color", "transparent")
                    $('[lacaveira="' + numero + "." + letras[izquierda] + '"]').css("color", "#9e4741")
                    $('[lacaveira="' + numero + "." + letras[izquierda] + '"]').css("display", "block")
                    sessionStorage.setItem("fichaEIzquierda", 1)
                    sessionStorage.setItem("fichaIzquierda", 1)
                } else {
                    sessionStorage.setItem("fichaEIzquierda", 1)
                    sessionStorage.setItem("fichaIzquierda", 1)
                }
                /*
                =============================================================================================================================================================

                =============================================================================================================================================================
                */
            }
        }
    }
}
/*=================================================================================================================================*/
function alfil(numero, letra) {
    if (colorJugador == 1) {
        sessionStorage.setItem('pieza', '&#9815')
        colorOpuesto = 0;
    } else {
        sessionStorage.setItem('pieza', '&#9821')
        colorOpuesto = 1;
    }
    var arriba = numero;
    var abajo = numero;
    for (let i = 1; i <= 8; i++) {
        if (letra == letras[i]) {
            var derecha = i;
            var izquierda = i;
            for (let x = 1; x <= 8; x++) {
                arriba++
                --abajo
                derecha++
                --izquierda
                if (!!document.getElementById(arriba + "." + letras[derecha] + "-" + color[colorJugador]) == false && sessionStorage.getItem("fichaDiagDerechaArriba") != 1 && !!document.getElementById(arriba + "." + letras[derecha] + "-" + color[colorOpuesto]) == false) {
                    $('[position="' + arriba + "." + letras[derecha] + '"]').css("display", "flex")
                    $('[position="' + arriba + "." + letras[derecha] + '"]').css("background-color", colorPmovimiento)
                } else if (!!document.getElementById(arriba + "." + letras[derecha] + "-" + color[colorOpuesto]) == true && sessionStorage.getItem("fichaEDiagDerechaArriba") != 1) {
                    $('[position="' + arriba + "." + letras[derecha] + '"]').css("display", "flex")
                    $('[position="' + arriba + "." + letras[derecha] + '"]').css("background-color", "transparent")
                    $('[lacaveira="' + arriba + "." + letras[derecha] + '"]').css("color", "#9e4741")
                    $('[lacaveira="' + arriba + "." + letras[derecha] + '"]').css("display", "block")
                    sessionStorage.setItem("fichaEDiagDerechaArriba", 1)
                    sessionStorage.setItem("fichaDiagDerechaArriba", 1)
                } else {
                    sessionStorage.setItem("fichaEDiagDerechaArriba", 1)
                    sessionStorage.setItem("fichaDiagDerechaArriba", 1)
                }
                if (!!document.getElementById(abajo + "." + letras[derecha] + "-" + color[colorJugador]) == false && sessionStorage.getItem("fichaDiagDerechaAbajo") != 1 && !!document.getElementById(abajo + "." + letras[derecha] + "-" + color[colorOpuesto]) == false) {
                    $('[position="' + abajo + "." + letras[derecha] + '"]').css("display", "flex")
                    $('[position="' + abajo + "." + letras[derecha] + '"]').css("background-color", colorPmovimiento)
                } else if (!!document.getElementById(abajo + "." + letras[derecha] + "-" + color[colorJugador]) == false && sessionStorage.getItem("fichaEDiagDerechaAbajo") != 1) {
                    $('[position="' + abajo + "." + letras[derecha] + '"]').css("display", "flex")
                    $('[position="' + abajo + "." + letras[derecha] + '"]').css("background-color", "transparent")
                    $('[lacaveira="' + abajo + "." + letras[derecha] + '"]').css("color", "#9e4741")
                    $('[lacaveira="' + abajo + "." + letras[derecha] + '"]').css("display", "block")
                    sessionStorage.setItem("fichaEDiagDerechaAbajo", 1)
                    sessionStorage.setItem("fichaDiagDerechaAbajo", 1)
                } else {
                    sessionStorage.setItem("fichaEDiagDerechaAbajo", 1)
                    sessionStorage.setItem("fichaDiagDerechaAbajo", 1)
                }

                if (!!document.getElementById(arriba + "." + letras[izquierda] + "-" + color[colorJugador]) == false && sessionStorage.getItem("fichaDiagIzquierdaArriba") != 1 && !!document.getElementById(arriba + "." + letras[izquierda] + "-" + color[colorOpuesto]) == false) {
                    $('[position="' + arriba + "." + letras[izquierda] + '"]').css("display", "flex")
                    $('[position="' + arriba + "." + letras[izquierda] + '"]').css("background-color", colorPmovimiento)
                } else if (!!document.getElementById(arriba + "." + letras[izquierda] + "-" + color[colorJugador]) == false && sessionStorage.getItem("fichaEDiagIzquierdaArriba") != 1) {
                    $('[position="' + arriba + "." + letras[izquierda] + '"]').css("display", "flex")
                    $('[position="' + arriba + "." + letras[izquierda] + '"]').css("background-color", "transparent")
                    $('[lacaveira="' + arriba + "." + letras[izquierda] + '"]').css("color", "#9e4741")
                    $('[lacaveira="' + arriba + "." + letras[izquierda] + '"]').css("display", "block")
                    sessionStorage.setItem("fichaEDiagIzquierdaArriba", 1)
                    sessionStorage.setItem("fichaDiagIzquierdaArriba", 1)
                } else {
                    sessionStorage.setItem("fichaEDiagIzquierdaArriba", 1)
                    sessionStorage.setItem("fichaDiagIzquierdaArriba", 1)
                }

                if (!!document.getElementById(abajo + "." + letras[izquierda] + "-" + color[colorJugador]) == false && sessionStorage.getItem("fichaDiagIzquierdaAbajo") != 1 && !!document.getElementById(abajo + "." + letras[izquierda] + "-" + color[colorOpuesto]) == false) {
                    $('[position="' + abajo + "." + letras[izquierda] + '"]').css("display", "flex")
                    $('[position="' + abajo + "." + letras[izquierda] + '"]').css("background-color", colorPmovimiento)
                } else if (!!document.getElementById(abajo + "." + letras[izquierda] + "-" + color[colorJugador]) == false && sessionStorage.getItem("fichaDiagIzquierdaAbajo") != 1) {
                    $('[position="' + abajo + "." + letras[izquierda] + '"]').css("display", "flex")
                    $('[position="' + abajo + "." + letras[izquierda] + '"]').css("background-color", "transparent")
                    $('[lacaveira="' + abajo + "." + letras[izquierda] + '"]').css("color", "#9e4741")
                    $('[lacaveira="' + abajo + "." + letras[izquierda] + '"]').css("display", "block")
                    sessionStorage.setItem("fichaEDiagIzquierdaAbajo", 1)
                    sessionStorage.setItem("fichaDiagIzquierdaAbajo", 1)
                } else {
                    sessionStorage.setItem("fichaEDiagIzquierdaAbajo", 1)
                    sessionStorage.setItem("fichaDiagIzquierdaAbajo", 1)
                }

            }
        }
    }
}
/*=================================================================================================================================*/
function caballo(numero, letra) {
    if (colorJugador == 1) {
        sessionStorage.setItem('pieza', '&#9816')
        colorOpuesto = 0;
    } else {
        sessionStorage.setItem('pieza', '&#9822')
        colorOpuesto = 1;
    }
    var arriba = numero;
    var arriba2 = numero;
    var abajo = numero - 2;
    var abajo2 = numero - 1;
    for (let i = 1; i <= 9; i++) {
        if (letra == letras[i]) {
            for (let x = 1; x <= 2; x++) {
                arriba++
                arriba2 = arriba - 1
                /*
                =============================================================================================================================================================

                =============================================================================================================================================================
                */
                if (x == 2) {
                    if (!!document.getElementById(arriba + "." + letras[i + 1] + "-" + color[colorJugador]) == false && sessionStorage.getItem("fichaDiagDerechaArriba") != 1 && !!document.getElementById(arriba + "." + letras[i + 1] + "-" + color[colorOpuesto]) == false) {
                        $('[position="' + arriba + "." + letras[i + 1] + '"]').css("display", "flex")
                        $('[position="' + arriba + "." + letras[i + 1] + '"]').css("background-color", colorPmovimiento)
                    } else if (!!document.getElementById(arriba + "." + letras[i + 1] + "-" + color[colorOpuesto]) == true) {
                        $('[position="' + arriba + "." + letras[i + 1] + '"]').css("display", "flex")
                        $('[position="' + arriba + "." + letras[i + 1] + '"]').css("background-color", "transparent")
                        $('[lacaveira="' + arriba + "." + letras[i + 1] + '"]').css("color", "#9e4741")
                        $('[lacaveira="' + arriba + "." + letras[i + 1] + '"]').css("display", "block")
                    }
                    if (!!document.getElementById(arriba + "." + letras[i - 1] + "-" + color[colorJugador]) == false && sessionStorage.getItem("fichaDiagDerechaArriba") != 1 && !!document.getElementById(arriba + "." + letras[i - 1] + "-" + color[colorOpuesto]) == false) {
                        $('[position="' + arriba + "." + letras[i - 1] + '"]').css("display", "flex")
                        $('[position="' + arriba + "." + letras[i - 1] + '"]').css("background-color", colorPmovimiento)
                    } else if (!!document.getElementById(arriba + "." + letras[i - 1] + "-" + color[colorOpuesto]) == true) {
                        $('[position="' + arriba + "." + letras[i - 1] + '"]').css("display", "flex")
                        $('[position="' + arriba + "." + letras[i - 1] + '"]').css("background-color", "transparent")
                        $('[lacaveira="' + arriba + "." + letras[i - 1] + '"]').css("color", "#9e4741")
                        $('[lacaveira="' + arriba + "." + letras[i - 1] + '"]').css("display", "block")
                    }
                    if (!!document.getElementById(arriba2 + "." + letras[i + 2] + "-" + color[colorJugador]) == false && sessionStorage.getItem("fichaDiagDerechaArriba") != 1 && !!document.getElementById(arriba2 + "." + letras[i + 2] + "-" + color[colorOpuesto]) == false) {
                        $('[position="' + arriba2 + "." + letras[i + 2] + '"]').css("display", "flex")
                        $('[position="' + arriba2 + "." + letras[i + 2] + '"]').css("background-color", colorPmovimiento)
                    } else if (!!document.getElementById(arriba2 + "." + letras[i + 2] + "-" + color[colorOpuesto]) == true) {
                        $('[position="' + arriba2 + "." + letras[i + 2] + '"]').css("display", "flex")
                        $('[position="' + arriba2 + "." + letras[i + 2] + '"]').css("background-color", "transparent")
                        $('[lacaveira="' + arriba2 + "." + letras[i + 2] + '"]').css("color", "#9e4741")
                        $('[lacaveira="' + arriba2 + "." + letras[i + 2] + '"]').css("display", "block")
                    }
                    if (!!document.getElementById(arriba2 + "." + letras[i - 2] + "-" + color[colorJugador]) == false && sessionStorage.getItem("fichaDiagDerechaArriba") != 1 && !!document.getElementById(arriba2 + "." + letras[i - 2] + "-" + color[colorOpuesto]) == false) {
                        $('[position="' + arriba2 + "." + letras[i - 2] + '"]').css("display", "flex")
                        $('[position="' + arriba2 + "." + letras[i - 2] + '"]').css("background-color", colorPmovimiento)
                    } else if (!!document.getElementById(arriba2 + "." + letras[i - 2] + "-" + color[colorOpuesto]) == true) {
                        $('[position="' + arriba2 + "." + letras[i - 2] + '"]').css("display", "flex")
                        $('[position="' + arriba2 + "." + letras[i - 2] + '"]').css("background-color", "transparent")
                        $('[lacaveira="' + arriba2 + "." + letras[i - 2] + '"]').css("color", "#9e4741")
                        $('[lacaveira="' + arriba2 + "." + letras[i - 2] + '"]').css("display", "block")
                    }
                }
                /*
                //
                */
                if (x == 2) {
                    if (!!document.getElementById(abajo + "." + letras[i + 1] + "-" + color[colorJugador]) == false && !!document.getElementById(abajo + "." + letras[i + 1] + "-" + color[colorOpuesto]) == false) {
                        $('[position="' + abajo + "." + letras[i + 1] + '"]').css("display", "flex")
                        $('[position="' + abajo + "." + letras[i + 1] + '"]').css("background-color", colorPmovimiento)
                    } else if (!!document.getElementById(abajo + "." + letras[i + 1] + "-" + color[colorOpuesto]) == true) {
                        $('[position="' + abajo + "." + letras[i + 1] + '"]').css("display", "flex")
                        $('[position="' + abajo + "." + letras[i + 1] + '"]').css("background-color", "transparent")
                        $('[lacaveira="' + abajo + "." + letras[i + 1] + '"]').css("color", "#9e4741")
                        $('[lacaveira="' + abajo + "." + letras[i + 1] + '"]').css("display", "block")
                    }
                    if (!!document.getElementById(abajo + "." + letras[i - 1] + "-" + color[colorJugador]) == false && sessionStorage.getItem("fichaDiagDerechaArriba") != 1 && !!document.getElementById(abajo + "." + letras[i - 1] + "-" + color[colorOpuesto]) == false) {
                        $('[position="' + abajo + "." + letras[i - 1] + '"]').css("display", "flex")
                        $('[position="' + abajo + "." + letras[i - 1] + '"]').css("background-color", colorPmovimiento)
                    } else if (!!document.getElementById(abajo + "." + letras[i - 1] + "-" + color[colorOpuesto]) == true) {
                        $('[position="' + abajo + "." + letras[i - 1] + '"]').css("display", "flex")
                        $('[position="' + abajo + "." + letras[i - 1] + '"]').css("background-color", "transparent")
                        $('[lacaveira="' + abajo + "." + letras[i - 1] + '"]').css("color", "#9e4741")
                        $('[lacaveira="' + abajo + "." + letras[i - 1] + '"]').css("display", "block")
                    }
                    if (!!document.getElementById(abajo2 + "." + letras[i + 2] + "-" + color[colorJugador]) == false && sessionStorage.getItem("fichaDiagDerechaArriba") != 1 && !!document.getElementById(abajo2 + "." + letras[i + 2] + "-" + color[colorOpuesto]) == false) {
                        $('[position="' + abajo2 + "." + letras[i + 2] + '"]').css("display", "flex")
                        $('[position="' + abajo2 + "." + letras[i + 2] + '"]').css("background-color", colorPmovimiento)
                    } else if (!!document.getElementById(abajo2 + "." + letras[i + 2] + "-" + color[colorOpuesto]) == true) {
                        $('[position="' + abajo2 + "." + letras[i + 2] + '"]').css("display", "flex")
                        $('[position="' + abajo2 + "." + letras[i + 2] + '"]').css("background-color", "transparent")
                        $('[lacaveira="' + abajo2 + "." + letras[i + 2] + '"]').css("color", "#9e4741")
                        $('[lacaveira="' + abajo2 + "." + letras[i + 2] + '"]').css("display", "block")
                    }
                    if (!!document.getElementById(abajo2 + "." + letras[i - 2] + "-" + color[colorJugador]) == false && sessionStorage.getItem("fichaDiagDerechaArriba") != 1 && !!document.getElementById(abajo2 + "." + letras[i - 2] + "-" + color[colorOpuesto]) == false) {
                        $('[position="' + abajo2 + "." + letras[i - 2] + '"]').css("display", "flex")
                        $('[position="' + abajo2 + "." + letras[i - 2] + '"]').css("background-color", colorPmovimiento)
                    } else if (!!document.getElementById(abajo2 + "." + letras[i - 2] + "-" + color[colorOpuesto]) == true) {
                        $('[position="' + abajo2 + "." + letras[i - 2] + '"]').css("display", "flex")
                        $('[position="' + abajo2 + "." + letras[i - 2] + '"]').css("background-color", "transparent")
                        $('[lacaveira="' + abajo2 + "." + letras[i - 2] + '"]').css("color", "#9e4741")
                        $('[lacaveira="' + abajo2 + "." + letras[i - 2] + '"]').css("display", "block")
                    }
                }
            }
            /*
            =============================================================================================================================================================

            =============================================================================================================================================================
            */
        }
    }
}
/*=================================================================================================================================*/
function reina(numero, letra) {
    for (let i = 1; i <= 8; i++) {
        if (letra == letras[i]) {
            torre(numero, letras[i])
            alfil(numero, letras[i])
        }
    }
    if (colorJugador == 1) {
        sessionStorage.setItem('pieza', '&#9813')
    } else {
        sessionStorage.setItem('pieza', '&#9819')
    }
}
/*=================================================================================================================================*/
function rey(numero, letra) {
    if (colorJugador == 1) {
        sessionStorage.setItem('pieza', '&#9817')
        colorOpuesto = 0;
    } else {
        sessionStorage.setItem('pieza', '&#9818')
        colorOpuesto = 1;
    }
    var arriba = numero;
    var abajo = numero;
    for (let i = 1; i <= 8; i++) {
        if (letra == letras[i]) {
            var derecha = i;
            var izquierda = i;
            arriba++
            --abajo
            derecha++
            --izquierda
            if (!!document.getElementById(arriba + "." + letras[derecha] + "-" + color[colorJugador]) == false && !!document.getElementById(arriba + "." + letras[derecha] + "-" + color[colorOpuesto]) == false) {
                $('[position="' + arriba + "." + letras[derecha] + '"]').css("display", "flex")
                $('[position="' + arriba + "." + letras[derecha] + '"]').css("background-color", colorPmovimiento)
            } else if (!!document.getElementById(arriba + "." + letras[derecha] + "-" + color[colorOpuesto]) == true) {
                $('[position="' + arriba + "." + letras[derecha] + '"]').css("display", "flex")
                $('[position="' + arriba + "." + letras[derecha] + '"]').css("background-color", "transparent")
                $('[lacaveira="' + arriba + "." + letras[derecha] + '"]').css("color", "#9e4741")
                $('[lacaveira="' + arriba + "." + letras[derecha] + '"]').css("display", "block")
            }
            if (!!document.getElementById(abajo + "." + letras[derecha] + "-" + color[colorJugador]) == false && !!document.getElementById(abajo + "." + letras[derecha] + "-" + color[colorOpuesto]) == false) {
                $('[position="' + abajo + "." + letras[derecha] + '"]').css("display", "flex")
                $('[position="' + abajo + "." + letras[derecha] + '"]').css("background-color", colorPmovimiento)
            } else if (!!document.getElementById(abajo + "." + letras[derecha] + "-" + color[colorOpuesto]) == true) {
                $('[position="' + abajo + "." + letras[derecha] + '"]').css("display", "flex")
                $('[position="' + abajo + "." + letras[derecha] + '"]').css("background-color", "transparent")
                $('[lacaveira="' + abajo + "." + letras[derecha] + '"]').css("color", "#9e4741")
                $('[lacaveira="' + abajo + "." + letras[derecha] + '"]').css("display", "block")
            }
            if (!!document.getElementById(arriba + "." + letras[izquierda] + "-" + color[colorJugador]) == false && !!document.getElementById(arriba + "." + letras[izquierda] + "-" + color[colorOpuesto]) == false) {
                $('[position="' + arriba + "." + letras[izquierda] + '"]').css("display", "flex")
                $('[position="' + arriba + "." + letras[izquierda] + '"]').css("background-color", colorPmovimiento)
            } else if (!!document.getElementById(arriba + "." + letras[izquierda] + "-" + color[colorOpuesto]) == true) {
                $('[position="' + arriba + "." + letras[izquierda] + '"]').css("display", "flex")
                $('[position="' + arriba + "." + letras[izquierda] + '"]').css("background-color", "transparent")
                $('[lacaveira="' + arriba + "." + letras[izquierda] + '"]').css("color", "#9e4741")
                $('[lacaveira="' + arriba + "." + letras[izquierda] + '"]').css("display", "block")
            }
            if (!!document.getElementById(abajo + "." + letras[izquierda] + "-" + color[colorJugador]) == false && !!document.getElementById(abajo + "." + letras[izquierda] + "-" + color[colorOpuesto]) == false) {
                $('[position="' + abajo + "." + letras[izquierda] + '"]').css("display", "flex")
                $('[position="' + abajo + "." + letras[izquierda] + '"]').css("background-color", colorPmovimiento)
            } else if (!!document.getElementById(abajo + "." + letras[izquierda] + "-" + color[colorOpuesto]) == true) {
                $('[position="' + abajo + "." + letras[izquierda] + '"]').css("display", "flex")
                $('[position="' + abajo + "." + letras[izquierda] + '"]').css("background-color", "transparent")
                $('[lacaveira="' + abajo + "." + letras[izquierda] + '"]').css("color", "#9e4741")
                $('[lacaveira="' + abajo + "." + letras[izquierda] + '"]').css("display", "block")
            }

            if (!!document.getElementById(arriba + "." + letras[i] + "-" + color[colorJugador]) == false && !!document.getElementById(arriba + "." + letras[i] + "-" + color[colorOpuesto]) == false) {
                $('[position="' + arriba + "." + letras[i] + '"]').css("display", "flex")
                $('[position="' + arriba + "." + letras[i] + '"]').css("background-color", colorPmovimiento)
            } else if (!!document.getElementById(arriba + "." + letras[i] + "-" + color[colorOpuesto]) == true) {
                $('[position="' + arriba + "." + letras[i] + '"]').css("display", "flex")
                $('[position="' + arriba + "." + letras[i] + '"]').css("background-color", "transparent")
                $('[lacaveira="' + arriba + "." + letras[i] + '"]').css("color", "#9e4741")
                $('[lacaveira="' + arriba + "." + letras[i] + '"]').css("display", "block")
            }
            if (!!document.getElementById(abajo + "." + letras[i] + "-" + color[colorJugador]) == false && !!document.getElementById(abajo + "." + letras[i] + "-" + color[colorOpuesto]) == false) {
                $('[position="' + abajo + "." + letras[i] + '"]').css("display", "flex")
                $('[position="' + abajo + "." + letras[i] + '"]').css("background-color", colorPmovimiento)
            } else if (!!document.getElementById(abajo + "." + letras[i] + "-" + color[colorOpuesto]) == true) {
                $('[position="' + abajo + "." + letras[i] + '"]').css("display", "flex")
                $('[position="' + abajo + "." + letras[i] + '"]').css("background-color", "transparent")
                $('[lacaveira="' + abajo + "." + letras[i] + '"]').css("color", "#9e4741")
                $('[lacaveira="' + abajo + "." + letras[i] + '"]').css("display", "block")
            }
            if (!!document.getElementById(numero + "." + letras[derecha] + "-" + color[colorJugador]) == false && !!document.getElementById(numero + "." + letras[derecha] + "-" + color[colorOpuesto]) == false) {
                $('[position="' + numero + "." + letras[derecha] + '"]').css("display", "flex")
                $('[position="' + numero + "." + letras[derecha] + '"]').css("background-color", colorPmovimiento)
            } else if (!!document.getElementById(numero + "." + letras[derecha] + "-" + color[colorOpuesto]) == true) {
                $('[position="' + numero + "." + letras[derecha] + '"]').css("display", "flex")
                $('[position="' + numero + "." + letras[derecha] + '"]').css("background-color", "transparent")
                $('[lacaveira="' + numero + "." + letras[derecha] + '"]').css("color", "#9e4741")
                $('[lacaveira="' + numero + "." + letras[derecha] + '"]').css("display", "block")
            } else {

            }
            if (!!document.getElementById(numero + "." + letras[izquierda] + "-" + color[colorJugador]) == false && !!document.getElementById(numero + "." + letras[izquierda] + "-" + color[colorOpuesto]) == false) {
                $('[position="' + numero + "." + letras[izquierda] + '"]').css("display", "flex")
                $('[position="' + numero + "." + letras[izquierda] + '"]').css("background-color", colorPmovimiento)
            } else if (!!document.getElementById(numero + "." + letras[izquierda] + "-" + color[colorOpuesto]) == true) {
                $('[position="' + numero + "." + letras[izquierda] + '"]').css("display", "flex")
                $('[position="' + numero + "." + letras[izquierda] + '"]').css("background-color", "transparent")
                $('[lacaveira="' + numero + "." + letras[izquierda] + '"]').css("color", "#9e4741")
                $('[lacaveira="' + numero + "." + letras[izquierda] + '"]').css("display", "block")
            }
        }
    }
}
/*=================================================================================================================================*/
//                                                             PUNTOS 
/*=================================================================================================================================*/
function puntaje(fichaComida) {
    console.log(fichaComida)
    switch (fichaComida) {
        case "<img src='../Proyecto-Ajedrez/IMG/PeonBlanco.png' id='ficha'></img>": case "<img src='../Proyecto-Ajedrez/IMG/PeonNegro.png' id='ficha'></img>":
            $('#fichasComidas').append(fichaComida)
            puntos += 1;
            break;
        case "<img src='../Proyecto-Ajedrez/IMG/TorreBlanca.png' id='ficha'></img>": case "<img src='../Proyecto-Ajedrez/IMG/TorreNegra.png' id='ficha'></img>":
            $('#fichasComidas').append(fichaComida)
            puntos += 5;
            break;
        case "<img src='../Proyecto-Ajedrez/IMG/CaballoBlanco.png' id='ficha'></img>": case "<img src='../Proyecto-Ajedrez/IMG/CaballoNegro.png' id='ficha'></img>":
            $('#fichasComidas').append(fichaComida)
            puntos += 3;
            break;
        case "<img src='../Proyecto-Ajedrez/IMG/AlfilBlanco.png' id='ficha'></img>": case "<img src='../Proyecto-Ajedrez/IMG/AlfilNegro.png' id='ficha'></img>":
            $('#fichasComidas').append(fichaComida)
            puntos += 3;
            break;
        case "<img src='../Proyecto-Ajedrez/IMG/ReyBlanco.png' id='ficha'></img>": case "<img src='../Proyecto-Ajedrez/IMG/ReyNegro.png' id='ficha'></img>":
            $('#fichasComidas').append(fichaComida)
            puntos += 10;
            break;
        case "<img src='../Proyecto-Ajedrez/IMG/ReinaBlanca.png' id='ficha'></img>": case "<img src='../Proyecto-Ajedrez/IMG/ReinaNegra.png' id='ficha'></img>":
            $('#fichasComidas').append(fichaComida)
            puntos += 9;
            break;
        default:
            break;
    }

}


//+-128  lineas de comentarios