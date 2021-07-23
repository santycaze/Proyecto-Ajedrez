function torneo() {
    var tabla1 = "<div class='contenedor-tabla-NoAprobados'><div class='contenedor-mensaje-torneo'><h2>Torneos</h2> <p>No hay ningun torneo creado aún...</p> <br/><button onclick='OnClickTorneoCrear()'>Crear torneo</button></div> </div>";
    $("#tabla1").html(tabla1);
    var tabla2 = '<div class="contenedor-torneo-emergente" id="cerrar-creaciontorneo"><div class="contenedor-torneo"><h2> Torneo </h2> <div class="contenedor-columnas-creaciontorneo"><div class="columna1-creaciontorneo"> <p> Fecha de apertura de inscripciones </p> <p> Fecha fin de incripciones</p> <p> Comienzo de torneo </p> <p> Fin de torneo </p></div> <div class="columna2-creaciontorneo">  </div> </div><div class="contenedor-botones-creaciontorneo"><button class="boton-cancelar-creaciontorneo" onclick="cerrartorneo()">Cancelar</button></div></div>  </div> ';
    tabla2 = " ";
    $("#tabla2").html(tabla2);
}

function OnClickTorneoCrear() {
    var tabla3 = ' <div class="contenedor-torneo-emergente" id="cerrar-creaciontorneo"><div class="contenedor-torneo"><h2>Creacion de torneos</h2><input id="nomTorneo" type="text" placeholder="Nombre del Torneo"> <div class="contenedor-columnas-creaciontorneo"><div class="columna1-creaciontorneo">  <h3>Fecha de apertura de inscripciones</h3><input id="apInscripciones" type="date" placeholder="Apertura de inscripciones"> <h3>Fecha de fin de inscripciones</h3><input id="finInscripciones" type="date" placeholder="Fin de inscripciones"> <h3>Comienzo de torneo</h3><input id="comTorneo" type="date" placeholder="Comienzo del torneo">  <h3>Fecha de fin de torneo</h3><input id="finTorneo" type="date" placeholder="Fin del torneo"> </div> <div class="columna2-creaciontorneo"><input id="maxPart" type="number" placeholder="Max de participantes"> <input id="numPartidas" type="number" placeholder="N.partidas por juego"> <input id="tiempoMax" type="text" placeholder="Tiempo max por partida"> <input id="tiempoMov" type="text" placeholder="Tiempo por movida"> <input id="maxParticipantes" type="number" placeholder="Max de participantes"> <input id="nomTrofeo" type="text" placeholder="Nombre del trofeo"> <input type="userfile" alt="Submit" style="float:right" width="48" height="48"></div> </div><div class="contenedor-botones-creaciontorneo"><button class="boton-guardar-creaciontorneo" onclick="crearTorneo()">Guardar</button><button class="boton-cancelar-creaciontorneo" onclick="cerrartorneo()">Cancelar</button></div></div>  </div>';
    $("#tabla2").html(tabla3);
}

function OnClickTorneoVer() {
    var tabla4 = '   <div class="contenedor-torneo-emergente" id="cerrar-creaciontorneo"><div class="contenedor-torneo"><h2> Torneo </h2> <div class="contenedor-columnas-creaciontorneo"><div class="columna1-creaciontorneo"> </div> <div class="columna2-creaciontorneo">  </div> </div><div class="contenedor-botones-creaciontorneo"><button class="boton-cancelar-creaciontorneo" onclick="cerrartorneo()">Cancelar</button></div></div>  </div>                    '
    $("#tabla4").html(tabla4);
}

function crearTorneo() {
    var nombreTorneo = document.getElementById('nomTorneo').value;
    var fechaApInsc = document.getElementById('apInscripciones').value;
    var fechaFinInsc = document.getElementById('finInscripciones').value;
    var comienzoTorneo = document.getElementById('comTorneo').value;
    var finTorneo = document.getElementById('finTorneo').value;
    var maximoPartidas = document.getElementById('maxPart').value;
    var numPart = document.getElementById('numPartidas').value;
    var tiempoMax = "00:"+document.getElementById('tiempoMax').value;
    var tiempoMov = "00:"+document.getElementById('tiempoMov').value;
    var maxParticipantes = document.getElementById('maxParticipantes').value;
    var nomTrofeo = document.getElementById('nomTrofeo').value;
    console.log(nombreTorneo+"  -  "+fechaApInsc+"  -  "+fechaFinInsc+"  -  "+comienzoTorneo+"  -  "+finTorneo+"  -  "+maximoPartidas+"  -  "+numPart+"  -  "+tiempoMax+"  -  "+tiempoMov+"  -  "+maximoPartidas+"  -  "+maxParticipantes+"  -  "+nomTrofeo)
    $.ajax({
        type: "POST",
        url: "../Admin/Torneos/PHP/crearTorneos.php",
        data: {nombreTorneo:nombreTorneo,fci:fechaApInsc,ffi:fechaFinInsc,fct:comienzoTorneo,fft:finTorneo,mp:maximoPartidas,numPart:numPart,tiempoPart:tiempoMax,tiempoMov:tiempoMov,maxParticipantes:maxParticipantes,nomTrofeo:nomTrofeo},
        success: function (response) {
            console.log(response);
        }
    });
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