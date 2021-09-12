class Jugador extends Usuario {

    constructor(usuario, Nombre, Apellido, mail, ci, celular, Fnacimiento, Passwd, tipo, icono, Institucion, aCursivo, cliceo, nombreDirector, mailDirector) {
        super(usuario, Nombre, Apellido, mail, ci, celular, Fnacimiento, Passwd, tipo, icono)
        this.Institucion = Institucion
        this.aCursivo = aCursivo
        this.cLiceo = cliceo
        this.nombreDirector = nombreDirector
        this.mailDirector = mailDirector
    }

    registrarJugador(){
        $.ajax({
            type: "POST",
            url: "../../Proyecto-Ajedrez/Usuario/PHP/register.php",
            data: { usuario: this.Usuario, cedula: this.Ci, celular: this.Cel, email: this.Mail, apellido: this.Apellido, NombreCompleto: this.Nombre, Contra: this.Cont, Nacimiento: this.Fnac, Tipo: this.Tipo, Icono: this.Icono,Institucion:this.Institucion,anCursivo:this.aCursivo,contactoLiceo: this.cLiceo,nomDirector: this.nombreDirector, mailDirector: this.mailDirector},
            success: function (data) {
                console.log(data)
                if (data == 1) {
                    alert('El nombre de usuario ya existe');
                } else {

                    var iniciarSesion = data.split('*'); //obtenco los datos para iniciar sesion luego de registrarse
                    sessionStorage.setItem("j1", iniciarSesion[0]);
                    sessionStorage.setItem("foto", iniciarSesion[1]);
                    window.location = "/Proyecto-Ajedrez/index.html"

                }
            }
        });
    }
}

