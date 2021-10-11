<!DOCTYPE html>
<html lang="en">

<head>
    <?php
require_once 'Usuario/PHP/Sesion/logeado.php';
?>
    <!-- Scripts -->

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>

    <script src="./JS/loader.js"></script>
    <script src="./Usuario/Usuario.js"></script>
    <script src="./JS/functions.js"></script>
    <script src="https://kit.fontawesome.com/1e193e3a23.js" crossorigin="anonymous"></script>
    <!-- Fin Scripts -->

    <!-- Links -->
    <link rel="shortcut icon" href="./IMG/logo.png" type="image/x-icon">
    <link rel="stylesheet" href="CSS/estilo.css">
    <link rel="stylesheet" href="CSS/OpcionesUsuarios.css">
    <link rel="stylesheet" href="CSS/VerPerfil.css">
    <link rel="stylesheet" href="CSS/loginYregister.css">
    <!-- Fin Links -->

    <!-- Metas -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv=»Cache-Control» content=»no-cache» />
    <!-- Fin Metas -->

    <!-- Titulo -->
    <title>8-Bit Chess</title>
    <!-- Fin Titulo -->

</head>

<body>
    <!-- Responsive -->
    <div class="body-responsive">
        <div class="contenedor-general-responsive">
            <div class="contenedor-portada-responsive">
                <img src="IMG/logo.png" alt="">
                <h1>8-Bit Chess</h1>
            </div>

            <div class="contenedor-menu-responsive">
                <a onclick="llamarlogin()" class="a5"> <i class="fas fa-sign-in-alt"></i> Log in</a>
                <a href="" class="a5"> <i class="fas fa-sign-in-alt"></i> Register</a>
                <a href="" class="a5"> <i class="fas fa-user-alt"></i> Perfil</a>
                <a onclick="llamarajedrez()" class="a5"> <i class="fas fa-chess-knight"></i> Jugar</a>
                <a href="" class="a5"> <i class="fas fa-chart-bar"></i> Estadisticas</a>
                <a href="" class="a5"> <i class="fas fa-exclamation"></i> Noticias</a>
            </div>
        </div>
    </div>
    <!-- Fin responsive -->

    <!-- Loader -->
    <div class="loader-wrapper">
        <div class="loader"><img src="./IMG/CaballoBlanco.png" alt="">
        </div>
    </div>
    <!-- Fin Loader -->

    <!-- Carga Dinamica -->
    <div id="verperfil"></div>
    <div id="edicion"></div>
    <div id="tabla"></div>
    <div id="login"></div>
    <!-- Fin Carga Dinamica -->

    <!-- Login / Opciones -->
    <div class="usuario">
    <div class="usuario-menu">
            <a class="a2" id="mod" onclick="Modificar()">Modificar perfil</a>
            <a class="a2" id="opcAdmin" onclick="opcAdmin()">Opc. Admin</a>
            <form id='cerrarSesion' method='post' action='Usuario/PHP/Sesion/cerrarSesion.php' role='form'>
            <button class="a2" id="cerrarsesion" type='submit'>Cerrar sesion</a>
            </form>
        </div>
        <button onclick="llamarlogin()" id="botonLogIn">
            <?php
                if ($logueado == '1') {
                ?>
                <div id="iconoUsr"><img src='<?php echo $_SESSION['foto']; ?>' id="foto"></img></div>
                <script>
                $('#botonLogIn').prop('disabled','true')
                if (sessionStorage.getItem('tipoUsr') != 3) {
                    $('#opcAdmin').hide()
                }
                </script>
                <p id="nick"><?php echo $_SESSION['usuario']; ?></p>
                <?php
            } else {
                ?>
                        <div id="iconoUsr"><i class="fas fa-user" id="foto"></i></div>
                <p id="nick">Log in</p>
                <script>$('.usuario-menu').hide()</script>
                <?php
            }
