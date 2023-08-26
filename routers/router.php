<?php
//Encapsula la lógica de enrutamiento
class router{
    //Almacenaran el nombre del controlador y el método que se ejecutarán en función de la URL solicitada.
    private $controller;
    private $method;
      //Se llama automáticamente cuando se crea una instancia de la clase router para llamar a un metodo
      public function __construct(){
        $this->matchRoute();
      }
      //Analiza la URL para extraer el nombre del controlador y el método a partir de la URL solicitada
      public function matchRoute(){
          //Divide la URL en partes utilizando '/' como separador
          $url = explode("/", URL);
          //El primer segmento después del dominio generalmente representa el controlador
          $this->controller = $url[1];
          //Divide el segundo segmento en caso de que contenga parámetros de consulta (por ejemplo, ?parametro=valor)
          $metodo = explode("?", $url[2]);
          //Verifica si no hay parámetros de consulta en la URL
          if ($url[2] == "") {
              // Si no hay parámetros de consulta, usa "dashboard" como el método por defecto
              $this->method = "dashboard";
          } else {
              //Si hay parámetros de consulta, utiliza el primer segmento como el nombre del método
              $this->method = $metodo[0];
          }
          //Forma el nombre completo del controlador añadiendo "Controller" al final
          $this->controller = $this->controller . "Controller";
          //Incluye el archivo del controlador correspondiente
          require_once("Controllers/" . $this->controller . ".php");
      }
      //Crea una instancia del controlador determinado y ejecuta el método correspondiente basado en la información del método matchRoute
      public function run(){
        //Crea una instancia del controlador correspondiente
        $controller = new $this->controller();
        //Obtiene el nombre del método a ejecutar desde la propiedad $this->method
        $metodo = $this->method;
        //Llama al método del controlador con el nombre obtenido
        $controller->$metodo();
    }
    
}

/*Se encarga de manejar el enrutamiento de solicitudes y controlar cuál controlador y método (acción) 
deben ejecutarse en función de la URL solicitada */
?>