<?php

error_reporting(E_ALL);
ini_set("display_errors", '1');
ini_set('error_reporting', '-1');

defined('ROOT') or define('ROOT', __DIR__ . '/../');

require __DIR__ . '/../config/main.php';
require __DIR__ . '/../app/App.php';

$first = new app\controllers\SiteController();

$first->actionIndex();
die();

?>

<!doctype html>
<html>
    <head>
        <title>Getting Started</title>
    </head>
    <body>
        <img src="http://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1Rkapwk7j6xEL5ThIeA7ReBLaaKTM5SRkZCeTgDn6uOyic" alt="" id="download-image" crossorigin="anonymous">
        <script src="dist/bundle.js"></script>
    </body>
</html>