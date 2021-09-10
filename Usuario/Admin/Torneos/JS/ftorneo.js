function torneo() {
    var tabla1 = "<div class='contenedor-tabla-NoAprobados'><div class='contenedor-mensaje-torneo'><h2>Torneos</h2> <p>No hay ningun torneo creado aún...</p> <br/><button onclick='OnClickTorneoCrear()'>Crear torneo</button></div> </div>";
    $("#tabla1").html(tabla1);
    var tabla2 = '<table> <tr> <th>Nombre</th><th>Visualizar</th></tr><tr><td>Nombre</td><td><button onclick="vertorneo()">Ver</button></td></tr></table>';
    $("#tabla2").html(tabla2);
}

function OnClickTorneoCrear() {
    var tabla3 = ' <div class="contenedor-torneo-emergente" id="cerrar-creaciontorneo"> <div class="contenedor-torneo"> <h2>Creacion de torneos</h2> <input id="nomTorneo" type="text" placeholder="Nombre del Torneo"> <div class="contenedor-columnas-creaciontorneo"> <div class="columna1-creaciontorneo"> <input type="number" placeholder="Codigo ingreso"> <input type="number" placeholder="Puntuacion"> <h3>Comienzo inscripciones</h3> <input type="date"> <h3>Fin inscripciones</h3> <input type="date"> <h3>Comienzo torneo</h3> <input type="date"> <h3>Fin torneo</h3> <input type="date"> </div> <div class="columna2-creaciontorneo"> <input type="number" placeholder="Tiempo partida"> <input type="number" placeholder="Max participantes"> <input type="number" placeholder="Tiempo max partida"><input type="number" placeholder="Cantidad partidas"> <input type="number" placeholder="Horarios"><input type="number" placeholder="Tiempo por movimiento"> <input type="text" placeholder="Nombre trofeo"> <input type="number" placeholder="Numero partidas "> </div> </div> <div class="contenedor-botones-creaciontorneo"><button class="boton-guardar-creaciontorneo" onclick="crTorneo()">Guardar</button> <button class="boton-cancelar-creaciontorneo" onclick="cerrartorneo()">Cancelar</button></div> </div>';
    $("#tabla2").html(tabla3);
}

let crTorneo = () => {

    let datos = new Array();
    let torneo = {
        nomTorneo: document.getElementById('nomTorneo').value,
        fechaApInsc: document.getElementById('apInscripciones').value,
        fechaFinInsc: document.getElementById('finInscripciones').value,
        comienzoTorneo: document.getElementById('comTorneo').value,
        finTorneo: document.getElementById('finTorneo').value,
        maximoPartidas: document.getElementById('maxPart').value,
        numPart: document.getElementById('numPartidas').value,
        tiempoMax: document.getElementById('tiempoMax').value,
        tiempoMov: document.getElementById('tiempoMov').value,
        maxParticipantes: document.getElementById('maxParticipantes').value,
        nomTrofeo: document.getElementById('nomTrofeo').value
    }

    datos.push(torneo.nomTorneo, torneo.fechaApInsc, torneo.fechaFinInsc, torneo.comienzoTorneo, torneo.finTorneo, torneo.maximoPartidas, torneo.numPart, torneo.tiempoMax, torneo.tiempoMov, torneo.maxParticipantes, torneo.nomTrofeo)

    validacion: {
        let er = /\d/;

        console.log(er.test(torneo.nomTorneo))
        
        for (let i = 0; i < datos.length; i++) {
            if (datos[i] == '') {
                console.log('Hay campos vacios');
                break validacion;
            }
        }
    }
}

function datosTorneo() {
    $.ajax({
        type: "POST",
        url: "../Admin/Torneos/PHP/datosTorneo.php",
        success: function (response) {
            var Datos = JSON.parse(response);
            for (let i = 0; i < Datos.length; i++) {

            }
        }
    });
}

function cerrartorneo() {
    $('#cerrar-creaciontorneo').hide();
}