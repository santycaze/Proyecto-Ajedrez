$(document).ready(function () {
   responsivetablero();
}); 

$(window).resize(function () { 
    responsivetablero();
});

function responsivetablero(){
    let altoventana = window.innerHeight;
    console.log(altoventana);
    let altotablero = altoventana * 0.8;  
    $('#tabla2').css('height', altotablero);
    $('#tabla2').css('width', altotablero);
}

