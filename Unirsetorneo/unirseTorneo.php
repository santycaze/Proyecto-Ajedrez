<?php
$idJugador = $_SESSION["idJugador"]

    $conn = $this->conexion();
    $query = "CALL unirseTorneo(?,?,?)";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("iii",$idJugadorTorneo, $idJugador, $idTorneo);
    $stmt->execute();
    $stmt->close();

?>