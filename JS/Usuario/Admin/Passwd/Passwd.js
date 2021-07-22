var contenido;

function Contraseñas() {
    var tabla1 = "<table id='tablaContraseñas'><h2>Contraseñas</h2> <tr>   <th id='col1'>Nombre de Usuario</th> <th id='col1'>Contraseña</th> <th id='col1'>Modificar</th> </tr></table>";
    $("#tabla1").html(tabla1);
    var tabla2 = ""
    $("#tabla2").html(tabla2);
    TraeContraseñas();
}

function TraeContraseñas() {
    $.ajax({
        type: "POST",
        url: "../Admin/Passwd/PHP/TraeContraseñas.php",
        success: function (response) {
            var Datos = JSON.parse(response);
            for (let i = 0; i < Datos.length; i++) {
                contenido = "<tr><td><div class='td1'>" + Datos[i].nombreUsuario + "</td></div><td><div class='td1'>" + Datos[i].contraseña + "</div></td><td><div class='td1'><button>⚙️</button></div></td></tr>";
                $("#tablaContraseñas").append(contenido);
            }
        }
    });
}