function Registrarse() {
   
    var usu = document.getElementById("usu").value;
    var com = document.getElementById("com").value;
    var mai = document.getElementById("mai").value;
    
    var cel = document.getElementById("cel").value;
    var nac = document.getElementById("nac").value;
    var con = document.getElementById("con").value;
    var rcon = document.getElementById("rcon").value;
    alert("hola");
  
    $.ajax({
        type: "POST",
        url: "../PHP/register.php",
        data: {nombreUsuario:usu, nombreCompleto:com, mail:mai, celular:cel,
             nacimiento:nac, contrasena:con, Rcontrasena:rcon},
        success: function (response) {
            alert(response);
            if(response == 1){
                    alert("el usuario ya existe");
            }else{
                alert("te has registrado");
            }
        }
    });
}