<?php
// Define la clase generalesModel
class generalesModel{
    // Constructor de la clase
    public function __construct(){
        //Importa el archivo de conexión a la base de datos (Conect.php)
        require_once("DB/Conect.php");
        // Crea una nueva instancia de la clase Conect para establecer la conexión a la base de datos
        $con = new Conect();
        $this->con = $con -> Conexion();
    }

    //Método para obtener la lista de roles de usuario
    public function getRoles(){
        //Consulta SQL para seleccionar todos los roles de la tabla 'roles'
        $query = "SELECT * FROM roles";
        //Ejecuta la consulta en la base de datos
        $res = mysqli_query($this->con, $query);
        //Inicializa un array para almacenar los datos de los roles
        $data = array();
        //Verifica si hay resultados en la consulta
        if(mysqli_num_rows($res) > 0){
            $i = 0;
            //Recorre los resultados y guarda los datos en el array $data
            while($row = mysqli_fetch_assoc($res)){
                $data["id_rol"][$i] = $row["id_rol"];
                $data["nombreRol"][$i] = $row["rol"];
                $i++;
            }
        }
        //Devuelve el array con los datos de los roles
        return $data;
    }

    //Método para obtener la lista de usuarios
    public function getUsuarios(){
        //Consulta SQL para seleccionar todos los usuarios de la tabla 'usuarios'
        $query = "SELECT * FROM usuarios";
        //Ejecuta la consulta en la base de datos
        $res = mysqli_query($this->con, $query);
        //Inicializa un array para almacenar los datos de los usuarios
        $data = array();
        //Verifica si hay resultados en la consulta
        if(mysqli_num_rows($res) > 0){
            $i = 0;
            // Recorre los resultados y guarda los datos en el array $data
            while($row = mysqli_fetch_assoc($res)){
                $data["id_usuario"][$i] = $row["id_usuario"];
                $data["nombre_usuario"][$i] = $row["nombre"]." ".$row["apellidos"];
                $i++;
            }
        }
        //Devuelve el array con los datos de los usuarios
        return $data;
    }
}
?>
