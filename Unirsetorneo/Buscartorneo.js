$(document).ready(function () {


        $.ajax({
            type: "POST",
            url: "Buscartorneo.php",
            success: function (response) {
                $('#Importar-torneos').html(response);
            }
        });
    
    
});