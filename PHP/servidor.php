<?php

class Servidor 
{
    function conexion(){
        if (!$conexion = mysqli_connect("localhost", "root", "Manogamerpro17", "ajedrez")) {
            echo "Error al conectar con la Base de datos.";
            exit();
        } else {
            return $conexion;
        }
    }
    /*---------------------------------------------------------------------------------------------------------------------------------*/
    //
    /*---------------------------------------------------------------------------------------------------------------------------------*/
    function datosJugador(){
        //institucion,añoCurso,nombreUsuario,nombreCompleto,ci,rankingJugador,logros
        $conn = $this->conexion();
        $json = array();
        $query = "CALL datosJugador()";
        $stmt = $conn->prepare($query);

        if ($stmt->execute()) {
            $stmt->store_result();
            $stmt->bind_result($institucion,$añoCursivo,$nombreUsuario,$nombreCompleto,$ci,$rankELO,$logros);
                while ($stmt->fetch()) {
                    $fila = array('institucion' => $institucion,'añoCursivo' => $añoCursivo,'nombreUsuario' => $nombreUsuario,'nombreCompleto' => $nombreCompleto,'ci' => $ci,'rankELO' => $rankELO,'logros' => $logros);
                    $json[] = $fila;
                }
            }
            $stmt->close();
        return $json;
    }
    /*---------------------------------------------------------------------------------------------------------------------------------*/
    //
    /*---------------------------------------------------------------------------------------------------------------------------------*/
    function datosPeriodista(){
        // idPeriodista,ci,nombreUsuario,mail,celular,Aprobado
        $conn = $this->conexion();
        $json = array();
        $query = "CALL datosPriodistas()";
        $sent = $conn->prepare($query);

        if ($sent->execute()) {
            $sent->store_result();
            $sent->bind_result($idPer,$ci,$nomUsuario,$email,$cel,$Apr);
                while ($sent->fetch()) {
                    $fila = array('idPeriodista' => $idPer,'ci' => $ci,'nombreUsuario' => $nomUsuario,'mail' => $email,'celular' => $cel,'Aprobado' => $Apr);
                    $json[] = $fila;
                }
                $sent->close();
            }

        return $json;
    }
    /*---------------------------------------------------------------------------------------------------------------------------------*/
    //
    /*---------------------------------------------------------------------------------------------------------------------------------*/
    function datosNoticia()
    {
        //idNoticia,titulo,nombreUsuario,contenido
        $conn = $this->conexion();
        $query = "CALL datosNoticias()";
        $stmt = $conn->prepare($query);

        if ($stmt->execute()) {
            $json = array();
            $stmt->store_result();
            $stmt->bind_result($idNoticia,$titulo,$nombreUsuario,$contenido);
                while ($stmt->fetch()) {
                    $fila = array('idNoticia' => $idNoticia,'titulo' => $titulo,'nombreUsuario' => $nombreUsuario,'contenido' => $contenido);
                    $json[] = $fila;
                }
            }
            $stmt->close();
        return $json;
    }
    /*---------------------------------------------------------------------------------------------------------------------------------*/
    //
    /*---------------------------------------------------------------------------------------------------------------------------------*/
    function Contraseñas()
    {
        //idNoticia,titulo,nombreUsuario,contenido
        $conn = $this->conexion();
        $query = "CALL Passwd()";
        $stmt = $conn->prepare($query);

        if ($stmt->execute()) {
            $json = array();
            $stmt->store_result();
            $stmt->bind_result($contraseña,$nombreUsuario);
                while ($stmt->fetch()) {
                    $fila = array('contraseña' => $contraseña,'nombreUsuario' => $nombreUsuario);
                    $json[] = $fila;
                }
            }
            $stmt->close();
        return $json;
    }
    /*---------------------------------------------------------------------------------------------------------------------------------*/
    //
    /*---------------------------------------------------------------------------------------------------------------------------------*/
    function Aprobar()
    {
        $conn = $this->conexion();
        $datos = array("idUsuario" => $_POST['idU']);
        $query = "CALL Aprobar(?)";
        $stmt = $conn->prepare($query);
        $stmt->bind_param("i", $datos["aprobado"]);
        $stmt->execute();
        $stmt->close();
    }
}
?> 