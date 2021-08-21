const io = require("socket.io")(3000, {
    cors: {
        origin: "http://192.168.217.64",
    }
});

let usuarios = new Array();
let jugadores = new Array();
let esoectadores = new Array();
var color = 0;
// io.to(id de socket que va a recivir el mensaje).emit('', var)

io.on('connection', (socket) => {

    socket.on('conectado', (usuario) => {
        usuarios[usuario] = socket.id
        if (Object.keys(usuarios).length <= 2) {
            console.log("nuevo jugador   --->  "+usuario)
            jugadores.push(usuario)

            jugadores.forEach(jugador => {
                if (color != 1) {
                    io.to(usuarios[jugador]).emit('color', 1)
                    color = 1
                }else{
                    io.to(usuarios[jugador]).emit('color', 0)
                    color = 0
                }

            });
        }else if (Object.keys(usuarios).length > 2) {
            console.log("nuevo espectador   --->  "+usuario)
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