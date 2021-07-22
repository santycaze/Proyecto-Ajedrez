var def;


function cambiarIcono(logo, cambiado) {
    console.log(logo);
    //if (cambiado != undefined) {

    sessionStorage.setItem("foto", logo);
    sessionStorage.setItem("default", def);
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