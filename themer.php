<?php

$themeClass = '';
if (isset($_GET['theme']) && $_GET['theme'] == 'dark') { 
  $themeClass = 'dark-theme';
}


$themeToggle = ($themeClass == 'dark-theme') ? 'light' : 'dark';
?>

//* snippit - use this if the other two do not work *// 

<?php
$themeStyleSheet = 'light-theme.css';
if (isset($_GET['theme']) && $_GET['theme'] == 'dark') {
  $themeStyleSheet = 'dark-theme.css';
}

$themeToggle = ($themeStyleSheet == 'dark-theme.css') ? 'light' : 'dark';
?>
