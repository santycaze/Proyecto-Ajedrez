var contenido;

function Jugadores() {
    var tabla1 = "<table id='tablaJugadores'><h2>Jugadores</h2> <tr>   <th id='col1'>Nombre</th> <th id='col1'>Institucion</th> <th id='col1'>Tipo</th> <th id='col1'>Eliminar</th> <th id='col1'>Modificar</th> </tr></table>";
    $("#tabla1").html(tabla1);
    var tabla2 = "";
    $("#tabla2").html(tabla2);
    TraeJugadores()
}

function TraeJugadores() {
    $.ajax({
        type: "POST",
        url: "../Admin/Jugadores/PHP/Jugadores.php",
        success: function (response) {
            var Datos = JSON.parse(response);
            for (let i = 0; i < Datos.length; i++) {
                console.log(Datos[i])
                contenido = "<tr><td><div class='td1'>" + Datos[i].nombreUsuario + "</td></div><td><div class='td1'>IEP</div></td><td><div class='td1'>Jugador</div></td><td><div class='td1'><button onclick='EliminarJugadores("+Datos[i].idJugador+")'>✖</button></div></td><td><div class='td1'><button>⚙️</button></div></td></tr>";
                $("#tablaJugadores").append(contenido);
            }
        }
    });

}
function EliminarJugadores(id) {
    $.ajax({
        type: "POST",
        url: "../Admin/Jugadores/PHP/eliminarJugadores.php",
        data: {idJ:id},
        success: function () {
            Jugadores();
        }
    });

}