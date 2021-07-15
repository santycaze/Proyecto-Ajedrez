$(document).ready(function() {
    $('#edicion').hide();
});





function Modificar(){
    $.ajax({
        type: "POST",
        url: "HTML/OpcionesUsuarios.php",
        success: function(response) {
            $('#edicion').show();
           $('#edicion').html(response);
           $('body').css('overflow','hidden');
        }
    });
}



function cerrar(){
    $('#edicion').hide();
    $('body').css('overflow','auto');
}

