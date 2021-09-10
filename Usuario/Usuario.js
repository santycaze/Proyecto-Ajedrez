class Usuario {
    constructor(Usuario, Nombre, Apellido, mail, ci, celular, Fnacimiento, Passwd, tipo, icono, inst, acursivo, cliceo, nomDirector, mDirector) {
        this.Usuario = Usuario;
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.Mail = mail;
        this.Ci = ci;
        this.Cel = celular;
        this.Fnac = Fnacimiento;
        this.Cont = Passwd;
        this.Tipo = tipo;
        this.Icono = icono;
        //temporal
        this.Institucion = inst;
        this.aCursivo = acursivo;
        this.contLiceo = cliceo;
        this.nombreDirector = nomDirector;
        this.mailDirector = mDirector;
    }
    get Usr() {
        return this.Usuario;
    }
    set Usr(user) {
        this.Usuario = user;
    }
    get Nom() {
        return this.Nombre;
    }
    set Nom(nombre) {
        this.Nombre = nombre;
    }
    get Ape() {
        return this.Apellido;
    }
    set Ape(apellido) {
        this.Apellido = apellido;
    }
    get mail() {
        return this.Mail;
    }
    set mail(mail) {
        this.Mail = mail;
    }
    get ci() {
        return this.Ci;
    }
    set ci(ci) {
        this.Ci = ci;
    }
    get cel() {
        return this.Cel;
    }
    set cel(celular) {
        this.Cel = celular;
    }
    get fnac() {
        return this.Fnac;
    }
    set fnac(fnac) {
        this.Fnac = fnac;
    }
    get cont() {
        return this.Cont;
    }
    set cont(contra) {
        this.Cont = contra;
    }
    get tipoUsr() {
        return this.Icono;
    }
    set tipoUsr(tipo) {
        this.Tipo = tipo;
    }
    get icono() {
        return this.Icono;
    }
    set icono(icono) {
        this.Icono = icono;
    }
    //temporal

    get institucion() {
        return this.Institucion;
    }
    set institucion(inst) {
        this.Institucion = inst;
    }
    get ACursivo() {
        return this.aCursivo;
    }
    set ACursivo(ac) {
        this.aCursivo = ac;
    }
    get contLic() {
        return this.contLiceo;
    }
    set contLic(contactoL) {
        this.contLiceo = contactoL;
    }
    get nmDirector() {
        return this.nomDirector;
    }
    set nmDirector(nombreDir) {
        this.nomDirector = nombreDir;
    }
    get mailDir() {
        return this.mailDirector;
    }
    set mailDir(mailD) {
        this.mailDirector = mailD;
    }

    logIn(usr, pass) {
        $.ajax({
            type: "POST",
            url: "/Proyecto-Ajedrez/Usuario/PHP/login.php",
            data: { user: usr, pass: pass },
            success: function (response) {
                if (response != 1) {
                    let datosUsuario = JSON.parse(response);
                    sessionStorage.setItem("j1", datosUsuario["nombre"]);
                    sessionStorage.setItem("foto", datosUsuario["icono"]);
                    sessionStorage.setItem("tipoUsr", datosUsuario["tipo"])
                    cerrarLogin();
                    location.reload()
                } else {
                    $(".err").css('display', 'block')
                }
            }
        });
    }

    register() {

        $.ajax({
            type: "POST",
            async: true,
            url: "../Usuario/PHP/register.php",
            data: { usuario: this.Usuario, cedula: this.ci, celular: this.cel, email: this.mail, apellido: this.Apellido, NombreCompleto: this.Nombre, Contra: this.Cont, Nacimiento: this.Fnac, Tipo: this.Tipo, Icono: this.Icono,Institucion:this.Institucion,anCursivo:this.aCursivo,contactoLiceo: this.contLiceo,nomDirector: this.nombreDirector, mailDirector: this.mailDirector},
            success: function (data) {
                console.log(data)
                if (data == 1) {
                    alert('El nombre de usuario ya existe');
                } else {
                    var iniciarSesion = data.split('*'); //obtenco los datos para iniciar sesion luego de loguearse
                    sessionStorage.setItem("j1", iniciarSesion[0]);
                    sessionStorage.setItem("foto", iniciarSesion[1]);
                    window.location = "/Proyecto-Ajedrez/index.html"
                }
            },
        });
    }

    guardarModificacion(nombreActual, nombreNuevo, icono) {
        console.log(icono)
        let i
        if (nombreNuevo == null) {
            $.ajax({
                type: "POST",
                url: "Usuario/PHP/cambiarIcono.php",
                data: { nombreActual: nombreActual, icono: icono },
                success: function (response) {
                    console.log(response)
                    sessionStorage.setItem("foto", icono)
                    actualizarNick("...");
                }
            });
        } else {
            let urls = { 0: "Usuario/PHP/cambiarNombre.php", 1: "Usuario/PHP/cambiarIcono.php" }
            let data = { 0: { nombreActual: nombreActual, nombreNuevo: nombreNuevo }, 1: { nombreActual: nombreActual, icono: icono } }
            if (icono != null) {
                for (i = 0; i <= 1; i++) {
                    $.ajax({
                        type: "POST",
                        url: urls[i],
                        data: data[i],
                        success: function (response) {
                            console.log(response)
                            sessionStorage.setItem("foto", icono)
                            sessionStorage.setItem("j1", nombreNuevo)
                            actualizarNick("...");
                        }
                    });
                }
            } else {
                $.ajax({
                    type: "POST",
                    url: urls[0],
                    data: data[0],
                    success: function (response) {
                        console.log(response)
                        sessionStorage.setItem("foto", icono)
                        sessionStorage.setItem("j1", nombreNuevo)
                        actualizarNick("...");
                    }
                });
            }
        }
    }
}

