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
    public function Contraseñas()
    {
        //idNoticia,titulo,nombreUsuario,contenido
        $conn = $this->conexion();
        $query = "CALL Passwd()";
        $stmt = $conn->prepare($query);

        if ($stmt->execute()) {
            $json = array();
            $stmt->store_result();
            $stmt->bind_result($contraseña, $nombreUsuario);
            while ($stmt->fetch()) {
                $fila = array('contraseña' => $contraseña, 'nombreUsuario' => $nombreUsuario);
                $json[] = $fila;
            }
        }
        $stmt->close();
        return $json;
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
    public function crearTorneo()
    {
        $conn = $this->conexion();
        $datos = array("nombreTorneo" => $_POST['nombreTorneo'], "fechaComInscripciones" => $_POST['fci'], "fechaFinInscripciones" => $_POST['ffi'], "fechaComTorneo" => $_POST['fct'], "fechaFinTorneo" => $_POST['fft'], "maximoPartidas" => $_POST['mp'], "numPartidas" => $_POST['numPart'], "tiempoPartida" => $_POST['tiempoPart'], "tiempoMovimiento" => $_POST['tiempoMov'], "maxParticipantes" => $_POST['maxParticipantes'], "nombreTrofeo" => $_POST['nomTrofeo']);
        $query = "CALL crearTorneo(?,?,?,?,?,?,?,?,?,?,?)";
        $stmt = $conn->prepare($query);
        $stmt->bind_param("sddddittsi", $datos["nombreTorneo"], $datos["fechaComInscripciones"], $datos["fechaFinInscripciones"], $datos["fechaComTorneo"], $datos["fechaFinTorneo"], $datos["maximoParticipantes"], $datos["tiempoPartida"], $datos["tiempoMovimiento"], $datos["nombreTrofeo"], $datos["numPartidas"]);
        $stmt->execute();
        $stmt->close();
    }
    /*---------------------------------------------------------------------------------------------------------------------------------*/
    //
    /*---------------------------------------------------------------------------------------------------------------------------------*/
    public function datosTorneo()
    {
        //nombreTorneo,fechaFinTorneo,maximoParticipantes,numPartidas,tiempoPartida,tiempoMovida,nombreTrofeo
        $conn = $this->conexion();
        $query = "CALL datosTorneo()";
        $stmt = $conn->prepare($query);

        if ($stmt->execute()) {
            $json = array();
            $stmt->store_result();
            $stmt->bind_result($nombreTorneo, $fechaFinTorneo, $maxParticipantes, $numPartidas, $tiempoPartida, $tiempoMovida, $nombreTrofeo);
            while ($stmt->fetch()) {
                $fila = array('nombreTorneo' => $nombreTorneo, 'fechaFinTorneo' => $fechaFinTorneo, 'maxParticipantes' => $maxParticipantes, 'numPartidas' => $numPartidas, 'tiempoPartida' => $tiempoPartida, 'tiempoMovida' => $tiempoMovida, 'nombreTrofeo' => $nombreTrofeo);
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
    
    function cambiarIcono($nombreActual,$iconoNuevo){
        $conn = $this->conexion();
        $query = "CALL ajedrez.cambiarIcono(?,?)";
        $stmt = $conn->prepare($query);
        $stmt->bind_param("ss", $nombreActual, $iconoNuevo);
        $stmt->execute();
        $stmt->close();
    }
}
