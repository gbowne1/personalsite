<?php

//start the session
session_start();

// Check if the uer is not logged in, then redirect to login page

if (!isset($_SESSION["userid"]) || $_SESSION["userid"] !== true) {
    header("location:login.php");
    exit;
}
?>