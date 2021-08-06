<?php
/*
Servidor
 */
set_time_limit(0);
$host = 'localhost';
$port = '3012';
$socket = socket_create(AF_INET, SOCK_STREAM, getprotobyname('tcp'));
socket_bind($socket, $host, $port) or die("Error vinculando socket con IP...");
socket_getsockname($socket, $socket_address, $socket_port);
echo socket_strerror(socket_last_error($socket));
socket_listen($socket);

$i = 0;
while (true) {
    $client[$i++] = socket_accept($socket);
    echo $client;
    $msg = socket_read($client[$i], 1024);
    echo $msg;
    $msg = "Hola" . $msg . "\n";
    socket_write($client[$i], $msg . "\n\r", 1024);
    socket_close($client[$i]);
}
socket_close($socket);

/*
Cliente
 */
$i = 0;

while ($i < 1) {
    $msg = " ";
    $socket = socket_create(AF_INET, SOCK_STREAM, 0) or die("No se pudo crear el socket...\n");
    $result = socket_connect($socket, $host, $port) or die("No se pudo conectar al server...\n");
    socket_write($socket, $msg, strlen($msg)) or die("No se pudo enviar datos al servidor...\n");

    $result = socket_read($socket, 1024) or die("No se pudo leer los datos del servidor...\n");
    echo $result . "\n";
    socket_close($socket);
    $i++;
}
