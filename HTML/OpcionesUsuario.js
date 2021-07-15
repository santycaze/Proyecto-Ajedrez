$(document).ready(function() {
    $('').hide();
});





function Modificar(){
    $.ajax({
        type: "POST",
        url: "HTML/OpcionesUsuarios.php",
        success: function(response) {
            $('#tabla').show();
           $('#tabla').html(response);
           $('body').css('overflow','hidden');
        }
    });
}



function cerrar(){
    $('#tabla').hide();
    $('body').css('overflow','auto');
}

