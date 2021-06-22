function TraeUsuarios(){
    var fixedurl = '../JS/TraerUsuario.php';

  $.ajax({url: fixedurl,

    type: 'POST',

    async: false,

   // data: { idf: idfecha, idp: idparte, idh: idhno},

    success: function(response){
            document.getElementById("tabla1").innerHTML=response;
    
        //if request if made successfully then the response represent the data



    }
});
}