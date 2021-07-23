$(document).ready(function () {
    $('#edicion').hide();
    $('#verperfil').hide();
    $('#tabla').hide();
});
/*======================================================================================================================================================*/
//
/*======================================================================================================================================================*/
function login() {
    var usr = document.getElementById('usr').value;
    var pass = document.getElementById('pass').value;
    const usuario = new Usuario();
    usuario.logIn(usr,pass);
    sessionStorage.setItem("foto", "IMG/icono1.png")
}

function guardarMod() {
    var nombreActual = sessionStorage.getItem("j1");
    var nuevoNombre = document.getElementById("inputNombre").value;
    const usuario = new Usuario();
    if (document.getElementById("inputNombre").value != null) {
        usuario.guardarModificacion(nombreActual,nuevoNombre);
    }else{
        $('#edicion').hide();
        $('body').css('overflow', 'auto');
    }
    $('#edicion').hide();
    $('body').css('overflow', 'auto');
}

function actualizarNick(usr) {
    if (usr != null) {
        $("#botonLogIn").html('<i id="foto"></i> <p id="nick"></p>')
        $("#botonLogIn").attr('disabled', 'true')
        $("#nick").html(sessionStorage.getItem("j1"))
        $("#foto").html("<img id='foto2' src='"+sessionStorage.getItem("foto")+"'></img>")
    }else{
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
    $(".nick-usuario").html('<input id="inputNombre" style="width:100%; height:30px; font-size:30px" type="text" name="" value="'+nom+'"/>')
}

function Modificar() {
    $.ajax({
        type: "POST",
        url: "Usuario/PHP/OpcionesUsuarios.php",
        data: {usr:sessionStorage.getItem("j1"),img:sessionStorage.getItem("foto")},
        success: function (response) {
            $('#edicion').show();
            $('#edicion').html(response);
            $('body').css('overflow', 'hidden');
        }
    });
}

function cambiarIcono(logo) {
    sessionStorage.setItem("foto", logo);
    $("#iconoUsr").html('<i id="foto"></i> <p id="nick"></p>')
    $("#foto").html("<img id='foto2' src='" + sessionStorage.getItem("foto") + "'></img>")
    $("#vistaPrevia").attr('src', sessionStorage.getItem("foto"))
}
/*======================================================================================================================================================*/
//                                                     Opciones 'menu-usuario' -> Ver Perfil                                                            //
/*======================================================================================================================================================*/
function ver() {
    $.ajax({
        type: "POST",
        url: "Usuario/PHP/VerPerfil.php",
        data: {usr:sessionStorage.getItem("j1"),img:sessionStorage.getItem("foto")},
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
//                                                                  Boton Jugar                                                                         //
/*======================================================================================================================================================*/
function llamarajedrez(){
    $.ajax({
        type: "POST",
        url: "../Proyecto-Ajedrez/Usuario/Jugador/PHP/JugarAjedrez.php",
        data: {ico: sessionStorage.getItem("foto"),j1: sessionStorage.getItem("j1")},
        success: function(response) {
            console.log(response)
            if (response != 0) {
                $('#tabla').show();
                $('#tabla').html(response);
                $('body').css('overflow','hidden');
                llamarTablero();
            }else{
                window.location = "../Proyecto-Ajedrez/index.html"; 
            }
        }
    });
    
}

function cerrar(){
    $('#tabla').hide();
    $('body').css('overflow','auto');
}
/*======================================================================================================================================================*/
//                                                              Cerrar Sesion                                                                           //
/*======================================================================================================================================================*/
function cerrarSesion() {
    $.ajax({
        type: "POST",
        url: "../Proyecto-Ajedrez/Usuario/PHP/cerrarSesion.php",
        success: function (response) {
            sessionStorage.clear();
            window.location = "../Proyecto-Ajedrez/index.html";
        }
    });
}

function llamarlogin() {
    $.ajax({
        type: "POST",
        url: "../Proyecto-Ajedrez/Usuario/Jugador/PHP/login.php",
        success: function (response) {
            sessionStorage.clear();
            window.location = "../Proyecto-Ajedrez/index.html";
        }
    });
}