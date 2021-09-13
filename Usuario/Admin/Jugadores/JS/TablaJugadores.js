let TABLA_JUGADORES = document.createElement('table');
TABLA_JUGADORES.setAttribute('id', 'tablaJugadores');
TABLA_JUGADORES.setAttribute('class', 'tabla1');

let th = `<h2>Jugadores</h2><tbody id="tbody"><th id='col1'>Usuario</th> <th id='col1'>Nombre</th> <th id='col1'>Apellido</th> <th id='col1'>Institucion</th> <th id='col1'>Mail</th><th id='col1'>Eliminar</th></tbody>`;

$(document).on('click', '#Usuario', function () {
    TraeJugadores(function (jugadores) {
        
        $('#tablaJugadores').html(th)
        jugadores.forEach(jugador => {

            console.log(jugador)

            let tr = document.createElement('tr');
            let tdUsuario = document.createElement('td');
            let tdInstitucion = document.createElement('td');
            let tdNombre = document.createElement('td');
            let tdApellido = document.createElement('td');
            let tdMail = document.createElement('td');
            let tdEliminar = document.createElement('button');

            tdEliminar.setAttribute('id', jugador.Usuario)

            tdEliminar.innerHTML = "✖";
            tdUsuario.textContent = jugador.Usuario;
            tdInstitucion.textContent = jugador.Institucion;
            tdNombre.textContent = jugador.Nombre;
            tdApellido.textContent = jugador.Apellido;
            tdMail.textContent = jugador.Mail;

            tr.appendChild(tdUsuario)
            tr.appendChild(tdNombre)
            tr.appendChild(tdApellido)
            tr.appendChild(tdInstitucion)
            tr.appendChild(tdMail)
            tr.appendChild(tdEliminar)

            tr.setAttribute('id', jugador.Usuario)
            TABLA_JUGADORES.appendChild(tr)
        });
    })
    $('#tabla1').html(TABLA_JUGADORES)
    $('#tabla2').html('')
});

$(document).on('click','#tabla1 button', function () {
    $.ajax({
        type: "POST",
        url: "../Admin/Jugadores/PHP/eliminarJugadores.php",
        data: { usr: this.id }
    });
    $(this).closest("tr").remove();
});

function TraeJugadores( Jugadores) {
    var jugadores = new Array()
    $.ajax({
        type: "POST",
        url: "../Admin/Jugadores/PHP/TraerJugadores.php",
        success: function (response) {

            if (response != '[]') {
                var Datos = JSON.parse(response);
                console.log(Datos)
                for (let i = 0; i < Datos.length; i++) {
                    const jugador = new Jugador(Datos[i].nombreUsuario, Datos[i].nombre, Datos[i].apellidos, Datos[i].mail, Datos[i].ci, Datos[i].celular, Datos[i].nacimiento, Datos[i].tipoUsuario, Datos[i].iconoUsuario, Datos[i].institucion, Datos[i].aCurso, Datos[i].contactoLiceo, Datos[i].nombreDirector, Datos[i].mailDirector);
                    jugadores.push(jugador)
                }
                Jugadores(jugadores)
            }
        }
    });
}