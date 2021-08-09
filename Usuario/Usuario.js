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
                if (response != 1) {
                    let datosUsuario = JSON.parse(response);
                    sessionStorage.setItem("j1", datosUsuario["nombre"]);
                    sessionStorage.setItem("foto", datosUsuario["icono"]);
                    actualizarNick()
                    cerrarLogin();
                }else{
                    $(".err").css('display', 'block')
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

    guardarModificacion(nombreActual,nombreNuevo,icono) {
        console.log(icono)
        if (nombreNuevo == null) {
            $.ajax({
                type: "POST",
                url: "Usuario/PHP/cambiarIcono.php",
                data: { nombreActual: nombreActual, icono:icono },
                success: function (response) {
                    console.log(response)
                    sessionStorage.setItem("foto", icono)
                    actualizarNick("...");
                }
            });
        }else{
            let urls = { 0:"Usuario/PHP/cambiarNombre.php", 1:"Usuario/PHP/cambiarIcono.php"}
            let data = { 0:{ nombreActual: nombreActual, nombreNuevo: nombreNuevo }, 1:{ nombreActual: nombreActual, icono:icono }}
            for (let i = 0; i <= 1; i++) {
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
        }
    }
}