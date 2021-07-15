function iniciarSesion() {
    var usr = document.getElementById('usr').value;
    var pass = document.getElementById('pass').value;

    $.ajax({
        type: "POST",
        url: "../PHP/login.php",
        data: { user: usr, pass: pass },
        success: function(response) {
            $("body").html("estas logeado")
        }
    });
}