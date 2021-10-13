$(document).ready(function () {
    datosTorneo()
    $.ajax({
        type: "POST",
        url: "Buscartorneo.php",
        success: function (response) {
            $('#Importar-torneos').html(response);
        }
    });
});
var idt=0;
function verTorneos() {
    $.ajax({
        type: "POST",
        url: "infotorneo.php",
        success: function (response) {
            console.log(JSON.parse(response));
            idt== Servidor;
            window.location = "infotorneo.html";
        }
    });
    
}


function datosTorneo() {

}

function unirseTorneo(){

    $.ajax({
        type:"POST",
        url: "unirseTorneo.php",
        success:function(response){
            alert("te uniste correctamente")
        }
    })
}