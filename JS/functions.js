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
            $('#login').show();
            $('#login').html(response);
            sessionStorage.clear();
        }
    });
}

function login() {
    var usr = document.getElementById('usr').value;
    var pass = document.getElementById('pass').value;
    const usuario = new Usuario();
    usuario.logIn(usr, pass);
    sessionStorage.setItem("foto", "IMG/icono1.png")
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
    const usuario = new Usuario(nuser, nomc, ap, email, ci, cel, nac, pass, '0', tipo);
    usuario.register();
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
        usuario.guardarModificacion(nombreActual,nuevoNombre,sessionStorage.getItem("foto"));
        //
        $("#botonLogIn").html('<i id="foto"></i> <p id="nick"></p>')
        $("#botonLogIn").prop('disabled', 'true')
        $("#nick").html(sessionStorage.getItem("j1"))
        $("#foto").html("<img id='foto2' src='" + sessionStorage.getItem("foto") + "'></img>")
        //
    } else{
        usuario.guardarModificacion(nombreActual,null,sessionStorage.getItem("foto"));
    }
    $('#edicion').hide();
    $('body').css('overflow', 'auto');
}

function actualizarNick(usr) {
    
    if (usr != null) {
        $("#botonLogIn").html('<i id="foto"></i> <p id="nick"></p>')
        $("#botonLogIn").prop('disabled', 'true')
        $("#nick").html(sessionStorage.getItem("j1"))
        $("#foto").html("<img id='foto2' src='" + sessionStorage.getItem("foto") + "'></img>")
    } else {
        $(".usuario-menu").hide()
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
    $(".nick-usuario").html('<input id="inputNombre" style="width:100%; height:30px; font-size:30px" type="text" name="" value="' + nom + '"/>')
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
    sessionStorage.setItem('vp',logo)
    $("#vistaPrevia").attr('src', logo)
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
    $.ajax({
        type: "POST",
        url: "../Proyecto-Ajedrez/Usuario/Jugador/PHP/JugarAjedrez.php",
        data: { ico: sessionStorage.getItem("foto"), j1: sessionStorage.getItem("j1") },
        success: function (response) {
            console.log(verificarSesion())
            if (1 == 1) {
                $('#tabla').show();
                $('#tabla').html(response);
                $('body').css('overflow', 'hidden');
                llamarTablero();
            } else {
                llamarlogin();
            }
        }
    });

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
            $("#botonLogIn").prop('disabled', false)
            sessionStorage.clear();
            $("#botonLogIn").html('<div id="iconoUsr"><i class="fas fa-user" id="foto"></i></div>  <p id="nick">Log in</p>')
            actualizarNick(sessionStorage.getItem("j1"))
        }
    });
}

function cerrarLogin() {
    $('#login').hide();
    $('body').css('overflow', 'auto');
    actualizarNick(sessionStorage.getItem("j1"))
}

function verificarSesion() {

    $.ajax({
        url: "../Proyecto-Ajedrez/Usuario/PHP/verificarSesion.php",
        success: function (response) {
            return response;
        }
    });
    
}
/*======================================================================================================================================================*/
//                                                                     Torneos                                                                          //
/*======================================================================================================================================================*/
