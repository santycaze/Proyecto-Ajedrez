function Torneo() {
    var tabla1 = '<h2>Creacion de torneos</h2> <input type="text" placeholder="Nombre del Torneo">  <h3>Fecha de apertura de inscripciones</h3><input type="date" placeholder="Apertura de inscripciones"> <h3>Fecha de fin de inscripciones</h3><input type="date" placeholder="Fin de inscripciones"> <h3>Comienzo de torneo</h3><input type="date" placeholder="Comienzo del torneo">  <h3>Fecha de fin de torneo</h3><input type="date" placeholder="Fin del torneo"> <input type="number" placeholder="Max de participantes"> <input type="number" placeholder="N.partidas por juego"> <input type="number" placeholder="Tiempo max por partida"> <input type="number" placeholder="Tiempo por movida"> <input type="number" placeholder="Max de participantes"> <input type="text" placeholder="Nombre del trofeo"> <input type="userfile" alt="Submit" style="float:right" width="48" height="48">';
    $("#tabla1").html(tabla1);
    if (datosTorneo() == 1) {
        console.log("no hay torneos");
    }
    var tabla2 = "<table id='tablaAprobados'> <h2>Torneos</h2><tr> <th id='col1'>Nombre</th> <th id='col1'>Institucion</th>  <th id='col1'>Tipo</th>  <th id='col1'>Inhabilitar</th></tr></table>";
    $("#tabla2").html(tabla2);
}

function datosTorneo() {
    $.ajax({
        type: "POST",
        url: "../Admin/Torneos/PHP/datosTorneo.php",
        success: function (response) {
            var Datos = JSON.parse(response);
            for (let i = 0; i < Datos.length; i++) {
                console.log(Datos[i]);
                if (Datos[i] != null) {
                    return 1;
                } else {
                    return 0;
                }
            }
        }
    });
}