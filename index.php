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
        <img src="IMG/logo.png" alt="" class="imagen-inicio">
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
                <p>Estadisticas</p><i class="fas fa-chart-bar"></i>
            </button>
        </div>
    </div>
    <!-- Fin Hero -->

    <!-- SVG -->
    <svg height="150px" width="100%" id="svg" viewBox="0 0 1440 400" preserveAspectRatio=none
        xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150">
        <path
            d="M 0,400 C 0,400 0,133 0,133 C 68.70813397129191,134.31100478468898 137.41626794258383,135.62200956937798 247,133 C 356.58373205741617,130.37799043062202 507.0430622009568,123.82296650717704 621,124 C 734.9569377990432,124.17703349282296 812.4114832535886,131.08612440191388 889,143 C 965.5885167464114,154.91387559808612 1041.311004784689,171.8325358851675 1133,171 C 1224.688995215311,170.1674641148325 1332.3444976076555,151.58373205741626 1440,133 C 1440,133 1440,400 1440,400 Z"
            stroke="none" stroke-width="0" fill="#07375088" class="transition-all duration-300 ease-in-out delay-150">
        </path>
        <path
            d="M 0,400 C 0,400 0,266 0,266 C 73.82775119617222,279.87559808612446 147.65550239234443,293.75119617224885 259,297 C 370.34449760765557,300.24880382775115 519.2057416267944,292.87081339712915 620,294 C 720.7942583732056,295.12918660287085 773.5215311004783,304.7655502392344 867,302 C 960.4784688995217,299.2344497607656 1094.708133971292,284.066985645933 1197,276 C 1299.291866028708,267.933014354067 1369.645933014354,266.96650717703346 1440,266 C 1440,266 1440,400 1440,400 Z"
            stroke="none" stroke-width="0" fill="#073750ff" class="transition-all duration-300 ease-in-out delay-150">
        </path>
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
                <h1>Tus medallas</h1>
                <table class="tabla-medallas">
                    <tr>
                        <th id="col-imagen"></th>
                        <th id="col-jugadores">Medallas</th>
                    </tr>
                    <tr>
                        <td>
                            <div class="circulo"></div>
                        </td>
                        <td>Medalla1</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="circulo"></div>
                        </td>
                        <td>Medalla2</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="circulo"></div>
                        </td>
                        <td>Medalla3</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    </div>
    <!-- Fin Seccion tablas estadisticas -->


    <!-- SVG -->
    <svg height="150px" width="100%" id="svg" viewBox="0 0 1440 400" preserveAspectRatio=none
        xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150">
        <path
            d="M 0,400 C 0,400 0,133 0,133 C 123.31100478468898,126.36842105263158 246.62200956937795,119.73684210526315 334,120 C 421.37799043062205,120.26315789473685 472.82296650717706,127.42105263157893 547,125 C 621.1770334928229,122.57894736842107 718.086124401914,110.57894736842105 836,100 C 953.913875598086,89.42105263157895 1092.8325358851673,80.26315789473685 1197,86 C 1301.1674641148327,91.73684210526315 1370.5837320574165,112.36842105263158 1440,133 C 1440,133 1440,400 1440,400 Z"
            stroke="none" stroke-width="0" fill="#07375088" class="transition-all duration-300 ease-in-out delay-150"
            transform="rotate(-180 720 200)" id="path"></path>
        <path
            d="M 0,400 C 0,400 0,266 0,266 C 90.00956937799043,262.9856459330143 180.01913875598086,259.9712918660287 263,260 C 345.98086124401914,260.0287081339713 421.93301435406704,263.1004784688995 533,253 C 644.066985645933,242.8995215311005 790.2488038277512,219.62679425837325 905,226 C 1019.7511961722488,232.37320574162675 1103.0717703349283,268.39234449760767 1187,280 C 1270.9282296650717,291.60765550239233 1355.4641148325359,278.8038277511962 1440,266 C 1440,266 1440,400 1440,400 Z"
            stroke="none" stroke-width="0" fill="#073750ff" class="transition-all duration-300 ease-in-out delay-150"
            transform="rotate(-180 720 200)" id="path"></path>
    </svg>
    <!-- Fin SVG -->

    <!-- Opciones jugador -->
    <div class="div-wrapper5">

        <div class="contenedor-salas">

            <img src="IMG/OjoDePez.png" alt="">
            <div class="contenedor-opciones-juego">
                <a class="boton-salas"> Opciones de juego <i class="fas fa-angle-down"></i></a>
                <div class="opciones-juego-menu">
                    <a class="a3" href="Unirsetorneo/Buscartorneo.html">Buscar torneo</a>
                    <a class="a3" href="Unirsetorneo/VerTorneos.html">Ver partidos</a>
                </div>
            </div>
        </div>

        <div class="contenedor-entrenamiento">
            <img src="IMG/tutorial.png" alt="">
            <div class="contenedor-entrenamiento-menu">
                <a class="boton-salas"> Aprende a jugar <i class="fas fa-angle-down"></i></a>
                <div class="opciones-entrenamiento-menu">
                    <a href="https://www.youtube.com/watch?v=x4R2EPkYzZk" class="a4">Ver tutorial</a>
                    <a class="a4">Aprender a jugar</a>
                </div>
            </div>
        </div>

        <div class="contenedor-podcast">
            <img src="IMG/podcast.png" alt="">
            <a href="" class="boton-podcast">Escuchalas aqui!</a>
        </div>

    </div>
    <!-- Fin Opciones jugador -->


    <!-- SVG -->
    <div style="height: 150px; overflow: hidden;" id="svg"><svg viewBox="0 0 500 150" preserveAspectRatio="none"
            style="height: 100%; width: 100%;">
            <path d="M0.00,49.98 C115.97,165.28 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                style="stroke: none; fill: #073750;" id="path"></path>
        </svg></div>
    <!-- Fin SVG -->

    <!-- Seccion noticias -->
    <div class="div-wrapper3">
        <div class="noticias">
            <div class="div"><img src="IMG/noticia1.PNG" alt="">
                <h2>¡Copa del mundo 2021!</h2>
                <p class="autor-p">Nadja Wittmann</p>
            </div>
            <div class="div"><img src="IMG/noticia2.PNG" alt="">
                <h2>¡El joven campeon!</h2>
                <p class="autor-p">Frederic Friedel</p>
            </div>
            <div class="div"><img src="IMG/noticia3.PNG" alt="">
                <h2>¿Como se realizan las piezas?</h2>
                <p class="autor-p">Frederic Friedel</p>
            </div>
            <div class="div"><img src="IMG/noticia4.PNG" alt="">
                <h2>¡Feliz dia!</h2>
                <p class="autor-p">Chessbase</p>
            </div>
        </div>
    </div>
    <!-- Fin Seccion noticias -->

