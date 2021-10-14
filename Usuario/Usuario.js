class Usuario {
    constructor(usuario, Nombre, Apellido, mail, ci, celular, Fnacimiento, tipo, icono) {
        this.Usuario = usuario;
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.Mail = mail;
        this.Ci = ci;
        this.Cel = celular;
        this.Fnac = Fnacimiento;
        this.Tipo = tipo;
        this.Icono = icono;
    }

    logIn(usr, pass) {
        $.ajax({
            type: "POST",
            url: "/Proyecto-Ajedrez/Usuario/PHP/Sesion/login.php",
            data: { user: usr, pass: pass },
            success: function (response) {
                console.log(response)
                if (response != 1) {
                    let datosUsuario = JSON.parse(response);
                    console.log(datosUsuario)
                    sessionStorage.setItem("j1", datosUsuario["nombre"]);
                    sessionStorage.setItem("foto", datosUsuario["icono"]);
                    sessionStorage.setItem("tipoUsr", datosUsuario["tipoUsr"])
                    cerrarLogin();
                    location.reload()
                } else {
                    $(".err").css('display', 'block')
                }
            }
        });
    }

    guardarModificacion(nombreActual, nombreNuevo, icono) {
        console.log(icono)
        let i
        if (nombreNuevo == null) {
            $.ajax({
                type: "POST",
                url: "Usuario/PHP/OpcionesDeUsuario/cambiarIcono.php",
                data: { nombreActual: nombreActual, icono: icono },
                success: function (response) {
                    console.log(response)
                    sessionStorage.setItem("foto", icono)
                }
            });
        } else {
            let urls = { 0: "Usuario/PHP/OpcionesDeUsuario/cambiarIcono.php", 1: "Usuario/PHP/OpcionesDeUsuario/cambiarNombre.php" }
            let data = { 0: {  nombreActual: nombreActual, icono: icono }, 1: { nombreActual: nombreActual, nombreNuevo: nombreNuevo } }
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
                    }
                });
            }
        }
    }

    mostrarUsuario(){
        return JSON.stringify(this.Usuario)
    }
}

