function sesion() {
    $.ajax({
        type: "POST",
        url: "../PHP/sesionPrueba.php",
        success: function(response) {
            console.log(response);
        }
    });
}