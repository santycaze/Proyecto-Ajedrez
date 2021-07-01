var contenido;
function TraeUsuarios() {
  $.ajax({
    type: "POST",
    url: "../PHP/TraeUsuarios.php",
    success: function (response) {
      var Datos = JSON.parse(response);
      for (let i = 0; i < Datos.length; i++) {
        console.log(Datos[i]);
        var tablaAprobados = document.getElementById("tablaAprobados");
        if(Datos[i].Aprobado == 1){
          contenido = "<tr><td><div class='td1'>"+Datos[i].nombreUsuario+"</td></div><td><div class='td1'>IEP</div></td><td><div class='td1'>Periodista</div></td></tr>";
        }
        $(tablaAprobados).append(contenido);
      }
    }
  });
}