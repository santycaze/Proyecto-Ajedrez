$(document).ready(function () {
    $('#edicion').hide();
});

function Modificar() {
    $.ajax({
        type: "POST",
        url: "HTML/OpcionesUsuarios.php",
        data: {usr:sessionStorage.getItem("j1")},
        success: function (response) {
            $('#edicion').show();
            $('#edicion').html(response);
            $('body').css('overflow', 'hidden');
        }
    });
}

function cerrarmod() {
    $('#edicion').hide();
    $('body').css('overflow', 'auto');
}

function guardarmod() {
    $('#edicion').hide();
    $('body').css('overflow', 'auto');
}
