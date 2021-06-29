function TraeUsuarios() {
  $.ajax({
    type: "POST",
    url: "../PHP/TraeUsuarios.php",
    success: function (response) {
      var Datos = JSON.parse(response);
      for (let i = 0; i < Datos.length; i++) {
        console.log(Datos[i]);
      }
    }
  });

}
$(document).ready(function () {
  $.ajax({
    type: "Post",
    url: "../PHP/TraeUsuarios.php",
    success: function (response) {
        var data = JSON.parse(response);
        for (let index = 0; index < data.length; index++) {
            console.log(data[index]);
        }
    }
});
});