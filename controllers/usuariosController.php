<?php 
//Importa el archivo coreController.php desde un directorio superior
require_once(__DIR__."/../core/coreController.php");
//Define la clase usuariosController que extiende de coreController
class usuariosController extends coreController{
    private $usuariosModel;
    private $generalesModel;
    private $rol;
    private $js;
    //Constructor de la clase
    public function __construct(){
        //Llama al constructor de la clase padre (coreController) para inicializaciones comunes
        parent::__construct();
        //Importa los modelos necesarios para las operaciones relacionadas con usuarios y roles
        require_once("models/usuariosModel.php");
        require_once("models/generalesModel.php");
        //Crea instancias de los modelos usuariosModel y generalesModel
        $this->usuariosModel = new usuariosModel();
        $this->generalesModel = new generalesModel();
        //Obtiene la lista de roles de usuario utilizando el modelo generalesModel y la asigna a la propiedad 'rol'
        $this->rol = $this->generalesModel->getRoles();
        //Asigna la ruta del archivo JavaScript 'listadoUsuario.js' a la propiedad 'js'
        $this->js = "assets/js/listadoUsuario.js";
    }
    //Método para mostrar el listado de usuarios
    public function listado(){
        //Obtiene la lista de usuarios utilizando el método getUsuarios() del modelo usuariosModel
        $respuesta = $this->usuariosModel->getUsuarios();
        //Incluye el encabezado de la página
        require_once("Views/templates/header.php");
        //Incluye la vista 'listado.php' que muestra la lista de usuarios
        require_once("Views/usuarios/listado.php");
        //Incluye el pie de página
        require_once("Views/templates/footer.php");
    }
    //Método para insertar un nuevo usuario
    public function insertarUsuario(){
        //Obtiene los datos del usuario desde $_POST y guarda el usuario utilizando el método saveUsuario() del modelo usuariosModel
        $respuesta = $this->usuariosModel->saveUsuario($_POST);
        //Muestra la lista de usuarios registrados
        $retornar["usuarios"] = $this->usuariosModel->getUsuarios();
        //Crea un array con un mensaje indicando que el usuario se ha creado correctamente
        $retornar['mensaje'] ="Usuario creado correctamente";
        //Convierte el array a formato JSON y lo imprime como respuesta
        echo json_encode($retornar);  
    }
    //Método para obtener detalles de un usuario específico
    public function getUsuario(){
        //Obtiene el ID del usuario desde $_POST y obtiene detalles del usuario utilizando el método getUsuario() del modelo usuariosModel
        $respuesta = $this->usuariosModel->getUsuario($_POST["id_usuario"]);
        //Obtiene la lista de roles de usuario utilizando el método getRoles() del modelo generalesModel
        $respuesta["listaUsuarios"] = $this->generalesModel->getRoles();
        //Convierte el array con detalles del usuario y la lista de roles a formato JSON y lo imprime como respuesta
        echo json_encode($respuesta);
    }
    //Método para actualizar a un usuario en específico
    public function updateUsuario(){
        //Establecer el valor de "status" en 1 (activo) en los datos del formulario
        $_POST["status"] = 1;
        //Llamar al método updateUsuario del modelo para actualizar el usuario en la base de datos
        $respuesta = $this->usuariosModel->updateUsuario($_POST);
        //Obtener todos los usuarios después de la actualización
        $resp["usuarios"] = $this->usuariosModel->getUsuarios();
        //Establecer la respuesta de éxito
        $resp["respuesta"] = 'Usuario modificado correctamente';
        //Obtener roles y estado de los usuarios activos
        $rol = $this->usuariosModel->getUsuarios($_POST['status']);
        $resp["usuarios"]["rol"] = $rol["rol"];
        $resp["usuarios"]["status"] = $rol["status"];
        //Obtener colores de estado de los usuarios activos
        $colorStatus = $this->usuariosModel->getUsuarios($_POST['status']);
        $resp["colorStatus"] = $rol["colorStatus"];
        //Convertir el array de respuesta a formato JSON y enviarlo como respuesta al cliente
        echo json_encode($resp);
    }
    //Método para eliminar un usuario
    public function deleteUsuario(){
        //Obtiene el ID del usuario a eliminar desde $_POST y elimina el usuario utilizando el método deleteUsuario() del modelo usuariosModel
        $respuesta = $this->usuariosModel->deleteUsuario($_POST["id_usuario"]);
        //Crea un array con un mensaje indicando que el usuario se ha eliminado correctamente
        $resp["respuesta"] = 'Usuario eliminado correctamente';
        //Convierte el array a formato JSON y lo imprime como respuesta
        echo json_encode($resp);
    }
}
?>
