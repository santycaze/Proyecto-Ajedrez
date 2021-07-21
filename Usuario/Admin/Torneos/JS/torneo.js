function Torneo() {
    var tabla1 = "<div class='contenedor-tabla-NoAprobados'><h2>Torneos</h2>No hay ningun torneo creado aún... <br/><button onclick='OnClickTorneoCrear()'>Crear torneo</button></div>";
    $("#tabla1").html(tabla1);
    var tabla2 = '<div class="contenedor-torneo-emergente" id="cerrar-creaciontorneo"><div class="contenedor-torneo"><h2> Torneo </h2> <div class="contenedor-columnas-creaciontorneo"><div class="columna1-creaciontorneo"> <p> Fecha de apertura de inscripciones </p> <p> Fecha fin de incripciones</p> <p> Comienzo de torneo </p> <p> Fin de torneo </p></div> <div class="columna2-creaciontorneo">  </div> </div><div class="contenedor-botones-creaciontorneo"><button class="boton-cancelar-creaciontorneo" onclick="cerrartorneo()">Cancelar</button></div></div>  </div> ';
    tabla2 = " ";
    $("#tabla2").html(tabla2);
}

function OnClickTorneoCrear() {
    var tabla3 = ' <div class="contenedor-torneo-emergente" id="cerrar-creaciontorneo"><div class="contenedor-torneo"><h2>Creacion de torneos</h2><input type="text" placeholder="Nombre del Torneo"> <div class="contenedor-columnas-creaciontorneo"><div class="columna1-creaciontorneo">  <h3>Fecha de apertura de inscripciones</h3><input type="date" placeholder="Apertura de inscripciones"> <h3>Fecha de fin de inscripciones</h3><input type="date" placeholder="Fin de inscripciones"> <h3>Comienzo de torneo</h3><input type="date" placeholder="Comienzo del torneo">  <h3>Fecha de fin de torneo</h3><input type="date" placeholder="Fin del torneo"> </div> <div class="columna2-creaciontorneo"><input type="number" placeholder="Max de participantes"> <input type="number" placeholder="N.partidas por juego"> <input type="number" placeholder="Tiempo max por partida"> <input type="number" placeholder="Tiempo por movida"> <input type="number" placeholder="Max de participantes"> <input type="text" placeholder="Nombre del trofeo"> <input type="userfile" alt="Submit" style="float:right" width="48" height="48"></div> </div><div class="contenedor-botones-creaciontorneo"><button class="boton-guardar-creaciontorneo">Guardar</button><button class="boton-cancelar-creaciontorneo" onclick="cerrartorneo()">Cancelar</button></div></div>  </div>';
    $("#tabla2").html(tabla3);
}

function OnClickTorneoVer() {
    var tabla4 = '   <div class="contenedor-torneo-emergente" id="cerrar-creaciontorneo"><div class="contenedor-torneo"><h2> Torneo </h2> <div class="contenedor-columnas-creaciontorneo"><div class="columna1-creaciontorneo"> </div> <div class="columna2-creaciontorneo">  </div> </div><div class="contenedor-botones-creaciontorneo"><button class="boton-cancelar-creaciontorneo" onclick="cerrartorneo()">Cancelar</button></div></div>  </div>                    '
    $("#tabla4").html(tabla4);
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