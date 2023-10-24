<?php 

   require_once("config/config.php");
   require_once("router/router.php");

   $router = new router();
   $router->run();

?>