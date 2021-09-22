function torneo() {
    var tabla1 = "<div class='contenedor-tabla-NoAprobados'><div class='contenedor-mensaje-torneo'><h2>Torneos</h2> <p>No hay ningun torneo creado aún...</p> <br/><button onclick='OnClickTorneoCrear()'>Crear torneo</button></div> </div>";
    $("#tabla1").html(tabla1);
    var tabla2 = '';
    $("#tabla2").html(tabla2);
}

function OnClickTorneoCrear() {
    var tabla3 = ' <div class="contenedor-torneo-emergente" id="cerrar-creaciontorneo"><div class="contenedor-torneo"><h2>Creacion de torneos</h2><input id="nomTorneo" type="text" placeholder="Nombre del Torneo"><div class="contenedor-columnas-creaciontorneo"><div class="columna1-creaciontorneo"><input type="number" id="codigoIngreso" placeholder="Codigo ingreso"><input type="number" id="puntuacion" placeholder="Puntuacion"><h3>Comienzo inscripciones</h3><input id="apInscripciones" type="date"><h3>Fin inscripciones</h3><input id="finInscripciones" type="date"><h3>Comienzo torneo</h3><input id="comTorneo" type="date"><h3>Fin torneo</h3><input id="finTorneo" type="date"></div><div class="columna2-creaciontorneo"><input type="time" id="tiempoPartida" placeholder="Tiempo partida"><input type="number" id="maxParticipantes" placeholder="Max participantes"><input type="time" id="tiempoMax" placeholder="Tiempo max partida"><input type="number" id="cantPartidas" placeholder="Cantidad partidas"><input type="time" id="horarios" placeholder="Horarios"><input type="time" id="tiempoMov" placeholder="Tiempo por movimiento"><input type="text" id="nomTrofeo" placeholder="Nombre trofeo"><input type="number" id="numeroPartidas" placeholder="Numero partidas "></div></div><div class="contenedor-botones-creaciontorneo"><button class="boton-guardar-creaciontorneo" onclick="crTorneo()">Guardar</button><button class="boton-cancelar-creaciontorneo" onclick="cerrartorneo()">Cancelar</button></div></div>'
    $("#tabla2").html(tabla3);
}

function crTorneo() {

    let datos = new Array();
    let datosTorneo = {
        nomTorneo: document.getElementById('nomTorneo').value,
        codigoIngreso: document.getElementById('codigoIngreso').value,
        puntuacion: document.getElementById('puntuacion').value,
        fechaApInsc: document.getElementById('apInscripciones').value,
        fechaFinInsc: document.getElementById('finInscripciones').value,
        comienzoTorneo: document.getElementById('comTorneo').value,
        finTorneo: document.getElementById('finTorneo').value,
        tiempoPartida: document.getElementById('tiempoPartida').value,
        maximoParticipantes: document.getElementById('maxParticipantes').value,
        tiempoMax: document.getElementById('tiempoMax').value,
        cantPartidas: document.getElementById('cantPartidas').value,
        Horarios: document.getElementById('horarios').value,
        tiempoMov: document.getElementById('tiempoMov').value,
        nomTrofeo: document.getElementById('nomTrofeo').value,
        numeroPartidas: document.getElementById('numeroPartidas').value
    }
    datos.push(datosTorneo.nomTorneo, datosTorneo.fechaApInsc, datosTorneo.fechaFinInsc, datosTorneo.comienzoTorneo, datosTorneo.finTorneo, datosTorneo.maximoPartidas, datosTorneo.numPart, datosTorneo.tiempoMax, datosTorneo.tiempoMov, datosTorneo.maxParticipantes, datosTorneo.nomTrofeo)
    /*
    validacion: {
        for (let i = 0;  i < datos.length; i++) {
            if (datos[i] == '') {
                console.log('Hay campos vacios');
                break validacion;
            }
        }
    }
    */
    const torneo = new Torneo(datosTorneo.nomTorneo, datosTorneo.codigoIngreso, datosTorneo.puntuacion, datosTorneo.fechaApInsc, datosTorneo.fechaFinInsc, datosTorneo.comienzoTorneo, datosTorneo.finTorneo, datosTorneo.tiempoPartida, datosTorneo.maximoParticipantes, datosTorneo.tiempoMax, datosTorneo.cantPartidas, datosTorneo.Horarios, datosTorneo.tiempoMov, datosTorneo.nomTrofeo, datosTorneo.numeroPartidas);
    torneo.crearTorneo()
}

function cerrartorneo() {
    $('#cerrar-creaciontorneo').hide();
}