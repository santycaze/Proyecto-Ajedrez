$(document).ready(function () {
    $('#edicion').hide();
    $('#verperfil').hide();
    $('#tabla').hide();
    $('#login').hide();
    jugadoresIndex();
});
/*======================================================================================================================================================*/
//                                                              Login y Register
/*======================================================================================================================================================*/
function llamarlogin() {
    $.ajax({
        type: "POST",
        url: "./Usuario/PHP/Sesion/llamarlogin.php",
        success: function (response) {
            sessionStorage.clear()
            $('#login').show();
            $('#login').html(response);
        }
    });
}

function login() {
    var usr = document.getElementById('usr').value;
    var pass = document.getElementById('pass').value;
    const usuario = new Usuario();
    usuario.logIn(usr, pass);
}

function onkey(event) { if (event.keyCode == 13) { login(); } }

function registrar() {

    let datos = new Array();

    let registro = {
        pass: document.getElementById('pass').value,
        nomc: document.getElementById('nomc').value,
        ap: document.getElementById('ap').value,
        email: document.getElementById('email').value,
        cel: document.getElementById('cel').value,
        ci: document.getElementById('CI').value,
        nuser: document.getElementById('nuser').value,
        nac: document.getElementById('nac').value,
        tipo: document.getElementById('Tipo').value,
        institucion: document.getElementById('inst').value,
        aCursivo: document.getElementById('ac').value,
        cLiceo: document.getElementById('cliceo').value,
        nomDirector: document.getElementById('ndire').value,
        mailDirector: document.getElementById('edire').value
    }

    datos.push(registro.pass, registro.nomc, registro.ap, registro.email, registro.cel, registro.ci, registro.nuser, registro.nac, registro.tipo, registro.institucion, registro.aCursivo, registro.cLiceo, registro.nomDirector, registro.mailDirector)
    //condiciones que deben cumplir os datos ingresados por el usuario
    let param0 = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(\w){8,15}$/ //Parametros para validar 'pass'
    let param1 = /[\s\d\W]/ //Parametros para validar 'nom','ap'
    let param2 = /^\w*(@gmail.com){1}$/ //parametros para validar 'mail'
    let param3 = /^([0-9]){8}$/ // validar ci.

    validacion: {
        valido = true;

        for (let i = 0; i < datos.length; i++) {
            if (datos[i] == '') {
                $('[error=campos-vacios]').css('display', 'block')
                break validacion;
            } else {
                $('[error=campos-vacios]').css('display', 'none')
            }
        }

        //
        if (param0.test(registro.pass) == false) {
            //La contrasena debe tener de 8 a 15 catacteres ademas de una mayuscula una minuscula y un numero.
            $('[error=contra]').css('display', 'block')
            valido = false
        } else {
            $('[error=contra]').css('display', 'none')
        }
        //
        if (param1.test(registro.nomc) == true) {
            $('[error=nombre]').css('display', 'block')
            valido = false
        } else {
            $('[error=nombre]').css('display', 'none')
        }
        //
        if (param1.test(registro.ap) == true) {
            $('[error=apellido]').css('display', 'block')
            valido = false
        } else {
            $('[error=apellido]').css('display', 'none')
        }
        //
        if (param2.test(registro.email) == false) {
            $('[error=mail]').css('display', 'block')
            valido = false
        } else {
            $('[error=mail]').css('display', 'none')
        }
        //
        if (param3.test(registro.ci) == false) {
            $('[error=ci]').css('display', 'block')
            valido = false
        } else {
            $('[error=ci]').css('display', 'none')
        }
        //

        if (valido === true) {
            switch (registro.tipo) {
                case '1':
                    const jugador = new Jugador(registro.nuser, registro.nomc, registro.ap, registro.email, registro.ci, registro.cel, registro.nac, registro.tipo, "./IMG/Icono1.png", registro.institucion, registro.aCursivo, registro.cLiceo, registro.nomDirector, registro.mailDirector);
                    jugador.registrarJugador(registro.pass)
                    break;
                case '2':
                    break;
            }
        }
    }
}

function guardarMod() {
    var nombreActual = sessionStorage.getItem("j1");
    console.log(nombreActual)
    sessionStorage.setItem("foto", sessionStorage.getItem('vp'))
    //
    const usuario = new Usuario();
    //
    if (!!document.getElementById("inputNombre") == true) {
        //
        var nuevoNombre = document.getElementById("inputNombre").value;
        usuario.guardarModificacion(nombreActual, nuevoNombre, sessionStorage.getItem("foto"));
        //
        $("#botonLogIn").html('<i id="foto"></i> <p id="nick"></p>')
        $("#botonLogIn").prop('disabled', 'true')
        $("#nick").html(sessionStorage.getItem("j1"))
        $("#foto").html("<img id='foto2' src='" + sessionStorage.getItem("foto") + "'></img>")
        //
    } else {
        usuario.guardarModificacion(nombreActual, null, sessionStorage.getItem("foto"));
    }
    $('#edicion').hide();
    $('body').css('overflow', 'auto');
}

