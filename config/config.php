<?php
//Obtiene la ruta del directorio del script actual y lo almacena en la variable 
$folderPath = dirname($_SERVER["SCRIPT_NAME"]); 
//Obtiene la URL completa de la solicitud actual y lo almacena en la variable 
$urlPath = $_SERVER["REQUEST_URI"];
//Calcula la URL relativa y determina a donde corresponde la ruta específica después del nombre de dominio y la carpeta raíz
$url = substr($urlPath, strlen($folderPath));
//Almacena la URL relativa en URL. Permitiendo que otros componentes accedan a esta URL para determinar la ruta solicitada por el usuario
define("URL",$url);
//Establece la zona horaria predeterminada
date_default_timezone_set("America/Mexico_City");
//Define un nombre personalizado para la sesión
define("APP_SESSION_NAME","CRUD");
/*Establece una constante URL que contiene la URL relativa de la solicitud actual. 
 Esto es útil para que otros componentes como el enrutador, puedan analizar esta URL 
 y determinar qué controlador y acción se deben ejecutar en función de la solicitud del usuario. */
?>
