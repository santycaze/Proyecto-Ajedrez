<?php
class Servidor
{
    public function conexion()
    {
        //Puerto  - 33061
        $conexion = mysqli_connect("179.27.156.47", "8bittech", "8bittech8bittech", "ajedrez", "33061");
        if (!$conexion) {
            echo "Error al conectar con la Base de datos.";
            exit();
        } else {
            return $conexion;
        }
    }
    /*---------------------------------------------------------------------------------------------------------------------------------*/
    //
    /*---------------------------------------------------------------------------------------------------------------------------------*/
    public function datosJugador()
    {
        //nombreUsuario,nombre,mail,ci,apellidos,celular,nacimiento,tipoUsuario,iconoUsuario,institucion,añoCurso,contactoLiceo,nombreDirector,mailDirector
        $conn = $this->conexion();
        $json = array();
        $query = "CALL datosJugador()";
        $stmt = $conn->prepare($query);

        if ($stmt->execute()) {
            $stmt->store_result();
            $stmt->bind_result($nombreUsuario,$nombre,$mail,$ci,$apellidos,$celular,$nacimiento,$tipoUsuario,$iconoUsuario,$institucion,$aCurso,$contactoLiceo,$nombreDirector,$mailDirector);
            while ($stmt->fetch()) {
                $fila = array('nombreUsuario' => $nombreUsuario, 'nombre' => $nombre, 'mail' => $mail, 'ci' => $ci, 'apellidos' => $apellidos, 'celular' => $celular, 'nacimiento' => $nacimiento, 'tipoUsuario' => $tipoUsuario,'iconoUsuario'=>$iconoUsuario,'institucion'=>$institucion,'aCurso'=>$aCurso,'contactoLiceo'=>$contactoLiceo,'nombreDirector'=>$nombreDirector,'mailDirector'=>$mailDirector);
                $json[] = $fila;
            }
        }
        $stmt->close();
        return $json;
    }
    /*---------------------------------------------------------------------------------------------------------------------------------*/
    //
    /*---------------------------------------------------------------------------------------------------------------------------------*/
    public function datosPeriodista()
    {
        // idPeriodista,ci,nombreUsuario,mail,celular,Aprobado
        $conn = $this->conexion();
        $json = array();
        $query = "CALL datosPriodistas()";
        $sent = $conn->prepare($query);

        if ($sent->execute()) {
            $sent->store_result();
            $sent->bind_result($idPer, $ci, $nomUsuario, $email, $cel, $Apr);
            while ($sent->fetch()) {
                $fila = array('idPeriodista' => $idPer, 'ci' => $ci, 'nombreUsuario' => $nomUsuario, 'mail' => $email, 'celular' => $cel, 'Aprobado' => $Apr);
                $json[] = $fila;
            }
            $sent->close();
        }

        return $json;
    }
    /*---------------------------------------------------------------------------------------------------------------------------------*/
    //
    /*---------------------------------------------------------------------------------------------------------------------------------*/
    public function datosNoticia()
    {
        //idNoticia,titulo,nombreUsuario,contenido
        $conn = $this->conexion();
        $query = "CALL datosNoticias()";
        $stmt = $conn->prepare($query);

        if ($stmt->execute()) {
            $json = array();
            $stmt->store_result();
            $stmt->bind_result($idNoticia, $titulo, $nombreUsuario, $contenido);
            while ($stmt->fetch()) {
                $fila = array('idNoticia' => $idNoticia, 'titulo' => $titulo, 'nombreUsuario' => $nombreUsuario, 'contenido' => $contenido);
                $json[] = $fila;
            }
        }
        $stmt->close();
        return $json;
    }
    /*---------------------------------------------------------------------------------------------------------------------------------*/
    //
    /*---------------------------------------------------------------------------------------------------------------------------------*/
    public function Contraseñas($nombreUsuario,$nuevaPasswd)
    {
        //idNoticia,titulo,nombreUsuario,contenido
        $conn = $this->conexion();
        $query = "CALL cambiarContra(?,?)";
        $stmt = $conn->prepare($query);
        $stmt->bind_param("ss",$nombreUsuario,$nuevaPasswd);
        $stmt->execute();
        echo $conn->error;
        $stmt->close();
    }
    /*---------------------------------------------------------------------------------------------------------------------------------*/
    //
    /*---------------------------------------------------------------------------------------------------------------------------------*/
    public function Aprobar()
    {
        $conn = $this->conexion();
        $datos = array("idPeriodista" => $_POST['idP']);
        $query = "CALL Aprobar(?)";
        $stmt = $conn->prepare($query);
        $stmt->bind_param("i", $datos["idPeriodista"]);
        $stmt->execute();
        $stmt->close();
    }
    /*---------------------------------------------------------------------------------------------------------------------------------*/
    //
    /*---------------------------------------------------------------------------------------------------------------------------------*/
    public function eliminarPeriodistas()
    {
        $conn = $this->conexion();
        $datos = array("idPeriodista" => $_POST['idP']);
        $query = "CALL EliminarPeriodistas(?)";
        $stmt = $conn->prepare($query);
        $stmt->bind_param("i", $datos["idPeriodista"]);
        $stmt->execute();
        $stmt->close();
    }
    /*---------------------------------------------------------------------------------------------------------------------------------*/
    //
    /*---------------------------------------------------------------------------------------------------------------------------------*/
    public function eliminarJugador()
    {
        $conn = $this->conexion();
        $datos = array("usr" => $_POST['usr']);
        $query = "CALL EliminarJugador(?)";
        $stmt = $conn->prepare($query);
        $stmt->bind_param("s", $datos["usr"]);
        $stmt->execute();
        $stmt->close();
    }
    /*---------------------------------------------------------------------------------------------------------------------------------*/
    //
    /*---------------------------------------------------------------------------------------------------------------------------------*/
    public function crearTorneo($nombreTorneo,$codIng,$puntuacion,$fci,$ffi,$fct,$fft,$tiempoPart,$mp,$timepoMaxPart,$cantPartidas,$horarios,$tiempoMovimiento,$nomTrof,$numPartidas)
    {
        $conn = $this->conexion();
        $datos = array("nombreTorneo" => $nombreTorneo,"codigoIngreso" => $codIng,"puntuacion" => $puntuacion,"fechaComInscripciones" => $fci, "fechaFinInscripciones" => $ffi, "fechaComTorneo" => $fct, "fechaFinTorneo" => $fft, "tiempoPartida" => $tiempoPart, "maximoParticipantes" => $mp,  "tiempoMaxPartida" => $timepoMaxPart, "cantPartidas" => $cantPartidas, "horarios" => $horarios, "tiempoMovimiento" => $tiempoMovimiento, "nombreTrofeo" => $nomTrof,"numPartidas" => $numPartidas);
        $query = "CALL crearTorneo(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        $stmt = $conn->prepare($query);
        echo json_encode($datos);
        $stmt->bind_param("siisssssisisssi", $datos["nombreTorneo"], $datos["codigoIngreso"], $datos["puntuacion"], $datos["fechaComInscripciones"], $datos["fechaFinInscripciones"], $datos["fechaComTorneo"], $datos["fechaFinTorneo"], $datos["tiempoPartida"], $datos["maximoParticipantes"],$datos["tiempoMaxPartida"], $datos["cantPartidas"], $datos["horarios"], $datos["tiempoMovimiento"], $datos["nombreTrofeo"], $datos["numPartidas"]);
        $stmt->execute();
        $stmt->close();
        echo "Torneo creado.";
    }
    /*---------------------------------------------------------------------------------------------------------------------------------*/
    //
    /*---------------------------------------------------------------------------------------------------------------------------------*/
    function datosTorneo()
    {
        //nombreTorneo,fechaFinTorneo,maximoParticipantes,numPartidas,tiempoPartida,tiempoMovida,nombreTrofeo
        $conn = $this->conexion();
        $query = "CALL datosTorneo()";
        $stmt = $conn->prepare($query);
        $json = array();

        if ($stmt->execute()) {
            
            $stmt->store_result();
            $stmt->bind_result($nombreTorneo, $fechaFinTorneo, $maxParticipantes, $tiempoPartida,$numPartidas, $tiempoMaxPartida, $tiempoMovida,$nombreTrofeo);
            while ($stmt->fetch()) {
                $fila = array('nombreTorneo' => $nombreTorneo,'fechaFin' => $fechaFinTorneo, 'maxParticipantes' => $maxParticipantes, 'tiempoPartida' => $tiempoPartida, 'numPartidas' => $numPartidas, 'tiempoMaxPartida' => $tiempoMaxPartida, 'tiempoMovida' => $tiempoMovida, 'nombreTrofeo' => $nombreTrofeo);
                $json[] = $fila;
            }
        }
        $stmt->close();
        return $json;
    }
    /*---------------------------------------------------------------------------------------------------------------------------------*/
    //
    /*---------------------------------------------------------------------------------------------------------------------------------*/
    public function cambiarNombre($nomActual, $nuevoNom)
    {
        $conn = $this->conexion();
        $query = "CALL ajedrez.cambiarUsuario(?,?)";
        $stmt = $conn->prepare($query);
        $stmt->bind_param("ss", $nomActual, $nuevoNom);
        $stmt->execute();
        $stmt->close();
    }
    /*---------------------------------------------------------------------------------------------------------------------------------*/
    //
    /*---------------------------------------------------------------------------------------------------------------------------------*/
    function cambiarIcono($nombreActual,$iconoNuevo){
        $conn = $this->conexion();
        $query = "CALL ajedrez.cambiarIcono(?,?)";
        $stmt = $conn->prepare($query);
        $stmt->bind_param("ss", $nombreActual, $iconoNuevo);
        $stmt->execute();
        $stmt->close();
    }
    /*---------------------------------------------------------------------------------------------------------------------------------*/
    //
    /*---------------------------------------------------------------------------------------------------------------------------------*/
    function datosInstancias(){
                //nombreTorneo,fechaFinTorneo,maximoParticipantes,numPartidas,tiempoPartida,tiempoMovida,nombreTrofeo
                $conn = $this->conexion();
                $query = "CALL datosPartidos()";
                $stmt = $conn->prepare($query);
                $json = array();
        
                if ($stmt->execute()) {
                    
                    $stmt->store_result();
                    $stmt->bind_result($idPartido, $colorJugador1, $colorJugador2, $jugador1,$jugador2);
                    while ($stmt->fetch()) {
                        $fila = array('idPartido' => $idPartido,'colorJugador1' => $colorJugador1, 'colorJugador2' => $colorJugador2, 'jugador1' => $jugador1, 'jugador2' => $jugador2);
                        $json[] = $fila;
                    }
                }
                $stmt->close();
                return $json;
    }
    /*---------------------------------------------------------------------------------------------------------------------------------*/
    //
    /*---------------------------------------------------------------------------------------------------------------------------------*/
    function agregarInstancias($idPartido,$colorJugador1,$colorJugador2,$jugador1,$jugador2){
        $conn = $this->conexion();
        $query = "CALL crearPartido(?,?,?,?,?,?,?,?)";
        $stmt = $conn->prepare($query);
        $stmt->bind_param("ssssssss", $idPartido, $colorJugador1, $colorJugador2,null,null,null,$jugador1,$jugador2);
        $stmt->execute();
        $stmt->close();
    }

}