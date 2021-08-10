$(document).ready(function () {


        $.ajax({
            type: "POST",
            url: "Buscartorneo.php",
            success: function (response) {
                let datosTorneo=response;
                console.log(datosTorneo);
                datosTorneo=JSON.parse(response);
                $('#login').show();
                $('#login').html(response);
                sessionStorage.clear();
            }
        });
    
    
});