<?php 
//Define la clase coreController
class coreController{
    public $roles;
    //Constructor de la clase
    public function __construct(){
        //Importa el modelo generalesModel.php necesario para obtener roles
        require_once("models/generalesModel.php");  
        //Crea una instancia del modelo generalesModel y obtiene la lista de roles de usuario
        $generalesModel = new generalesModel();
        $this->roles = $generalesModel->getRoles();
    }
}
?>
