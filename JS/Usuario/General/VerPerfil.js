$(document).ready(function () {
    $('#verperfil').hide();
});

function ver() {
    $.ajax({
        type: "POST",
        url: "Usuario/PHP/VerPerfil.php",
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

