var colorMovimiento = '#6EB85B'             //Formato Hexadecimal                           Color MIRO => #6EB85B
var colorMovimientoRGB = '110, 184, 91'    //Formato -> R, G, B (Respetar espacios)         Color MIRO => 110, 184, 91
//
/*==================================================================================================================================*/
//
var casillasClaras = '#EDE1AE'      //Formato Hexadecimal                            Color MIRO => #EDE1AE
var casillasOscuras = '#9E692F'
var colorSeleccionado = ""
//
/*==================================================================================================================================*/
//
var colorComida = ''
var colorComidaRGB = ''
//
/*==================================================================================================================================*/
//
/*
function cambiarColor() {
    var casillasClaras = document.getElementById('colorClaras').value      //Formato Hexadecimal                            Color MIRO => #EDE1AE
    var casillasOscuras = document.getElementById('colorOscuras').value    
    if (casillasClaras != casillasOscuras) {
        sessionStorage.setItem('casillasClaras', casillasClaras)
        sessionStorage.setItem('casillasOscuras', casillasOscuras)
    }else{
        alert("Los colores no pueden ser iguaes")
    }     //Formato Hexadecimal                             Color MIRO => #9E692F
    actualizarTablero()
}
*/
sessionStorage.setItem('casillasClaras', casillasClaras)
sessionStorage.setItem('casillasOscuras', casillasOscuras)
sessionStorage.setItem('colorMovimiento', colorMovimiento)
sessionStorage.setItem('colorMovimientoRGB', colorMovimientoRGB)
