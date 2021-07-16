<?PHP
$ico = $_POST['ico'];
$jugador1 = $_POST['j1'];
$llamarajedrez = '



    <div class="div-wrapper-juego">

    <div class= "contenedor-div-wrapper-juego">


    <div id="tabla2"></div>

    <div class="contenido">
    <div class="jugador">
        <div class="circulo-tablero1">
            <div class="circulo-tablero"><img src="'.$ico.'" alt=""></div>
            <p>'.$jugador1.'</p>
        </div>
        
        <h2>VS</h2>
        <div class="circulo-tablero2">
        <div class="circulo-tablero"><img src="IMG/icono2.png" alt=""></div>
            <p>Jugador 2</p>
        </div>
    </div>
    <div class="tabla-movimientos">
        <table>
            <tr>
                <th> Ficha</th>
                <th>Movimiento</th>
            </tr>
            <tr>
                <td>
                    Peon
                </td>
                <td>C 4</td>
            </tr>
            
        </table>
    </div>
    <button onclick="cerrar()">Cerrar</button>
    </div>
    </div>
   
    </div>';

    echo $llamarajedrez;
    return $llamarajedrez;


    ?>