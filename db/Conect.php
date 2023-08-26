<?php
//encapsula la funcionalidad relacionada con la conexión a la base de datos
class Conect{
    //Establece la conexión a la base de datos MySQL
    public function Conexion(){
        //Se piden 4 parametros para establecer la conexión a la BD solicitada
        $con = mysqli_connect("localhost", "root", "", "crud");
           //Verifica si la conexión fue exitosa
           if(!$con){
              //Si la conexión falla, muestra un mensaje de error
              echo "Conexion fallida";
           }else{
              //Si la conexión es exitosa, devuelve el objeto de conexión
              return $con;
           }
    }
}

?>