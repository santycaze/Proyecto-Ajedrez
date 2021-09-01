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
    var pass = document.getElementById('pass').value;
    var nomc = document.getElementById('nomc').value;
    var ap = document.getElementById('ap').value;
    var email = document.getElementById('email').value;
    var cel = document.getElementById('cel').value;
    var ci = document.getElementById('CI').value;
    var nuser = document.getElementById('nuser').value;
    var nac = document.getElementById('nac').value;
    var tipo = document.getElementById('Tipo').value;
    const usuario = new Usuario(nuser, nomc, ap, email, ci, cel, nac, pass,tipo,"../Proyecto-Ajedrez/IMG/Icono1.png");
    console.log(usuario.register());
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
    }else{
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
function datosTorneos() {
    var nomTorneo = document.getElementById('nomTorneo').value;
    var codigoIngreso;
    var putuacion;
    var fechaApInsc = document.getElementById('apInscripciones').value;
    var fechaFinInsc = document.getElementById('finInscripciones').value;
    var comienzoTorneo = document.getElementById('comTorneo').value;
    var finTorneo = document.getElementById('finTorneo').value;
    var maximoPartidas = document.getElementById('maxPart').value;
    var numPart = document.getElementById('numPartidas').value;
    var tiempoMax = document.getElementById('tiempoMax').value;
    var tiempoMov = document.getElementById('tiempoMov').value;
    var maxParticipantes = document.getElementById('maxParticipantes').value;
    var nomTrofeo = document.getElementById('nomTrofeo').value;

    const name = new Torneos();
}