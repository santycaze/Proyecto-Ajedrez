function registrar(){
    var pass = document.getElementById('pass').value;
    var nomc = document.getElementById('nomc').value;
    var ap = document.getElementById('ap').value;
    var email = document.getElementById('email').value;
    var cel = document.getElementById('cel').value;
    var ci = document.getElementById('CI').value;
    var nuser = document.getElementById('nuser').value;
    

        $.ajax({
            type: "POST",
            async: false,
            url:"../Usuario/PHP/register.php",
            data: {usuario:nuser,cedula:ci,celular:cel,email:email,apellido:ap,NombreCompleto:nomc,Contra:pass},
            success: function (data) {
           alert(data);
            },
          });
}

