<?php

class Servidor 
{
    function conexion(){
        //Open a new connection to the MySQL server

        $mysqli = new mysqli('localhost','root','root','Ajedrez');

        //Output any connection error

        if ($mysqli->connect_error) {

            die('Error : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);

        }
    }
    /*---------------------------------------------------------------------------------------------------------------------------------*/
    //
    /*---------------------------------------------------------------------------------------------------------------------------------*/
    function datosJugador(){
        //institucion,añoCurso,nombreUsuario,nombreCompleto,ci,rankingJugador,logros
        $conn = $this->conexion();
        $JSON = new array();
        $query = "CALL datosJugador()";
        $stmt = $conn->prepare($query);

        if ($stmt->execute()) {

            $stmt->store_result($institucion,$añoCursivo,$nombreUsuario,$nombreCompleto,$ci,$rankELO,$logros);
            $stmt->bind_result();
                while ($stmt->fetch()) {
                    $fila = array('institucion' => $institucion,'añoCursivo' => $añoCursivo,'nombreUsuario' => $nombreUsuario,'nombreCompleto' => $nombreCompleto,'ci' => $ci,'rankELO' => $rankELO,'logros' => $logros);
                    $JSON[] = $fila;
                }
            }
            $stmt->close();
        return $JSON;
    }
    /*---------------------------------------------------------------------------------------------------------------------------------*/
    //
    /*---------------------------------------------------------------------------------------------------------------------------------*/
    function datosPeriodista(){
        // idPeriodista,ci,nombreUsuario,mail,celular,Aprobado
        $conn = $this->conexion();
        $query = "CALL datosJugador()";
        $stmt = $conn->prepare($query);

        if ($stmt->execute()) {

            $stmt->store_result($idPeriodista,$ci,$nombreUsuario,$mail,$celular,$Aprobado);
            $stmt->bind_result();
                while ($stmt->fetch()) {
                    $fila = array('idPeriodista' => $idPeriodista,'ci' => $ci,'nombreUsuario' => $nombreUsuario,'mail' => $mail,'celular' => $celular,'Aprobado' => $Aprobado);
                    $JSON[] = $fila;
                }
            }
            $stmt->close();
        return $JSON;
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

            $stmt->store_result($idNoticia,$titulo,$nombreUsuario,$contenido);
            $stmt->bind_result();
                while ($stmt->fetch()) {
                    $fila = array('idNoticia' => $idNoticia,'titulo' => $titulo,'nombreUsuario' => $nombreUsuario,'contenido' => $contenido);
                    $JSON[] = $fila;
                }
            }
            $stmt->close();
        return $JSON;
}
?> 