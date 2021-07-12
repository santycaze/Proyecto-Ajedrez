var contenido;
function TraePeriodistas() {
  $.ajax({
    type: "POST",
    url: "../PHP/TraePeriodistas.php",
    success: function (response) {
      var Datos = JSON.parse(response);
      for (let i = 0; i < Datos.length; i++) {
        console.log(Datos[i]);
        var tablaAprobados = document.getElementById("tablaAprobados");
        var tablaNoAprobados = document.getElementById("tablaNoAprobados");
        /*
        //------------------------------------------------------------------------------------------------------------------------------------------------------------
        */
        if(Datos[i].Aprobado == 1){
          contenido = "<tr><td><div class='td1'>"+Datos[i].nombreUsuario+"</td></div><td><div class='td1'>IEP</div></td><td><div class='td1'>Periodista</div></td><td><div class='td1'><button>✖</button></div></td></tr>";
          $(tablaAprobados).append(contenido);
        }else{
          contenido = "<tr><td><div class='td1'>"+Datos[i].nombreUsuario+"</td></div><td><div class='td1'>IEP</div></td><td><div class='td1'>Periodista</div></td><td><div class='td1'><button>✓</button><button>✖</button></div></td></tr>";
          $(tablaNoAprobados).append(contenido);
        }
      }
    }
  });

}

function Periodistas() {
  var tabla1 = "<table id='tablaNoAprobados'> <h2>Pendientes de aprobar</h2><tr> <th id='col1'>Nombre</th> <th id='col1'>Institucion</th>  <th id='col1'>Tipo</th>  <th id='col1'>A/R</th></tr></table>";
  $("#tabla1").html(tabla1);
  var tabla2 = "<table id='tablaAprobados'> <h2>Pendientes de aprobar</h2><tr> <th id='col1'>Nombre</th> <th id='col1'>Institucion</th>  <th id='col1'>Tipo</th>  <th id='col1'>Eliminar</th></tr></table>";
  $("#tabla2").html(tabla2);
  $(document).ready(function () {
    TraePeriodistas()
  });
}

function Usuarios() {
  var tabla1 = ""
  $("#tabla1").html(tabla1);
  var tabla2 = ""
  $("#tabla2").html(tabla2);
  $(document).ready(function () {
    
  });
}