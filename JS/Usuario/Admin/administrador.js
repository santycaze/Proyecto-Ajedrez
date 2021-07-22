var contenido;

function Aprobar(datos) {
    var id,usr,mail;
    var info = datos.split("-");
    id = info[0];
    mail = info[1];
    usr = info[2];
    //habilitar aprobar.php despues de las pruebas.
    $.ajax({
        type: "POST",
        url: "../../PHP/aprobar.php",
        data: { idP: id },
        success: function (response) {
            console.log(response);
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
        url: "../../PHP/eliminarPeriodistas.php",
        data: { idP: id },
        success: function (response) {
            console.log(response);
            Periodistas();
            mailer(mail, usr, 0);
        }
    });
}





function ModUsuario() {
    var tabla2 = "<tabla id='tablaModUsuarios'><h2>Contraseñas</h2>  <tr>   <th id='col1'>Nombre de Usuario</th> <th id='col1'>Contraseña</th> <th id='col1'>Modificar</th> </tr></table>";
    $("#tabla2").html(tabla2);
    TraeModUsuarios();
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