$(document).ready(function() {
    $('#tabla').hide();
});



function llamarajedrez(){
    $.ajax({
        type: "POST",
        url: "HTML/JugarAjedrez.php",
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

