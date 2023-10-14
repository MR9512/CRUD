<?php
class homeController
{

    public function dashboard(){
        //Incluye los archivos de la plantilla
        require_once "Views/templates/header.php";
        require_once "Views/home/dashboard.php";
        require_once "Views/templates/footer.php";
    }

}


