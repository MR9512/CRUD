<?php
class loginController
{
    public $loginModel;
    public $loginCSS;
    public $loginJS;
    
    public function __construct()
    {
        //Incluye el modelo de login
        require_once "models/loginModel.php";
        //Crea una instancia del modelo de login
        $this->loginModel = new loginModel();
        //Ruta del archivo CSS asociado a esta vista
        $this->loginCSS = "../assets/css/login.css";
        //Ruta del archivo JavaScript asociado a esta vista
        $this->loginJS = "assets/js/login.js";
    }

    //Acción para mostrar el formulario de registro
    public function registrar(){
        //Incluye los archivos de la plantilla
        require_once "views/templates/header.php";
        require_once "views/login/login.php";
        require_once "views/templates/footer.php";
    }

    //Acción para procesar el formulario de registro
    public function save(){
        //Llama al método del modelo para guardar el usuario en la base de datos
        $this->loginModel->saveUser($_POST); 
        //Crea un array con un mensaje indicando que el usuario se ha creado correctamente
        $retornar['mensaje'] ="Usuario creado correctamente";
        //Convierte el array a formato JSON y lo imprime como respuesta
        echo json_encode($retornar);  
    }

    //Acción para procesar el formulario de inicio de sesión
    public function ingresar()
    {
        //Obtiene los roles del modelo
        $resp = $this->loginModel->getRoles();
        //Verifica si se enviaron datos de usuario y contraseña
        if (isset($_POST["usuario"]) && isset($_POST["contrasena"])) {
            //Llama al método del modelo para validar el inicio de sesión
            $resp = $this->loginModel->validar($_POST);
            //Verifica si se encontró un usuario válido
            if (isset($resp["id_usuario"])) {
                //Inicia una sesión y almacena los datos del usuario
                session_start();
                $_SESSION = $resp;
                //Redirige al usuario a la página del CRUD
                header("Location:../usuarios/listado");
            }
        }
        // Incluye los archivos de la plantilla
        require_once "views/templates/header.php";
        require_once "views/login/login.php";
        require_once "views/templates/footer.php";
    }
}


