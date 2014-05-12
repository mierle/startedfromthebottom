<?php

if (isset($_GET['file'])) {
    $path = 'download/' . $_GET['file'];
    if (is_file($path)) {
        header('Content-type: image/jpg');
        header('Content-Disposition: attachment;filename=startedfromthebottom-' . $_GET['file']);
        die(file_get_contents($path));
    } else {
    	die('Sorry, this file is missing. Hmmm.');
    }
}
