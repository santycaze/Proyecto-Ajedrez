<?php
session_start();
if (!isset($_SESSION["nombre"])) {
    echo 1;
}
?>