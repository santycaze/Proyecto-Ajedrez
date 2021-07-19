var contenido;

function Periodistas() {
    var tabla1 = "<table id='tablaNoAprobados'> <h2>Pendientes de aprobar</h2><tr> <th id='col1'>Nombre</th> <th id='col1'>Institucion</th>  <th id='col1'>Tipo</th>  <th id='col1'>A/R</th></tr></table>";
    $("#tabla1").html(tabla1);
    var tabla2 = "<table id='tablaAprobados'> <h2>Aprobados</h2><tr> <th id='col1'>Nombre</th> <th id='col1'>Institucion</th>  <th id='col1'>Tipo</th>  <th id='col1'>Inhabilitar</th></tr></table>";
    $("#tabla2").html(tabla2);
    TraePeriodistas()
}

function TraePeriodistas() {
    $.ajax({
        type: "POST",
        url: "../Admin/Periodistas/PHP/TraePeriodistas.php",
        success: function (response) {
            var Datos = JSON.parse(response);
            for (let i = 0; i < Datos.length; i++) {
                var nombreUsuario, mail, idPeriodista, aprobado;
                aprobado = Datos[i].Aprobado;
                nombreUsuario = Datos[i].nombreUsuario;
                mail = Datos[i].mail;
                idPeriodista = Datos[i].idPeriodista;

                var info = '"' + idPeriodista + '-' + mail + '-' + nombreUsuario + '"';
                if (Datos[i].Aprobado == 1) {
                    contenido = "<tr><td><div class='td1'>" + Datos[i].nombreUsuario + "</td></div><td><div class='td1'>IEP</div></td><td><div class='td1'>Periodista</div></td><td><div class='td1'><button onclick='EliminarPeriodistas(" + Datos[i].idPeriodista + ")'>✖</button></div></td></tr>";
                    $("#tablaAprobados").append(contenido);
                } else {
                    contenido = "<tr><td><div class='td1'>" + Datos[i].nombreUsuario + "</td></div><td><div class='td1'>IEP</div></td><td><div class='td1'>Periodista</div></td><td><div class='td1'><button onclick='AprobarPeriodistas(" + info + ")'>✓</button><button onclick='EliminarPeriodistas(" + info + ")'>✖</button></div></td></tr>";
                    $("#tablaNoAprobados").append(contenido);
                }
            }
        }
    });
}

function AprobarPeriodistas(datos) {
    var id,usr,mail;
    var info = datos.split("-");
    id = info[0];
    mail = info[1];
    usr = info[2];
    //habilitar aprobar.php despues de las pruebas.
    $.ajax({
        type: "POST",
        url: "../Admin/Periodistas/PHP/aprobarPeriodistas.php",
        data: { idP: id },
        success: function () {
            Periodistas();
            mailer(mail, usr, 1);
        }
    });
}

function EliminarPeriodistas(datos) {
    //habilitar eliminarPeriodistas despues de las pruebas.
    var id,usr,mail;
    var info = datos.split("-");
    id = info[0];
    mail = info[1];
    usr = info[2];
    $.ajax({
        type: "POST",
        url: "../Admin/Periodistas/PHP/eliminarPeriodistas.php",
        data: { idP: id },
        success: function () {
            Periodistas();
            mailer(mail, usr, 0);
        }
    });
}

function mailer(mail, nombre, apr) {
    console.log(mail +" "+ nombre)
    if (apr == 1) {
        $.ajax({
            type: "POST",
            url: "solicitudes/PHP/mailAprobar.php",
            data: { mail: mail, nombre: nombre },
            success: function (response) {
                console.log(response)
            }
        });
    }else{
        $.ajax({
            type: "POST",
            url: "solicitudes/PHP/mailRechazar.php",
            data: { mail: mail, nombre: nombre },
            success: function (response) {
                console.log(response)
            }
        });
    }
}

