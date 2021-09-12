$(document).ready(function () {
    $('#edicion').hide();
    $('#verperfil').hide();
    $('#tabla').hide();
    $('#login').hide();
});
/*======================================================================================================================================================*/
//
/*======================================================================================================================================================*/
function llamarlogin() {
    $.ajax({
        type: "POST",
        url: "../Proyecto-Ajedrez/Usuario/PHP/llamarlogin.php",
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
    //parametros
    let param0 = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(\w){8,15}$/ //Parametros para validar 'pass'
    let param1 = /[\s\d\W]/ //Parametros para validar 'nom','ap'
    let param2 = /^\w*(@gmail.com){1}$/ //parametros para validar 'mail'
    let param3 = /^([0-9]){8}$/ // validar ci.

    validacion: {
        valido = true;
        /*
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
        */
        if (valido === true) {
            console.log('0')
            const usuario = new Usuario();
            switch (registro.tipo) {
                case '1':
                    console.log('1')
                    const jugador = new Jugador(registro.nuser, registro.nomc, registro.ap, registro.email, registro.ci, registro.cel, registro.nac, registro.pass, registro.tipo, "../Proyecto-Ajedrez/IMG/Icono1.png",registro.institucion, registro.aCursivo, registro.cLiceo, registro.nomDirector, registro.mailDirector);
                    jugador.registrarJugador()
                    break;
                case '2':
                    console.log('2')
                    break;
            }

            //usuario.register();
        }
    }
}

function guardarMod() {
    var nombreActual = sessionStorage.getItem("j1");
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

function actualizarNick() {
    if (verificarSesion() == 1) {
        $("#botonLogIn").html('<i id="foto"></i> <p id="nick"></p>')
        $("#botonLogIn").prop('disabled', 'true')
        $("#nick").html(sessionStorage.getItem("j1"))
        $("#foto").html("<img id='foto2' src='" + sessionStorage.getItem("foto") + "'></img>")
    } else {
        $('.usuario-menu').hide()
    }
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
            url: "../Usuario/PHP/restablecerPasswd.php",
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
    window.location = "/Proyecto-Ajedrez/Usuario/Admin/administrador.html"
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
        url: "Usuario/PHP/OpcionesUsuarios.php",
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
    if (verificarSesion() == 1) {
        window.location.href = 'Juego/juego.html'
        llamarTablero();
    } else {
        llamarlogin();
    }

}

function cerrar() {
    $('#tabla').hide();
    $('body').css('overflow', 'auto');
}
/*======================================================================================================================================================*/
//                                                                   Cerrar Sesion                                                                      //
/*======================================================================================================================================================*/
function cerrarSesion() {
    cerrarmod()
    $.ajax({
        type: "POST",
        url: "../Proyecto-Ajedrez/Usuario/PHP/cerrarSesion.php",
        success: function () {
            sessionStorage.clear();
            $("#botonLogIn").prop('disabled', false)
            $("#botonLogIn").html('<div id="iconoUsr"><i class="fas fa-user" id="foto"></i></div>  <p id="nick">Log in</p>')
            actualizarNick()
        }
    });
}

function cerrarLogin() {
    $('#login').hide();
    $('body').css('overflow', 'auto');
}

function verificarSesion() {
    if (sessionStorage.getItem('j1') != null) {
        return 1
    } else {
        return 0
    }
}
/*======================================================================================================================================================*/
//                                                                     Torneos                                                                          //
/*======================================================================================================================================================*/

function close_perfil() {
    $('#cont-gral').hide()

}