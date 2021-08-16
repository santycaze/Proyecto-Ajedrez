const io = require("socket.io")(3000, {
    cors: {
        origin: "http://192.168.1.6",
      }
});

io.on('connection', (socket) => {
    console.log('[NUEVO] Usuario Conectado --> '+socket.id);
    socket.on('disconnect', ()=>{
        console.log("Usuario desconectado")
    })
    socket.on('piezaMovida', datosJuego => {
        io.emit('movimiento', datosJuego)
    })
})