var colorMovimiento = '#6EB85B'             //Formato Hexadecimal                           Color MIRO => #6EB85B
var colorMovimientoRGB = '110, 184, 91'    //Formato -> R, G, B (Respetar espacios)         Color MIRO => 110, 184, 91
//
/*==================================================================================================================================*/
//

var colorSeleccionado = ""
//
/*==================================================================================================================================*/
//
var colorComida = ''
var colorComidaRGB = ''
//
/*==================================================================================================================================*/
//
function cambiarColor() {
    var casillasClaras = document.getElementById('colorClaras').value      //Formato Hexadecimal                            Color MIRO => #EDE1AE
    var casillasOscuras = document.getElementById('colorOscuras').value           //Formato Hexadecimal                             Color MIRO => #9E692F
    sessionStorage.setItem('casillasClaras', casillasClaras)
    sessionStorage.setItem('casillasOscuras', casillasOscuras)
    actualizarTablero()
}
sessionStorage.setItem('colorMovimiento', colorMovimiento)
sessionStorage.setItem('colorMovimientoRGB', colorMovimientoRGB)
