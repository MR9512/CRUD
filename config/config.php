<?php 
   session_start();
   //Obtiene la ruta del directorio del script actual y lo almacena en la variable 
   $folderPath = dirname($_SERVER["SCRIPT_NAME"]); 
   //Obtiene la URL completa de la solicitud actual y lo almacena en la variable 
   $urlPath = $_SERVER["REQUEST_URI"];
   //Calcula la URL relativa y determina a donde corresponde la ruta específica después del nombre de dominio y la carpeta raíz
   $URL = substr($urlPath, strlen($folderPath));
   //Almacena la URL relativa en URL. Permitiendo que otros componentes accedan a esta URL para determinar la ruta solicitada por el usuario
   define("URL",$URL);
   //Define la constante que apunta a la URL base del sistema
   define("URLSYS","http://localhost/CRUD/");
   //Define un nombre personalizado para la sesión
   define("APP_SESSION_NAME","CRUD");
   //Establece la zona horaria predeterminada
   date_default_timezone_set("America/Mexico_City");
?>




