function sesion() {
    $.ajax({
        type: "POST",
        url: "PHP/sesionPrueba.php",
        success: function (response) {
            console.log(response)
            sessionStorage.setItem("j1", response);
            $("#elcosodellogin").html('<i id="foto"></i> <p id="nick"></p>')
            $("#nick").html(response)
            $("#foto").html("<img id='foto2' src='" + sessionStorage.getItem("foto") + "'></img>")
        }
    });
}
function cambiarIcono(logo,cambiado) {
    console.log(cambiado);
    //if (cambiado != undefined) {
        sessionStorage.setItem("foto", logo);
        $("#iconoUsr").html('<i id="foto"></i> <p id="nick"></p>')
        $("#foto").html("<img id='foto2' src='" + sessionStorage.getItem("foto") + "'></img>")
        $("#vistaPrevia").attr('src', sessionStorage.getItem("foto"))
    /*
    }else{
        $("#iconoUsr").html('<i id="foto"></i> <p id="nick"></p>')
        $("#foto").html("<img id='foto2' src='../Proyecto-Ajedrez/IMG/Icono1.png'></img>")
    }
    */
}