<?php
     include "conexion.php"
    
     while($row = $result->fetch_array())
     {
     $rows[] = $row;
     }
    ?>