const io = require("socket.io")(3000, {
    cors: {
        origin: "http://192.168.4.48",
      }
});

io.on('connection', (socket) => {
    console.log('[NUEVO] Usuario Conectado --> '+socket.id);
    socket.on('disconnect', ()=>{
        console.log("Usuario desconectado")
    })
    socket.on('piezaMovida', datosJuego => {
        socket.broadcast.emit('movimiento', datosJuego)
    })
})