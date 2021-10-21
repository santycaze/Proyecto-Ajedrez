<!DOCTYPE html>
<html lang="en">
<head>

    <?php require_once '../Usuario/PHP/Sesion/logeado.php'; ?>
    <link rel="stylesheet" href="infotorneo.css">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://kit.fontawesome.com/1e193e3a23.js" crossorigin="anonymous"></script>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script src="Buscartorneo.js"></script>
    <script src="jugadorestorneo.js"></script>
    
</head>

<body>

    <div class="contenedor-fondo">
        <img src="../IMG/close-up-blurry-chess-pieces.jpg" alt="">
    </div>
    
    <div class="contenedor-total">

        <div class="contenedor-infotorneo">

            <div class="contenedor-izquierda">
                <div class="contenedornomico">
                    <img src="../IMG/Icono7.png" alt="">
                    <h1>joan gamper</h1>
                </div>
                <div class="datostorneo">
                    <h2>Inscripciones</h2>
                    <div class="continfo">
                        <div class="hora">
                            <h3>Inicio</h3>
                            <p id="iniInsc"> <i class="far fa-clock"></i> 11:00 </p>
                        </div>
                        <div class="hora">
                            <h3>Fin</h3>
                            <p> <i class="far fa-clock"></i> 11:00</p>
                        </div>
                    </div>
                    <h2>Torneo</h2>
                    <div class="continfo">
                        <div class="hora">
                            <h3>Inicio</h3>
                            <p> <i class="far fa-clock"></i> 11:00</p>
                        </div>
                        <div class="hora">
                            <h3>Fin</h3>
                            <p> <i class="far fa-clock"></i> 11:00</p>
                        </div>
                    </div>
                    <?php
            if ($logueado == '1') {
                ?>
                    <div class="botones">
                        <button id=unirse onclick="unirseTorneo()">Unirse</button>
                        
                        <button role='link' onclick="window.location.href ='../index.php'">Volver</button>
                    </div>
                <?php
            }else {
                ?>
                <div class="botones">
                    <button role='link' onclick="window.location.href ='../index.php'">Volver</button>
                </div>
            <?php
            }
            ?>

                </div>

                <?php
            if ($logueado == '1') {
                ?>
                <h3 style="color: white;">Tu proximo partido es: 21/10 14:00hs</h3>
                <div class="contenedor-vs" style="display: flex; justify-content: center; align-items: center;">
                    <div class="contenedor1">
                    <img src='../<?php echo $_SESSION['foto']; ?>' style="width: 100px;">
                        <p><?php echo $_SESSION['usuario']; ?></p>
                    </div>
                    <p>VS</p>
                    <div class="contenedor1">
                        <img src="../IMG/iconoPulga.png" alt="" style="width: 100px;">
                        <p>pulga</p>
                    </div>
                </div>
                <?php
            }
            ?>



           
            </div>


        </div>


        <div class="contenedor-jugadorestorneo">

            <div class="contenedor-titulo">
                <h1>Jugadores</h1>
                <p>3/15</p>
                <div class="tabla" id="Importar-jugadoresTorneo">
                    <div class="contenedorjugadores">

                    </div>
                </div>
                
            </div>

            

        </div>

    </div>













</body>

</html>