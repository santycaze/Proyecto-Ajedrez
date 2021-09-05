/**
 * 
 */

import { color,colorJugador,colorOpuesto,colorPmovimiento,letras } from "./Datos_De_Juego.js";

export function peon(numero, letra) {

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
export function torre(numero, letra) {
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
export function alfil(numero, letra) {
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
export function caballo(numero, letra) {
    if (colorJugador == 1) {
        sessionStorage.setItem('pieza', '&#9816')
    } else {
        sessionStorage.setItem('pieza', '&#9822')
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
                    console.log(document.getElementById(arriba + "." + letras[i + 1] + "-" + color[colorOpuesto]))
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
export function reina(numero, letra) {
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
export function rey(numero, letra) {
    if (colorJugador == 1) {
        sessionStorage.setItem('pieza', '&#9817')
    } else {
        sessionStorage.setItem('pieza', '&#9818')
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