<?php
//Incluye el archivo de configuración 
require_once "config/config.php";
//Divide la URL actual en segmentos y los almacena en una variable
$url = explode('/',URL);
// Incluye el archivo que contiene la lógica del enrutador
require_once "routers/router.php";
//Crea una instancia de la clase router para manejar las rutas y controladores
$routers = new router();
//Inicia el proceso de enrutamiento y ejecuta el controlador y la acción en función de la URL solicitada
$routers->run();
?>

<!-- LINK DE SEGUIMIENTO: https://chat.openai.com/share/fc8ce9f3-5acf-4156-bb0e-3783403a686e -->