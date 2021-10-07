$(document).ready(function () {


    $.ajax({
        type: "POST",
        url: "UnirseTorneo.php",
        success: function (response) {
            alert("te has unido al torneo correctamente");
        }
    });


});