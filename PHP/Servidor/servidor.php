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
        //institucion,añoCurso,nombreUsuario,nombreCompleto,ci,rankingJugador,logros
        $conn = $this->conexion();
        $json = array();
        $query = "CALL datosJugador()";
        $stmt = $conn->prepare($query);

        if ($stmt->execute()) {
            $stmt->store_result();
            $stmt->bind_result($idJugador, $institucion, $añoCursivo, $nombreUsuario, $nombreCompleto, $ci, $rankELO, $logros);
            while ($stmt->fetch()) {
                $fila = array('idJugador' => $idJugador, 'institucion' => $institucion, 'añoCursivo' => $añoCursivo, 'nombreUsuario' => $nombreUsuario, 'nombreCompleto' => $nombreCompleto, 'ci' => $ci, 'rankELO' => $rankELO, 'logros' => $logros);
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
        $datos = array("idJugador" => $_POST['idJ']);
        $query = "CALL EliminarJugador(?)";
        $stmt = $conn->prepare($query);
        $stmt->bind_param("i", $datos["idJugador"]);
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
<<<<<<< HEAD
            $stmt->bind_result($nombreTorneo, $fechaFinTorneo, $maxParticipantes, $tiempoPartida,$numPartidas, $tiempoMaxPartida, $tiempoMovida,$nombreTrofeo);
            while ($stmt->fetch()) {
                $fila = array('nombreTorneo' => $nombreTorneo,'fechaFin' => $fechaFinTorneo, 'maxParticipantes' => $maxParticipantes, 'tiempoPartida' => $tiempoPartida, 'numPartidas' => $numPartidas, 'tiempoMaxPartida' => $tiempoMaxPartida, 'tiempoMovida' => $tiempoMovida, 'nombreTrofeo' => $nombreTrofeo);
=======
            $stmt->bind_result($nombreTorneo, $fechaFinTorneo, $maxParticipantes, $maxPartidas, $numPartidas, $tiempoPartida, $tiempoMovida, $nombreTrofeo);
            while ($stmt->fetch()) {
                $fila = array('nombreTorneo' => $nombreTorneo, 'fechaFinTorneo' => $fechaFinTorneo, 'maxParticipantes' => $maxParticipantes, 'maxPartidas' => $maxPartidas, 'numPartidas' => $numPartidas, 'tiempoPartida' => $tiempoPartida, 'tiempoMovida' => $tiempoMovida, 'nombreTrofeo' => $nombreTrofeo);
>>>>>>> 90be1e71fb7cbf2a82549335b093961afa9dc6c4
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
}
