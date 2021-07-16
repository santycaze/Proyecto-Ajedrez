function iniciarSesion() {
    var usr = document.getElementById('usr').value;
    var pass = document.getElementById('pass').value;

    $.ajax({
        type: "POST",
        url: "../PHP/login.php",
        data: { user: usr, pass: pass },
        success: function(response) {
            console.log(response);
           if (response == "1") {
            window.location="../index.html";
           }
        }
    });
}