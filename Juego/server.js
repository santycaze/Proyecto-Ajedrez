const io = require("socket.io")(3000, {
    cors: {
        origin: "http://192.168.1.6",
    }
});

let usuarios = [];

io.on('connection', (socket) => {
    console.log('[NUEVO] Usuario Conectado --> ' + socket.id);

    socket.on('conectado', function (usuario) {
        usuarios[usuario] = socket.id
        console.log(usuario)
    })
    socket.on('disconnect', () => {
        console.log("Usuario desconectado")
    })
    socket.on('piezaMovida', datosJuego => {
        socket.broadcast.emit('movimiento', datosJuego)
    })
    socket.on('asignarColor', () => {
        if (usuarios.length == 2) {
            usuarios.forEach(jugador => {
                console.log(jugador)
            });
        }
    })
})