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
           var tablero = new tablero();
           tablero.llamarTablero();
        }
    });
    
}

function cerrar(){
    $('#tabla').hide();
    $('body').css('overflow','auto');
}

