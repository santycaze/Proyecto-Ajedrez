class Jugador extends Usuario {

    constructor(usuario, Nombre, Apellido, mail, ci, celular, Fnacimiento, tipo, icono, Institucion, aCursivo, cliceo, nombreDirector, mailDirector) {
        super(usuario, Nombre, Apellido, mail, ci, celular, Fnacimiento, tipo, icono)
        this.Institucion = Institucion
        this.aCursivo = aCursivo
        this.cLiceo = cliceo
        this.nombreDirector = nombreDirector
        this.mailDirector = mailDirector
    }

    registrarJugador(passwd){
        $.ajax({
            type: "POST",
            url: "../../Proyecto-Ajedrez/Usuario/PHP/register.php",
            data: { usuario: this.Usuario, cedula: this.Ci, celular: this.Cel, email: this.Mail, apellido: this.Apellido, NombreCompleto: this.Nombre, Contra: passwd, Nacimiento: this.Fnac, Tipo: this.Tipo, Icono: this.Icono,Institucion:this.Institucion,anCursivo:this.aCursivo,contactoLiceo: this.cLiceo,nomDirector: this.nombreDirector, mailDirector: this.mailDirector},
            success: function (data) {
                console.log(data)
                if (data == 1) {
                    alert('El nombre de usuario ya existe');
                } else {

                    data = data.split('*'); //obtengo los datos para iniciar sesion luego de registrarse
                    sessionStorage.setItem("j1", data[0]);
                    sessionStorage.setItem("foto", data[1]);
                    window.location = "/Proyecto-Ajedrez/index.html"

                }
            }
        });
    }
}

