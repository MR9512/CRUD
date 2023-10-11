<?php 
 class coreController{
    public function __construct(){
       require_once("models/generalesModel.php");  
       $generalesModel = new generalesModel();
       $this->roles = $generalesModel->getRoles();
    }
    
 }

?>