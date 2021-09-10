const BASE_DE_DATOS = require('mysql')

const io = require("socket.io")(3000, {
    cors: {
        origin: "http://localhost",
    }
});

let usuarios = new Array();
let jugadores = new Array();
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
            if (!jugadores.includes(usuario)) {
                console.log(`nuevo jugador          --->  ${usuario}`)
                jugadores.push(usuario)
            } else {
                console.log(`jugador reconectado    --->  ${usuario}`)
            }
        }
        console.log(usuarios)
    })

    socket.on('buscarJugador', () => {

        var multiplo = jugadores.length % 2

        if (multiplo === 0) {
            //defino el color de cada jugador
            colorJugador1 = Math.floor(Math.random() * (1 - 0) + 0)
            var colorJugador2
            if (colorJugador1 === 0) {
                colorJugador2 = 1
            } else {
                colorJugador2 = 0;
            }
            console.log(`Se ha iniciado un partido ---> Jugador 1 :  ${jugadores[0]} | color: ${colorJugador1}  || jugador 2 :  ${jugadores[1]}  | color: ${colorJugador2}`)

            //creo el partido
            con.query(`call crearPartido('${colorJugador1}','${colorJugador2}',null,null,null,'${jugadores[0]}','${jugadores[1]}')`, function (err, datos) {
                if (err) {
                    return console.error('error: ' + err.message);
                }                 
                io.to(usuarios[jugadores[0]]).emit('jugadorEncontrado', datos[0],colorJugador1)
                io.to(usuarios[jugadores[1]]).emit('jugadorEncontrado', datos[0],colorJugador2)
            })
            //
        }

    })

    socket.on('disconnect', () => {
        usuarios.forEach(result => {
            if (usuarios.includes(result)) {
                usuarios.splice(result)
            }
        });
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
    console.log(`Conectado`)
});