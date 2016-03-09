<?php

/* Database connection information */
include("mysql.php" );



/*
 * Local functions
 */

function fatal_error($sErrorMessage = '') {
    header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error');
    die($sErrorMessage);
}

/*
 * MySQL connection
 */
if (!$gaSql['link'] = mysql_pconnect($gaSql['server'], $gaSql['user'], $gaSql['password'])) {
    fatal_error('Could not open connection to server');
}

if (!mysql_select_db($gaSql['db'], $gaSql['link'])) {
    fatal_error('Could not select database ');
}

mysql_query('SET names utf8');



/*
 * SQL queries
 * Get data to display
 */

$id = $_POST["id_alumno"];
$matricula= $_POST["matricula"];
$apellido1 = $_POST["apellido1"];
$apellido2 = $_POST["apellido2"];
$nombre = $_POST["nombre"];
$nota_cliente = $_POST["nota_cliente"];
$nota_x = $_POST["nota_x"];

/* Consulta UPDATE */
$query = "UPDATE alumnos SET 
            matricula = '" . $matricula . "', 
			nombre = '" . $nombre . "', 
            apellido1 = '" . $apellido1 . "', 
            apellido2 = '" . $apellido2 . "', 
            nota_cliente = '" . $nota_cliente . "', 
            nota_x = '" . $nota_x . "'
            WHERE id_alumno = " . $id;
			
//mysql_query($query, $gaSql['link']) or fatal_error('MySQL Error: ' . mysql_errno());
/*En función del resultado correcto o no, mostraremos el mensaje que corresponda*/
$query_res = mysql_query($query);

// Comprobar el resultado
if (!$query_res) {
    $mensaje  = 'Error en la consulta: ' . mysql_error() . "\n";
    $estado = mysql_errno();
}
else
{
    $mensaje = "Actualización correcta";
    $estado = 0;
}
$resultado = array();
 $resultado[] = array(
      'mensaje' => $mensaje,
      'estado' => $estado
   );
echo json_encode($resultado);
?>
