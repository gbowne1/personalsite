<?php

//start the session

session_start();

// if the user is already logged in then redirect to

if (isset($_SESSION["userid"]) && $_SESSION["userid"] === true) {
    header("location: welcome.php");
    exit;
}
?>