</body>

<!-- SVG -->
<div style="height: 90px; overflow: hidden; background: #073750;" id="svg"><svg viewBox="0 0 500 150"
        preserveAspectRatio="none" style="height: 100%; width: 100%;">
        <path d="M0.00,49.98 C115.97,165.28 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            style="stroke: none; fill: #173248;" id="path"></path>
    </svg></div>
<!-- Fin SVG -->

<!-- Footer -->
<footer>
    <div class="logo">
        <img src="IMG/logo.png" alt="">
    </div>
    <div class="sobre-nosotros">
        <h1>Sobre nosotros</h1>
        <p> Somos una empresa que se dedica a proporcionar juegos de calidad orientados a la temática de 8 bits , con el
            fin de que sean juegos competitivos pero a la misma vez divertidos para que nuestros clientes puedan revivir
            sus mejores momentos de juego. </p>
    </div>
    <div class="menu">
        <h1>Menu</h1>
        <ul>
            <li><a href="./HTML/sobrenosotros.html">Sobre Nosotros</a></li>
            <li><a href="">Contacto</a></li>
            <li><a href="">Jugar</a></li>
        </ul>
    </div>
</footer>
<!-- Fin Footer -->

</html>

<!--
                           -++-   -+-.==:               .-=:   -#-.:-:
                       :=-+****+: :=: :-.           :-.-=====- :-: ::.
                     -***********+-               .-====++=-===:
             .--   -*###*********+++-   ::.::   .========---==--=:   .:
           :+#.:*-#**##***+****+=+++++-  -+-.=:===========-=-------:   .:
            .+##=:*####****+++=-=+*+++++: -+++.-===========----------:   =-.
             --:   :**####=::...::-+**++++--:-= .-==-        .-------=-: .=#
         :--##=.    :###+:          -+*+++++- .::--            :----=-===:  --
       .+%%%%%%%+.:*##*:              -+++++++:--                :---------: .=-
     .+%%%%%%%%%%%%#*:     .:::::.      -+++++-       .-==-.       :--------.   -:
   .=-+%%%%%%%%%%%*:      =##+++++=.      -++-       -======-.       :----.       ..
 .=: -#%%%%%%%#%*:     .=######**#*+=:      -++:  .-+++++=====-.       :+=:    :-:  ..
   -#%%%#%%%%%*:     .+##=-########***+:      -++=+*###++=======-.       =#=.:+*---:
   :*%%%%#*#%%#-      -##**######**#****+:      -+++#%#++========-       =#+-===---:
    ::*%%%#%%%%%#-      -############=.-**+:      :++#*+++=====-       :#%#*+=---. . ..
    .=-:*%%%%%%%###-      -########=     -**+:      :++++++==-       :-+##+===-. ...:.
       =-:*%%%%%%##%*-      ::=-+=      .+****+:      :++++-       :====++==-. ....
        .=-:*%%%#%##%#*-              .+##******+:               :======*+-. .:.:
          .+-:*%%%#%%##*-.          .+#####*******+:           :========-:  ..:
         -#%#===*%%%%##*-+=...:.---+#*####===+******+:.......:=+=======:   .:
         .+##=.=-:*######*======-*#####**#=.++:=********+++++--+++===.   .:
          -- :--.=-:++####***#=.  :*#*:-*..==+*-.=*******++-.  .-+=.     .::
        -- -=.  --.=-:*%%%**++:     .-####+ =##---.=******+:        .==- :==:
       -  .=.   .=. .=-:*%%%##%*.   -*######=.+:  --.=*****+=.    .=++===:
            :-:-:      . :*%%##*:     -*####*:      : .=****+:     .=++=:
                           :++.         :-              .==:         .:

-->