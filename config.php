<?php
define('DBSERVER', 'localhost');
define('DBUSERNAME', 'root'); // Database serverdefine('DBUSERNAME', 'root'); // Database username
define('DBPASSWORD', ''); // Database password
define('DBNAME', 'demo'); // Database name

/* connect to MySQL database */

$db = mysqli_connect(DBSERVER, DBUSERNAME, DBPASSWORD, DBNAME);

// Check db connection

if($db === false)
{
    die("Error: connection error. " . mysqli_connect_error());
}
?>

