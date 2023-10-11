<?php
class homeController
{

    public function dashboard(){
        //Incluye los archivos de la plantilla
        require_once "views/templates/header.php";
        require_once "views/home/dashboard.php";
        require_once "views/templates/footer.php";
    }

}


