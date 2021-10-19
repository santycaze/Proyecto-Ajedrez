class Torneo {
    //
    constructor(nombreTorneo,codigoIngreso,fechaComInscripciones,fechaFinInscripciones,fechaComTorneo,fechaFinTorneo,tiempoPartida,maximoParticipantes,tiempoMaxPartida,cantPartidas,horarios,tiempoMov,nombreTrofeo,numeroPartidas) {
        this.nombreTorneo = nombreTorneo;
        this.codigoIngreso = codigoIngreso;
        this.puntuacion = puntuacion;
        this.fechaApInsc = fechaComInscripciones;
        this.fechaFinInsc = fechaFinInscripciones;
        this.comienzoTorneo = fechaComTorneo;
        this.finTorneo = fechaFinTorneo;
        this.tiempoPartida = tiempoPartida;
        this.maximoParticipantes = maximoParticipantes;
        this.tiempoMax = tiempoMaxPartida;
        this.cantPartidas = cantPartidas;
        this.Horarios = horarios;
        this.tiempoMov = tiempoMov;
        this.nombreTrofeo = nombreTrofeo;
        this.numeroPartidas = numeroPartidas;
    }

    crearTorneo() {
        $.ajax({
            type: "POST",
            url: "../Admin/Torneos/PHP/Torneos.php",
            data: {nombreTorneo:this.nombreTorneo,codIngreso:this.codigoIngreso,fci:this.fechaApInsc,ffi:this.fechaFinInsc,fct:this.comienzoTorneo,fft:this.finTorneo,tiempoPartida: this.tiempoPartida,maxPart: this.maximoParticipantes,tiempoMaxPart:this.tiempoMax,cantPartidas:this.cantPartidas,horarios:this.Horarios,tiempoMov:this.tiempoMov,nombreTrofeo:this.nombreTrofeo,numeroPartidas:this.numeroPartidas},
            success: function (response) {
                console.log(response);
            }
        });
    }

    empezarTorneo() {

    }

    
}