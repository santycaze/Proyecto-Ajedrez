class Torneo {
    constructor(NombreTorneo, FechaApInsc, FechaFinInsc, ComienzoTorneo, FinTorneo, MaximoPartidas, NumPart, TiempoMax, TiempoMov, MaxParticipantes, NomTrofeo) {
        this.nombreTorneo = NombreTorneo;
        this.fechaApInsc = FechaApInsc;
        this.fechaFinInsc = FechaFinInsc;
        this.comienzoTorneo = ComienzoTorneo;
        this.finTorneo = FinTorneo;
        this.maximoPartidas = MaximoPartidas;
        this.numPart = NumPart;
        this.tiempoMax = TiempoMax;
        this.tiempoMov = TiempoMov;
        this.maxParticipantes = MaxParticipantes;
        this.nomTrofeo = NomTrofeo;
    }
    get nomTorneo() {
        return this.nombreTorneo;
    }
    set nomTorneo(nt) {
        this.nombreTorneo = nt;
    }
    get fechaAperturaInscripciones() {
        return this.fechaApInsc;
    }
    set fechaAperturaInscripciones(fai) {
        this.fechaApInsc = fai;
    }
    get fechaFinInscripciones() {
        return this.fechaApInsc;
    }
    set fechaFinInscripciones(ffi) {
        this.fechaFinInsc = ffi;
    }
    get fechaComienzoTorneo() {
        return this.comienzoTorneo;
    }
    set fechaComienzoTorneo(fct) {
        this.comienzoTorneo = fct;
    }
    get fechaFinTorneo() {
        return this.finTorneo;
    }
    set fechaFinTorneo(fft) {
        this.finTorneo = fft;
    }
    get maxPartidas() {
        return this.maxPartidas;
    }
    set maxPartidas(mp) {
        this.maxPartidas = mp;
    }
    get numeroPartidas() {
        return this.numPart;
    }
    set numeroPartidas(np) {
        this.numPart = np;
    }
    get tiempoMaximo() {
        return this.tiempoMax;
    }
    set tiempoMaximo(tm) {
        this.tiempoMax = tm;
    }
    get timepoMovimiento() {
        return this.tiempoMov;
    }
    set timepoMovimiento(tiempomov) {
        this.tiempoMov = tiempomov;
    }
    get maximoParticipantes() {
        return this.maxParticipantes;
    }
    set maximoParticipantes(maxPart) {
        this.maxParticipantes = maxPart;
    }
    get nombreTrofeo() {
        return this.nomTrofeo;
    }
    set nombreTrofeo(nomTrof) {
        this.nombreTrofeo = nomTrof;
    }

    crearTorneo() {
        console.log(this.nombreTorneo);
        /*
        $.ajax({
            type: "POST",
            url: "../Admin/Torneos/PHP/crearTorneos.php",
            data: {nombreTorneo:nombreTorneo,fci:fechaApInsc,ffi:fechaFinInsc,fct:comienzoTorneo,fft:finTorneo,mp:maximoPartidas,numPart:numPart,tiempoPart:tiempoMax,tiempoMov:tiempoMov,maxParticipantes:maxParticipantes,nomTrofeo:nomTrofeo},
            success: function (response) {
                console.log(response);
            }
        });
        */
    }
}