const BASE_DE_DATOS = require('mysql')

const io = require("socket.io")(3000, {
    cors: {
        origin: "http://localhost",
    }
});

let usuarios = new Array();
let jugadores = new Array();
let espectadores = new Array();
// io.to(id de socket que va a recivir el mensaje).emit('', var)
/*
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

io.on('connection', (socket) => {

    socket.on('conectado', (usuario) => {
        if (Object.keys(usuarios).length <= 2 && usuario != null) {
            usuarios[usuario] = socket.id
            console.log("nuevo jugador   --->  " + usuario)
            jugadores.push(usuario)
        } else if (Object.keys(usuarios).length > 2 && usuario != null) {
            usuarios[usuario] = socket.id
            console.log("nuevo espectador   --->  " + usuario)
            espectadores.push(usuario)
        }
        
        if (Object.keys(usuarios).length === 2) {
            for (let i = 0; i < 2; i++) {
                con.query(`Select nombreUsuario,iconoUsuario from Usuario where nombreUsuario = '${jugadores[i]}'`, function (err, datos) {
                    if (err) {
                        return console.error('error: ' + err.message);
                    }
                    io.emit('jugadorEncontrado', datos[0])
                })
            }

        }

    })

    socket.on('disconnect', () => {
        console.log("Usuario desconectado")
    })

    socket.on('piezaMovida', datosJuego => {
        socket.broadcast.emit('movimiento', datosJuego)
    })
})

/*
 * 
 * 
 * 
 * CONEXION CON BASE DE DATOS.
 * 
 * 
 * 
 * 
 */

let con = BASE_DE_DATOS.createConnection({
    host: '179.27.156.47',
    port: '33061',
    user: '8bittech',
    password: '8bittech8bittech',
    database: 'ajedrez'
})

con.connect(function (err) {
    if (err) {
        return console.error('error: ' + err.message);
    }
});