function esconderMenu() {

}
/*======================================================================================================================================================*/
//                                                             Cambiar Contraseña                                                                       //
/*======================================================================================================================================================*/
function restablecerContra() {
    var usuario = document.getElementById('usr').value;
    var passwd = document.getElementById('nPass').value;
    var cpasswd = document.getElementById('rNPass').value;

    if (passwd == cpasswd) {
        $.ajax({
            type: "POST",
            url: "../Usuario/PHP/OpcionesDeUsuario/restablecerPasswd.php",
            data: { usuario: usuario, passwd: passwd },
            success: function (response) {
                console.log(response)
            }
        });
    } else {
        $('.err').css('display', 'block')
    }
}
/*======================================================================================================================================================*/
//                                                     Opciones 'menu-usuario' -> Modificar Perfil                                                      //
/*======================================================================================================================================================*/
function opcAdmin() {
    window.location = "./Usuario/Admin/administrador.html"
}

function cerrarmod() {
    $('#edicion').hide();
    $('body').css('overflow', 'auto');
}

function cambiarNombre(nom) {
    $(".nick-usuario").html('<input id="inputNombre" style="width:100%; height:30px; font-size:40px" type="text" name="" value="' + nom + '"/>')
}

function Modificar() {
    $.ajax({
        type: "POST",
        url: "./Usuario/PHP/OpcionesDeUsuario/OpcionesUsuarios.php",
        data: { usr: sessionStorage.getItem("j1"), img: sessionStorage.getItem("foto") },
        success: function (response) {
            $('#edicion').show();
            $('#edicion').html(response);
            $('body').css('overflow', 'hidden');
        }
    });
}

function cambiarIcono(logo) {
    sessionStorage.setItem('vp', logo)
    $("#vistaPrevia").attr('src', sessionStorage.getItem('vp'))
}
/*======================================================================================================================================================*/
//                                                         Opciones 'menu-usuario' -> Ver Perfil                                                        //
/*======================================================================================================================================================*/
function ver() {
    $.ajax({
        type: "POST",
        url: "Usuario/PHP/VerPerfil.php",
        data: { usr: sessionStorage.getItem("j1"), img: sessionStorage.getItem("foto") },
        success: function (response) {
            $('#verperfil').show();
            $('#verperfil').html(response);
            $('body').css('overflow', 'hidden');
        }
    });
}

function cerrarperfil() {
    $('#verperfil').hide();
    $('body').css('overflow', 'auto');
}
/*======================================================================================================================================================*/
//                                                                    Boton Jugar                                                                       //
/*======================================================================================================================================================*/
function llamarajedrez() {
    window.location.href = './Juego/juego.php'
}

function cerrar() {
    $('#tabla').hide();
    $('body').css('overflow', 'auto');
}
/*======================================================================================================================================================*/
//                                                                   Cerrar Sesion                                                                      //
/*======================================================================================================================================================*/
function cerrarLogin() {
    $('#login').hide();
    $('body').css('overflow', 'auto');
}

function verificarSesion() {
    $.ajax({
        type: "POST",
        url: "Usuario/PHP/Sesion/logeado.php",
        success: function (response) {
            console.log(response)
        }
    });
}
/*======================================================================================================================================================*/
//                                                                     Torneos                                                                          //
/*======================================================================================================================================================*/
function close_perfil() {
    $('#cont-gral').hide()
}
/*======================================================================================================================================================*/
//                                                                  Jugadores Index                                                                     //
/*======================================================================================================================================================*/
function jugadoresIndex() {
    var jugadores = new Array()
    $.ajax({
        type: "POST",
        url: "Usuario/Admin/Jugadores/PHP/TraerJugadores.php",
        success: function (response) {
            if (response != '[]') {
                var Datos = JSON.parse(response);
                console.log(Datos);
                for (let i = 0; i < Datos.length; i++) {
                   $('.tabla-jugadores').append(`<tr><td><img src='${Datos[i].iconoUsuario}' class='circulo'/></td><td>${Datos[i].nombreUsuario}</td></tr>`)
                }
            }
        }
    });
}

function unirseTorneo() {
    $.ajax({
        type: "POST",
        url: "Unirsetorneo/unirsetorneo.php",
        success: function (response) {
            console.log(response)
        }
    });
}