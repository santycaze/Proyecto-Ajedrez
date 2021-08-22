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
    $('#tablero').css('height', altotablero);
    $('#tablero').css('width', altotablero);
    let anchoceldas = altotablero / 10;
    $('td').css('height', anchoceldas);
    $('td').css('width', anchoceldas);
    $('button').css('height', anchoceldas);
    $('button').css('width', anchoceldas);
    let altoimagenes = anchoceldas * 0.8;
    $('img').css('height', altoimagenes);

}

