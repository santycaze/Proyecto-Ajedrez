function iniciarSesion() {
    var usr = document.getElementById('usr').value;
    var pass = document.getElementById('pass').value;

    $.ajax({
        type: "POST",
        url: "../Usuario/PHP/login.php",
        data: { user: usr, pass: pass },
        success: function (response) {
            console.log(response);
            if (response != 1) {
                sessionStorage.setItem("j1", response);
                window.location = "../index.html";
            }
        }
    });
}

function cerrarSesion() {
    var usr = document.getElementById('usr').value;
    var pass = document.getElementById('pass').value;

    $.ajax({
        type: "POST",
        url: "../Usuario/PHP/login.php",
        data: { user: usr, pass: pass },
        success: function (response) {
            console.log(response);
            if (response != 1) {
                sessionStorage.setItem("j1", response);
                window.location = "../index.html";
            }
        }
    });
}

function actualizarNick(usr) {
    if (usr != null) {
        $("#elcosodellogin").html('<i id="foto"></i> <p id="nick"></p>')
        $("#elcosodellogin").attr('disabled','true')
        $("#nick").html(sessionStorage.getItem("j1"))
        $("#foto").html("<img id='foto2' src='../Proyecto-Ajedrez/IMG/Icono3.png'></img>")
    }else{
        console.log("No esta logeado")
    }

}

