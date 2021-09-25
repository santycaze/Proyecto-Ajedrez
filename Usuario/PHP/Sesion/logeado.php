<?php

    session_start();
    $logueado = '0';

    if (isset($_SESSION['usuario'])) {
        $logueado = '1';
    }