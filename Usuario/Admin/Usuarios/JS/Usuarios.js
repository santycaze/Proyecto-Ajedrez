var contenido;

function Usuarios() {
    var tabla1 = "<table id='tablaJugadores'><h2>Usuarios</h2> <tr>   <th id='col1'>Nombre</th> <th id='col1'>Institucion</th> <th id='col1'>Tipo</th> <th id='col1'>Eliminar</th> <th id='col1'>Modificar</th> </tr></table>";
    $("#tabla1").html(tabla1);
    var tabla2 = "";
    $("#tabla2").html(tabla2);
    TraeUsuarios()
}

function TraeUsuarios() {
    $.ajax({
        type: "POST",
        url: "../Admin/Usuarios/PHP/TraeUsuarios.php",
        success: function (response) {
            var Datos = JSON.parse(response);
            for (let i = 0; i < Datos.length; i++) {
                contenido = "<tr><td><div class='td1'>" + Datos[i].nombreUsuario + "</td></div><td><div class='td1'>IEP</div></td><td><div class='td1'>Jugador</div></td><td><div class='td1'><button>✖</button></div></td><td><div class='td1'><button on>⚙️</button></div></td></tr>";
                $("#tablaJugadores").append(contenido);
            }
        }
    });

}