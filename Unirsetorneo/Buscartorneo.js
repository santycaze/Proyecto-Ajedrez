$(document).ready(function () {
    datosTorneo();
    verJugadores();
    $.ajax({
        type: "POST",
        url: "Buscartorneo.php",
        success: function (response) {
            $('#Importar-torneos').html(response);
        }
    });
});

function verTorneos() {
    $.ajax({
        type: "POST",
        url: "infotorneo.php",
        success: function (response) {
            console.log(JSON.parse(response));
            window.location = "InfoTorneoVisual.php";
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
function verJugadores() {
    $.ajax({
        type: "POST",
        url: "jugadoresTorneo.php",
        success: function (response) {
            $('#Importar-jugadoresTorneo').html(response);
            
        }
    });
}