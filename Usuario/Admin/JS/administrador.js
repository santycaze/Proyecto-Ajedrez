var contenido;

function TraePeriodistas() {
    $.ajax({
        type: "POST",
        url: "../../PHP/TraePeriodistas.php",
        success: function(response) {
            var Datos = JSON.parse(response);
            for (let i = 0; i < Datos.length; i++) {
                console.log(Datos[i])
                if (Datos[i].Aprobado == 1) {
                    contenido = "<tr><td><div class='td1'>" + Datos[i].nombreUsuario + "</td></div><td><div class='td1'>IEP</div></td><td><div class='td1'>Periodista</div></td><td><div class='td1'><button onclick='EliminarPeriodistas("+Datos[i].idPeriodista+")'>✖</button></div></td></tr>";
                    $("#tablaAprobados").append(contenido);
                } else {
                    contenido = "<tr><td><div class='td1'>" + Datos[i].nombreUsuario + "</td></div><td><div class='td1'>IEP</div></td><td><div class='td1'>Periodista</div></td><td><div class='td1'><button onclick='Aprobar("+Datos[i].idPeriodista+","+Datos[i].mail+","+Datos[i].nombreUsuario+")'>✓</button><button onclick='EliminarPeriodistas("+Datos[i].idPeriodista+")'>✖</button></div></td></tr>";
                    $("#tablaNoAprobados").append(contenido);
                }
            }
        }
    });

}

function TraeUsuarios() {
    $.ajax({
        type: "POST",
        url: "../../PHP/TraeUsuarios.php",
        success: function(response) {
            var Datos = JSON.parse(response);
            for (let i = 0; i < Datos.length; i++) {
                contenido = "<tr><td><div class='td1'>" + Datos[i].nombreUsuario + "</td></div><td><div class='td1'>IEP</div></td><td><div class='td1'>Jugador</div></td><td><div class='td1'><button>✖</button></div></td><td><div class='td1'><button on>⚙️</button></div></td></tr>";
                $("#tablaJugadores").append(contenido);
            }
        }
    });

}

function TraeContraseñas() {
    $.ajax({
        type: "POST",
        url: "../../PHP/TraeContraseñas.php",
        success: function(response) {
            var Datos = JSON.parse(response);
            for (let i = 0; i < Datos.length; i++) {
                contenido = "<tr><td><div class='td1'>" + Datos[i].nombreUsuario + "</td></div><td><div class='td1'>" + Datos[i].contraseña + "</div></td><td><div class='td1'><button>⚙️</button></div></td></tr>";
                $("#tablaContraseñas").append(contenido);
            }
        }
    });
}

function Aprobar(idPeriodista,mail,nombre) {
    console.log(mail+" "+nombre)
    $.ajax({
        type: "POST",
        url: "../../PHP/aprobar.php",
        data: {idP: idPeriodista},
        success: function(response) {
            console.log(response);
            Periodistas();
            mailAprobar(mail,nombre);
        }
    });
}

function EliminarPeriodistas(idPeriodista) {
    $.ajax({
        type: "POST",
        url: "../../PHP/eliminarPeriodistas.php",
        data: {idP: idPeriodista},
        success: function(response) {
            console.log(response);
            Periodistas();
        }
    });
}

function Periodistas() {
    var tabla1 = "<table id='tablaNoAprobados'> <h2>Pendientes de aprobar</h2><tr> <th id='col1'>Nombre</th> <th id='col1'>Institucion</th>  <th id='col1'>Tipo</th>  <th id='col1'>A/R</th></tr></table>";
    $("#tabla1").html(tabla1);
    var tabla2 = "<table id='tablaAprobados'> <h2>Aprobados</h2><tr> <th id='col1'>Nombre</th> <th id='col1'>Institucion</th>  <th id='col1'>Tipo</th>  <th id='col1'>Inhabilitar</th></tr></table>";
    $("#tabla2").html(tabla2);
    TraePeriodistas()
}

function Usuarios() {
    var tabla1 = "<table id='tablaJugadores'><h2>Usuarios</h2> <tr>   <th id='col1'>Nombre</th> <th id='col1'>Institucion</th> <th id='col1'>Tipo</th> <th id='col1'>Eliminar</th> <th id='col1'>Modificar</th> </tr></table>";
    $("#tabla1").html(tabla1);
    var tabla2 = "";
    $("#tabla2").html(tabla2);
    TraeUsuarios()
}

function Contraseñas() {
    var tabla1 = "<table id='tablaContraseñas'><h2>Contraseñas</h2> <tr>   <th id='col1'>Nombre de Usuario</th> <th id='col1'>Contraseña</th> <th id='col1'>Modificar</th> </tr></table>";
    $("#tabla1").html(tabla1);
    var tabla2 = ""
    $("#tabla2").html(tabla2);
    TraeContraseñas();
}

function ModUsuario() {
    var tabla2 = "<tabla id='tablaModUsuarios'><h2>Contraseñas</h2>  <tr>   <th id='col1'>Nombre de Usuario</th> <th id='col1'>Contraseña</th> <th id='col1'>Modificar</th> </tr></table>";
    $("#tabla2").html(tabla2);
    TraeModUsuarios();
}

function mailAprobar(mail,nombre) {
    $.ajax({
        type: "POST",
        url: "/ADMINISTRADOR/solicitudes/php/mailAprobar.php",
        data: {mail: mail,nombre:nombre},
        success: function(response) {
            console.log(response)
        }
    });
}