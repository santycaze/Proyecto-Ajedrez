$(document).ready(function() {
    $('#tabla').hide();
});



function llamarajedrez(){
    $.ajax({
        type: "POST",
        url: "../Proyecto-Ajedrez/Usuario/Jugador/PHP/JugarAjedrez.php",
        data: {ico: sessionStorage.getItem("foto"),j1: sessionStorage.getItem("j1")},
        success: function(response) {
            $('#tabla').show();
           $('#tabla').html(response);
           $('body').css('overflow','hidden');
        }
    });
    
}

function llamarTablero() {
    $.ajax({
        type: "POST",
        url: "../Proyecto-Ajedrez/Usuario/Jugador/PHP/traerTablero.php",
        success: function(response) {
           $('#tabla2').html(response);
        }
    });
}

function cerrar(){
    $('#tabla').hide();
    $('body').css('overflow','auto');
}

