<?php

if (isset($_GET['file'])) {
    $path = 'wallpapers/' . $_GET['file'];
    if (is_file($path)) {
        header('Content-type: image/jpg');
        header('Content-Disposition: attachment');
        die(file_get_contents($path));
    } else {
    	die('Sorry, this file is missing. Hmmm.');
    }
}