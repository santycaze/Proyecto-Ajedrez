$(window).resize(function () {
    responsivetablero();
});

function responsivetablero() {
    let anchoventana = window.innerWidth;
    if (anchoventana > 1050) {
         anchoventana = window.innerWidth;
        let anchosecciontablero = anchoventana * 0.75;
        let altoventana = window.innerHeight;
        let altotablero = altoventana * 0.8;
        let anchoceldas = altotablero / 10;
        let altoimagenes = anchoceldas * 0.8;
        $('#tablero').css('height', altotablero);
        $('#tablero').css('width', altotablero);
        $('td').css('height', anchoceldas);
        $('td').css('width', anchoceldas);
        $('button').css('height', anchoceldas);
        $('button').css('width', anchoceldas);
        $('img').css('height', altoimagenes);
        $('img').css('width','');
    }else{
         anchoventana = window.innerWidth;
        let anchosecciontablero = anchoventana * 0.9;
        let anchoceldas = anchosecciontablero / 10;
        let altoimagenes = anchoceldas * 0.8;
        $('td').css('height', anchoceldas);
        $('td').css('width', anchoceldas);
        $('button').css('height', anchoceldas);
        $('button').css('width', anchoceldas);
        $('img').css('height', altoimagenes);
        $('#tablero').css('height', anchosecciontablero);
        $('#tablero').css('width', anchosecciontablero);
        $('img').css('width','100%');
    }

}