?>

        </button>
    </div>
    <!-- Fin Login / Opciones -->

    <!-- Hero -->
    <div class=" contenedor-inicio">
        <img src="./IMG/icON-2.png" alt="" class="imagen-inicio">
        <h1>Juega Ajedrez Online</h1>
        <h2>8-Bit Chess</h2>
        <div class="contenedor-botones-inicio">
        <?php
                if ($logueado == '1') {
                ?>
                <button onclick="llamarajedrez()" class="boton-jugar"><i class="fas fa-chess-knight"></i><p>Jugar</p></button>
                <?php
            } else {
                ?>
                <button onclick="llamarlogin()" class="boton-jugar"><i class="fas fa-chess-knight"></i><p>Jugar</p></button>
                <?php
            }
            ?>
            <button class="boton-estadisticas">
                <p>Entrenar</p><i class="fas fa-dumbbell"></i>
            </button>
        </div>
    </div>
    <!-- Fin Hero -->

    <!-- SVG -->
  
       
    </svg>
    <!-- Fin SVG -->


    <!-- Seccion tablas estadisticas -->
    <div class="div-wrapper2">
        <div class="contenedor-tabla">
            <h1>Mejores jugadores</h1>
            <table class="tabla-jugadores">
                <tr>
                    <th id="col-imagen"></th>
                    <th id="col-jugadores">Jugadores</th>
                </tr>
            </table>
        </div>

        <div class="Tabla">
            <div class="contenedor-tabla">
                <h1>Ultimas medallas</h1>
                <table class="tabla-medallas">
                    <tr>
                        <th id="col-imagen"></th>
                        <th id="col-jugadores">Medallas</th>
                    </tr>
                    <tr>
                        <td>
                            <div class="circulo"> <i class="fas fa-bolt"></i> </div>
                        </td>
                        <td>Partida Flash</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="circulo1"> <i class="fas fa-fire"></i> </div>
                        </td>
                        <td>En Racha</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="circulo2"> <i class="fas fa-crown"></i> </div>
                        </td>
                        <td>Intachable</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="circulo3"> <i class="fas fa-laugh-beam"></i> </div>
                        </td>
                        <td>Amistoso</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    </div>
    <!-- Fin Seccion tablas estadisticas -->


    <!-- SVG -->
    <!-- Fin SVG -->

    <!-- Opciones jugador -->
    <div class="div-wrapper5">

        <div class="contenedor-salas">

            <img src="IMG/OjoDePez.png" alt="">
            <div class="contenedor-opciones-juego">
                <a href="Unirsetorneo/Buscartorneo.html" class="boton-salas" > Buscar torneo </a>

            </div>
        </div>

        <div class="contenedor-entrenamiento">
            <img src="IMG/tutorial.png" alt="">
            <div class="contenedor-entrenamiento-menu">
                <a href="https://www.youtube.com/watch?v=x4R2EPkYzZk" class="boton-salas"> Ver tutorial</a>
                
            </div>
        </div>

        <div class="contenedor-podcast">
            <img src="IMG/podcast.png" alt="">
            <a href="" class="boton-podcast">Escuchalas aqui!</a>
        </div>

    </div>
    <!-- Fin Opciones jugador -->


    <!-- SVG -->
    <!-- Fin SVG -->

    <!-- Seccion noticias -->
    <div class="div-wrapper3">
        <div class="noticias">
            <div class="div">
                <a href="https://es.chessbase.com/post/copa-del-mundo-ronda-04-partida-1-" target="_blank" class="boton-noticia"><i class="fas fa-search"></i></a>
                <div class="contenedor-img-noticia">
                <img src="IMG/noticia1.PNG" alt="">
                </div>
                <h2>¡Copa del mundo 2021!</h2>
                <p class="autor-p">Nadja Wittmann</p>
            </div>
            <div class="div">
            <a href="https://es.chessbase.com/post/freddy-ha-derrotado-a-un-gran-maestro" target="_blank" class="boton-noticia"><i class="fas fa-search"></i></a>
            <div class="contenedor-img-noticia">
                <img src="IMG/noticia2.PNG" alt="">
            </div>
                <h2>¡El joven campeon!</h2>
                <p class="autor-p">Frederic Friedel</p>
            </div>
            <div class="div">
            <a href="https://es.chessbase.com/post/how-championship-chess-pieces-are-made-esp" target="_blank" class="boton-noticia"><i class="fas fa-search"></i></a>
            <div class="contenedor-img-noticia">
                <img src="IMG/noticia3.PNG" alt="">
            </div>
                <h2>¿Como se realizan las piezas?</h2>
                <p class="autor-p">Frederic Friedel</p>
            </div>
            <div class="div">
            <a href="https://es.chessbase.com/post/20-julio-dia-internacional-del-ajedrez" target="_blank" class="boton-noticia"><i class="fas fa-search"></i></a>
            <div class="contenedor-img-noticia">
                <img src="IMG/noticia4.PNG" alt="">
        </div>
                <h2>¡Feliz dia!</h2>
                <p class="autor-p">Chessbase</p>
            </div>
        </div>
    </div>
    <!-- Fin Seccion noticias -->

</body>

<!-- SVG -->
<!-- Fin SVG -->

<!-- Footer -->
<footer>
   <p>Copyright © 2021 8Bit-Tech. All rights reserved.</p>
</footer>
<!-- Fin Footer -->

</html>
