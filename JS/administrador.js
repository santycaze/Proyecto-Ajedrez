function TraeUsuarios(){
    

  $.ajax({url: '../PHP/Servidor.php',

    type: 'POST',



   // data: { idf: idfecha, idp: idparte, idh: idhno},

    success: function(response){
            document.getElementById("tabla1").innerHTML=response;
    
        //if request if made successfully then the response represent the data
        var Usuario=JSON.parse(response) 
        for (let i = 0; i < Usuario.length; i++) {
 
          console.log(Usuario[i]);
           }

           
    }
});
}