$(document).ready(function() {
    $('#tabla').hide();
});



function llamarajedrez(){
    $.ajax({
        type: "POST",
        url: "HTML/JugarAjedrez.php",
        data: {ico: sessionStorage.getItem("foto"),j1: sessionStorage.getItem("j1")},
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

