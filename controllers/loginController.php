<?php 
//La clase establece la base para el controlador relacionado con la página de inicio
class loginController{
    //Ejecuta un metodo en automatico
    public function __construct(){
        //Permite aplicar los estilos dependiendo el archivo seleccionado
        $this->bulmaCSS = "../assets/css/bulma.min.css"; 
        $this->estilosCSS = "../assets/css/estilos.css";
    }
    //Metodo que implementa la lógica para cargar y mostrar el contenido del panel de control.
    public function ingreso(){
        //Incluye el encabezado de la página
        require_once("views/templates/header.php");
        //Incluye la vista específica para el login
        require_once("views/login/login.php");
        //Incluye el pie de página
        require_once("views/templates/footer.php");
    }
}
?>
