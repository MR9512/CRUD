<?php
//Encapsula la lógica de enrutamiento
class router{
    //Almacenaran el nombre del controlador y el método que se ejecutarán en función de la URL solicitada.
    private $controller;
    private $method;
      //Se llama automáticamente cuando se crea una instancia de la clase router para llamar a un metodo
      public function __construct(){
        //Llama automáticamente los estilos personalizados
        $this->errorCSS = "../assets/css/error.css";
        //Llama automáticamente el metodo matchRoute
        $this->matchRoute();
      }

      //Muestra una página de Error cuando no existe un controlador en el proyecto
      public function show404Error() {
        //Incluye el encabezado de la página
        require_once("views/templates/header.php");
        //Incluye la vista específica para el error 404
        require_once("views/error/404.php");
        //Incluye el pie de página
        require_once("views/templates/footer.php");
        //Detiene la ejecución del script
        exit;
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
              $this->method = "index";
          } else {
              //Si hay parámetros de consulta, utiliza el primer segmento como el nombre del método
              $this->method = $metodo[0];
          }
          //Forma el nombre completo del controlador añadiendo "Controller" al final
          $this->controller = $this->controller . "Controller";
           // Verifica si el archivo del controlador existe
        if (file_exists("Controllers/" . $this->controller . ".php")) {
            //Si existe, incluye el archivo del controlador correspondiente
            require_once "Controllers/" . $this->controller . ".php";
        } else {
            // Si el controlador no existe, muestra la página de error 404
            $this->show404Error();
        }
      }
      //Crea una instancia del controlador determinado y ejecuta el método correspondiente basado en la información del método matchRoute
      public function run(){
        //Crea una instancia del controlador correspondiente
        $controller = new $this->controller();
        // Verifica si el método existe en el controlador
        if (method_exists($controller, $this->method)) {
            //Obtiene el nombre del método a ejecutar desde la propiedad $this->method y lo guarda en una variable
            $method = $this->method;
            //Llama al método del controlador con el nombre obtenido
            $controller->$method();
        } else {
            // Si el método no existe, muestra la página de error 404
            $this->show404Error();
        }
    }
    
}

/*Se encarga de manejar el enrutamiento de solicitudes y controlar cuál controlador y método (acción) 
deben ejecutarse en función de la URL solicitada de lo contrario muestra una página de Error 404*/
?>