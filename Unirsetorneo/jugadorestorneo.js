$(document).ready(function () {
    $.ajax({
        type: "POST",
        url: "jugadoresTorneo.php",
        success: function (response) {
            $('#Importar-jugadoresTorneo').html(response);
        }
    });
});