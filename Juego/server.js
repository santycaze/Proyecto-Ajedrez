const io = require("socket.io")(3000, {
    cors: {
        origin: "http://192.168.1.2",
    }
});

let usuarios = new Array();
let jugadores = new Array();
let esoectadores = new Array();
// io.to(id de socket que va a recivir el mensaje).emit('', var)

io.on('connection', (socket) => {

    socket.on('conectado', (usuario) => {
        if (Object.keys(usuarios).length <= 2 && usuario != null) {
            usuarios[usuario] = socket.id
            console.log("nuevo jugador   --->  " + usuario)
            jugadores.push(usuario)
        } else if (Object.keys(usuarios).length > 2 && usuario != null) {
            usuarios[usuario] = socket.id
            console.log("nuevo espectador   --->  " + usuario)
            esoectadores.push(usuario)
        }
    })
    socket.on('disconnect', () => {
        console.log("Usuario desconectado")
    })

    socket.on('piezaMovida', datosJuego => {
        socket.broadcast.emit('movimiento', datosJuego)
    })
})