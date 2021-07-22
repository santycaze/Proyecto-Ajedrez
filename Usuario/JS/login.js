function iniciarSesion() {
    var usr = document.getElementById('usr').value;
    var pass = document.getElementById('pass').value;

    $.ajax({
        type: "POST",
        url: "../Usuario/PHP/login.php",
        data: { user: usr, pass: pass },
        success: function(response) {
            console.log(response);
           if (response != 1) {
            sessionStorage.setItem("j1", response);
               window.location = "../index.html";
           }
        }
    });
}
function sesion(usr) {
    $.ajax({
        type: "POST",
        url: "/PHP/sesionPrueba.php",
        data: {usr:usr},
        success: function (response) {
            
            $("#elcosodellogin").html('<i id="foto"></i> <p id="nick"></p>')
            $("#nick").html(sessionStorage.getItem("j1"))
            $("#foto").html("<img id='foto2' src='../Proyecto-Ajedrez/IMG/Icono3.png'></img>")
        }
    });
}
/*


*/