<?php
   //Se requiere el archivo de configuración para establecer la configuración de la aplicación
   require_once("config/config.php");
   //Se requiere el archivo del enrutador para manejar las solicitudes de la aplicación
   require_once("routers/router.php");
   //Se crea una nueva instancia del objeto Router
   $router = new Router();
   //Se ejecuta el método run() del enrutador para manejar la solicitud actual
   $router->run();
?>
