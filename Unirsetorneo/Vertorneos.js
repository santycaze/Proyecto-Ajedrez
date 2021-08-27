$(document).ready(function () {


    $.ajax({
        type: "POST",
        url: "Vertorneos.php",
        success: function (response) {
            $('#Importar-torneos').html(response);
        }
    });


});