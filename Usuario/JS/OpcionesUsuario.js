$(document).ready(function () {
    $('#edicion').hide();
});

function Modificar() {
    $.ajax({
        type: "POST",
        url: "Usuario/PHP/OpcionesUsuarios.php",
        data: {usr:sessionStorage.getItem("j1")},
        success: function (response) {
            $('#edicion').show();
            $('#edicion').html(response);
            $('body').css('overflow', 'hidden');
        }
    });
}

function opcAdmin() { 
    window.location = "/Proyecto-Ajedrez/Usuario/Admin/administrador.html"
}

function cerrarmod() {
    $('#edicion').hide();
    $('body').css('overflow', 'auto');
}

function guardarmod() {
    var nuevoNombre = document.getElementById("inputNombre").value;
    var nombreAntiguo = sessionStorage.getItem("j1");
    $.ajax({
        type: "POST",
        url: "Usuario/PHP/cambiarNombre.php",
        data: {usr:nombreAntiguo,nuevoNombre:nuevoNombre},
        success: function (response) {
            console.log(response)
            //$('#edicion').hide();
            //$('body').css('overflow', 'auto');
        }
    });

}

function cambiarNombre(nom) {
    $(".nick-usuario").html('<input id="inputNombre" style="width:100%; height:30px; font-size:30px" type="text" name="" value="'+nom+'"/>')
}
