function vertorneo()

$.ajax({
    type: "POST",
    url: "../PHP/verTorneos.php",
    success: function (response) {
        $('#div-dondecargolascosas').html(response);
    }
});