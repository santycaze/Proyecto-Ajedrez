function Registrarse() {
    alert("1");
    var usu = document.getElementById('usu').value;
    var com = document.getElementById('com').value;
    var mai = document.getElementById('mai').value;
    var c = document.getElementById('c').value;
    var cel = document.getElementById('cel').value;
    var nac = document.getElementById('nac').value;
    var con = document.getElementById('con').value;
    var rcon = document.getElementById('rcon').value;
    alert("2");
    $.ajax({
        type: "POST",
        url: "../Usuario/PHP/register.php",
        data: {nombreUsuario:usu, nombreCompleto:com, mail:mai, ci:c, celular:cel,
             nacimiento:nac, contrasena:con, Rcontrasena:rcon},
        success: function (response) {
            console.log(response);
            if (response == 1) {
                sessionStorage.setItem("j1", response);
                window.location = "../index.html";
            }else{
                alert ("error!");
            }
        }
    });
}