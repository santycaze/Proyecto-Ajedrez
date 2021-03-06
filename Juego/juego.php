<!DOCTYPE html>
<html lang="es">

<head>
    <?php require_once '../Usuario/PHP/Sesion/logeado.php';?>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../CSS/estilo.css">
    <link rel="stylesheet" href="../CSS/ventanachess.css">

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script src="../Usuario/Usuario.js"></script>
    <script src="../JS/loader.js"></script>
    <script src="https://kit.fontawesome.com/1e193e3a23.js" crossorigin="anonymous"></script>

    <script defer src="http://localhost:3000/socket.io/socket.io.js"></script>
    <script defer src="src/JS/Modulos_Juego/confInicioJuego.js" type="module"></script>
    <script defer src="src/JS/juego.js" type="module"></script>
    <script src="src/JS/JConfig.js"></script>
    <script src="src/JS/ventanachess.js"></script>
</head>

<body>

<div class="contenedor-fondo">
        <img src="../IMG/close-up-blurry-chess-pieces.jpg" alt="">
    </div>
    <!--
    <div class="modal-wrapper">
        <div class="modal"><i class="fas fa-laugh-beam" id="carita"></i><h1 id="mensaje-modal">Ganaste!</h1><button>Volver al inicio</button></div>
    </div>
    -->
    <div class="div-wrapper-contenedortotal">

        <div class="div-wrapper-contenedortablero" id="tabla2">

        </div>
        <div class="div-wrapper-contenedorinfo">

            <div class="contenedor-jugadorestiempo">

                <div class="contenedor-jugador1">
                    <p id="Jugador1">
                        <?php echo $_SESSION['usuario']; ?>
                    </p>
                    <div id="icono-jugador1"><img src='<?php echo '../'.$_SESSION['foto']; ?>' id="foto"></img></div>
                    <p id="Tiempo-jugador1">--:--</p>
                </div>

                <div class="contenedor-jugador2">
                    <p id="Jugador2"></p>
                    <div id="icono-jugador2"></div>
                    <p id="Tiempo-jugador2">--:--</p>
                </div>

            </div>

            <div class="contenedor-tablachat">
                <table id="tablamov">

                </table>
                <a id="btn-rendirse">Rendirse</a>
                <a href="../index.php" id="btn-salir">Salir</a>
            </div>

        </div>

    </div>
</body>

</html>