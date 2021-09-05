function torneo() {
    var tabla1 = "<div class='contenedor-tabla-NoAprobados'><div class='contenedor-mensaje-torneo'><h2>Torneos</h2> <p>No hay ningun torneo creado aún...</p> <br/><button onclick='OnClickTorneoCrear()'>Crear torneo</button></div> </div>";
    $("#tabla1").html(tabla1);
    var tabla2 = '<table> <tr> <th>Nombre</th><th>Visualizar</th></tr><tr><td>Nombre</td><td><button onclick="vertorneo()">Ver</button></td></tr></table>';
    $("#tabla2").html(tabla2);
}

function OnClickTorneoCrear() {
    var tabla3 = ' <div class="contenedor-torneo-emergente" id="cerrar-creaciontorneo"><div class="contenedor-torneo"><h2>Creacion de torneos</h2><input id="nomTorneo" type="text" placeholder="Nombre del Torneo"> <div class="contenedor-columnas-creaciontorneo"><div class="columna1-creaciontorneo">  <h3>Fecha de apertura de inscripciones</h3><input id="apInscripciones" type="date" placeholder="Apertura de inscripciones"> <h3>Fecha de fin de inscripciones</h3><input id="finInscripciones" type="date" placeholder="Fin de inscripciones"> <h3>Comienzo de torneo</h3><input id="comTorneo" type="date" placeholder="Comienzo del torneo">  <h3>Fecha de fin de torneo</h3><input id="finTorneo" type="date" placeholder="Fin del torneo"> </div> <div class="columna2-creaciontorneo"><input id="maxPart" type="number" placeholder="Max de participantes"> <input id="numPartidas" type="number" placeholder="N.partidas por juego"> <input id="tiempoMax" type="text" placeholder="Tiempo max por partida"> <input id="tiempoMov" type="text" placeholder="Tiempo por movida"> <input id="maxParticipantes" type="number" placeholder="Max de participantes"> <input id="nomTrofeo" type="text" placeholder="Nombre del trofeo"> <input type="userfile" alt="Submit" style="float:right" width="48" height="48"></div> </div><div class="contenedor-botones-creaciontorneo"><button class="boton-guardar-creaciontorneo" onclick="crTorneo()">Guardar</button><button class="boton-cancelar-creaciontorneo" onclick="cerrartorneo()">Cancelar</button></div></div>  </div>';
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