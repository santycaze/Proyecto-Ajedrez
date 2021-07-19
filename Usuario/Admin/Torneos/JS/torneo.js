function Torneo() {
    var tabla1 = '<input type="text" placeholder="Nombre del Torneo"> <input type="date" placeholder="Apertura de inscripciones"> <input type="date" placeholder="Fin de inscripciones"> <input type="date" placeholder="Comienzo del torneo">  <input type="date" placeholder="Fin del torneo"> <input type="number" placeholder="Max de participantes">';
    $("#tabla1").html(tabla1);
    var tabla2 = "<table id='tablaAprobados'> <h2>Aprobados</h2><tr> <th id='col1'>Nombre</th> <th id='col1'>Institucion</th>  <th id='col1'>Tipo</th>  <th id='col1'>Inhabilitar</th></tr></table>";
    $("#tabla2").html(tabla2);
}