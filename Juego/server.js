const io = require("socket.io")(3000, {
    cors: {
        origin: "http://192.168.4.48",
    }
});

let usuarios = [];

// io.to(id de socket que va a recivir el mensaje).emit('', var)
 
io.on('connection', (socket) => {

    socket.on('conectado', (usuario) => {
        usuarios[usuario] = socket.id
        console.log(usuario)
    })
    
    socket.on('disconnect', () => {
        console.log("Usuario desconectado")
    })

    socket.on('piezaMovida', datosJuego => {
        socket.broadcast.emit('movimiento', datosJuego)
    })
})