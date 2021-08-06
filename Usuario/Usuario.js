class Usuario {
    constructor(Usuario, Nombre, Apellido, mail, ci, celular, Fnacimiento, Passwd, icono) {
        this.Usuario = Usuario;
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.Mail = mail;
        this.Ci = ci;
        this.Cel = celular;
        this.Fnac = Fnacimiento;
        this.Cont = Passwd;
        this.Icono = icono;
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
    get icono() {
        return this.Icono;
    }
    set icono(icono) {
        this.Icono = icono;
    }

    logIn(usr, pass) {
        $.ajax({
            type: "POST",
            url: "/Proyecto-Ajedrez/Usuario/PHP/login.php",
            data: { user: usr, pass: pass },
            success: function (response) {
                console.log(response)
                if (response != 1) {
                    sessionStorage.setItem("j1", response);
                    cerrarLogin();
                }
            }
        });
    }

    register(nuser, ci, cel, email, ap, nomc, pass, nac, tipo) {
        $.ajax({
            type: "POST",
            async: true,
            url: "../Usuario/PHP/register.php",
            data: { usuario: nuser, cedula: ci, celular: cel, email: email, apellido: ap, NombreCompleto: nomc, Contra: pass, Nacimiento: nac, Tipo: tipo },
            success: function (data) {
                console.log(data)
                if (data == 1) {
                    alert('El nombre de usuario ya existe');
                } else {
                    alert('Te registraste correctamente misil');
                }
            },
        });
    }

    guardarModificacion(nombreNuevo) {
        $.ajax({
            type: "POST",
            url: "Usuario/PHP/cambiarNombre.php",
            data: { nombreActual: nombreActual, nombreNuevo: nombreNuevo },
            success: function (response) {
                console.log(response)
                sessionStorage.setItem("j1", nombreNuevo)
                actualizarNick("...");
            }
        });
    }
}