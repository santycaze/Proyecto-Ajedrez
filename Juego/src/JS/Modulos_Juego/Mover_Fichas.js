
import { peon,torre,alfil,caballo,reina,rey } from "./Fichas.js";
import { color,colorJugador,colorOpuesto,puntos } from "./Datos_De_Juego.js";
import { actualizarTablero } from "./Crear_Tablero.js";
import { enviarDatos } from "./confInicioJuego.js";


let casilla,
    seleccion,
    destino,
    separadorA,
    separadorB,
    claseSeleccion,
    claseDestino,
    coord;

export function seleccionado(casillaSeleccionada) {
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
    } 

}

function tableroIntel(ficha, posicion){
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

function Movimiento(seleccion, destino) {

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

function Output(destino) {
    let datos = {
        jugador: sessionStorage.getItem('j1'),
        colorJugador: colorJugador,
        timepoMovida: '00:30',
        pieza: sessionStorage.getItem('pieza'),
        puntaje: puntos,
        movimiento: [seleccion, destino]
    };
    datos = JSON.stringify(datos);
    enviarDatos(datos)
}