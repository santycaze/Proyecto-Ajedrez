const io = require("socket.io")(3000, {
    cors: {
        origin: "http://localhost",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
      }
});

io.on('connection', (socket) => {
    console.log('[NUEVO] Usuario Conectado --> '+socket.id);
    socket.emit('message', "Hola mundo")
    socket.on('disconnect', ()=>{
        console.log("Usuario desconectado")
    })
})