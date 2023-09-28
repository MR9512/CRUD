<?php
//Incluye el archivo de inicio de sesion y su nombre
require_once "views/session/session_start.php";
//Divide la URL actual en segmentos y los almacena en una variable
require_once "routers/router.php";
//Crea una instancia de la clase router para manejar las rutas y controladores
$routers = new router();
//Inicia el proceso de enrutamiento y ejecuta el controlador y la acción en función de la URL solicitada
$routers->run();

?>

<!-- LINK DE SEGUIMIENTO: https://chat.openai.com/share/77c948c5-616e-4c06-af83-c7a24907e6d8-->