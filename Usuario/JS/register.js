function registrar(){
    var pass = document.getElementById('pass').value;
    var nomc = document.getElementById('nomc').value;
    var ap = document.getElementById('ap').value;
    var email = document.getElementById('email').value;
    var cel = document.getElementById('cel').value;
    var ci = document.getElementById('CI').value;
    var nuser = document.getElementById('nuser').value;
    var nac = document.getElementById('nac').value;
    var tipo = document.getElementById('Tipo').value;
    

        $.ajax({
            type: "POST",
            async: true,
            url:"../Usuario/PHP/register.php",
            data: {usuario:nuser,cedula:ci,celular:cel,email:email,apellido:ap,NombreCompleto:nomc,Contra:pass,Nacimiento:nac,Tipo:tipo},
            success: function (data) {
                if(data == 1){
                    alert('El nombre de usuario ya existe');
                }else{
                    alert('Te registraste correctamente misil');
                }
            },
          });
}

