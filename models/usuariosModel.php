<?php 
//Definición de la clase usuariosModel
class usuariosModel{
    private $con; //Variable para la conexión a la base de datos
    private $fecha; //Variable para almacenar la fecha actual
    //Constructor de la clase
    public function __construct(){
        require_once("db/Conect.php"); //Incluye el archivo de conexión a la base de datos
        $con = new Conect(); //Crea una nueva instancia de la clase de conexión
        $this->con = $con->conexion(); // Establece la conexión a la base de datos
        $fecha = getdate(); //Obtiene la fecha actual
        $this->fecha = $fecha['year'] . "-" . $fecha['mon'] . "-" . $fecha['mday'] . " " . date("H:i:s"); // Formatea la fecha
    }
    //Método para obtener usuarios con opciones de filtrado
    public function getUsuarios($condicion = null, $rol = null){
        $query = "SELECT *, IF(usuarios.status = 1,'Activo','Inactivo') as nombreStatus, IF(usuarios.status = 1,'bg-success','bg-warning') as colorStatus FROM usuarios INNER JOIN roles on usuarios.id_rol = roles.id_rol"; // Consulta para obtener usuarios y sus roles
        if($condicion != null || $rol != null){
           $query.= " WHERE"; //Agrega la cláusula WHERE si se especifican condiciones de filtro
        }
        if($condicion == 1){
            $query.=" status = 1"; //Filtra por usuarios activos
        }
        if($rol != null){
           if($condicion == 1){
             $query.= " AND"; //Agrega la cláusula AND si ya existe una condición
           }
           $query.= " roles.id_rol = $rol"; //Filtra por un rol específico
        }
        $res = mysqli_query($this->con, $query); //Ejecuta la consulta en la base de datos
        if(mysqli_num_rows($res) > 0){
            $i = 0;
           while($row = mysqli_fetch_assoc($res)){
               // Almacena los datos de los usuarios en un array asociativo
               $data["rol"][$i] = $row["rol"];
               $data["id_usuario"][$i] = $row["id_usuario"];
               $data["nombre"][$i] = $row["nombre"];
               $data["apellidos"][$i] = $row["apellidos"];
               $data["correo"][$i] = $row["correo"];
               $data["password"][$i] = $row["password"];
               $data["telefono"][$i] = $row["telefono"];
               $data["status"][$i] = $row["status"];
               $data["fecha_altaUsuario"][$i] = $this->fecha; 
               $data['nombreStatus'][$i] = $row['nombreStatus'];
               $data['colorStatus'][$i] = $row['colorStatus'];
               $i++;
           }
           $data["valor"] = 1; //Indica éxito en la operación
        } else {
            $data["error"] = "No se encontraron registros"; //Mensaje de error si no se encontraron registros
            $data["valor"] = 0; //Indica fracaso en la operación
        }
        return $data; //Retorna el array de datos
    }
    //Método para obtener un usuario por su ID
    public function getUsuario($id){
       $query = "SELECT * , IF(usuarios.status = 1,'Activo','Inactivo') as estatus, usuarios.nombre as nombreAdministrador,
       roles.rol as rolNombre 
       FROM usuarios INNER JOIN roles ON usuarios.id_rol = roles.id_rol
       WHERE id_usuario = $id"; //Consulta para obtener un usuario por su ID
       $res = mysqli_query($this->con, $query); //Ejecuta la consulta en la base de datos
       if(mysqli_num_rows($res) > 0){
        while($row = mysqli_fetch_assoc($res)){
            //Almacena los datos del usuario en un array asociativo
            $data["rol"] = $row["rol"];
            $data["id_usuario"] = $row["id_usuario"];
            $data["nombre"] = $row["nombre"];
            $data["apellidos"] = $row["apellidos"];
            $data["correo"] = $row["correo"];
            $data["password"] = $row["password"];
            $data["telefono"] = $row["telefono"];
            $data["status"] = $row["status"];
            $data['id_rol'] = $row['id_rol'];
            $data["fecha_altaUsuario"] = $row["fecha_altaUsuario"];
        }
       }else{
         $data["error"] = "No se encontraron registros"; //Mensaje de error si no se encontraron registros
       }
       return $data; //Retorna el array de datos
    }
    //Método para guardar un nuevo usuario en la base de datos
    public function saveUsuario($datos)
    {
        //Consulta para insertar un nuevo usuario en la base de datos
        $query = "INSERT INTO usuarios(nombre,apellidos,correo,password,telefono,status,fecha_altaUsuario, id_rol) VALUES ('" . $datos['nombreUsuario'] . "','" . $datos['apellidosUsuario'] . "','" . $datos['correoUsuario'] . "','" . $datos['passwordUsuario'] . "','" . $datos['telefonoUsuario'] . "',1,'" . $this->fecha . "','" . $datos['id_rol']. "')";
        mysqli_query($this->con, $query); //Ejecuta la consulta en la base de datos
        return true; //Indica éxito en la operación
    }
    //Método para actualizar un usuario existente en la base de datos
    public function updateUsuario($datos){
        //Consulta para actualizar un usuario en la base de datos
        $query = "UPDATE usuarios SET nombre = '".$datos["editarNombreUsuario"]."', apellidos = '".$datos["editarApellidosUsuario"]."', correo = '".$datos["editarCorreoUsuario"]."',password = '".$datos["editarContrasenaUsuario"]."',telefono = '".$datos["editarTelefonoUsuario"]."',status = '".$datos["editarStatusUsuario"]."', fecha_altaUsuario = '".$this->fecha."', id_rol = '".$datos["editarRolUsuario"]."' WHERE id_usuario =".$datos["id_usuario"];
        mysqli_query($this->con, $query); //Ejecuta la consulta en la base de datos
        return true; //Indica éxito en la operación
    }
    //Método para eliminar un usuario de la base de datos por su ID
    public function deleteUsuario($id_usuario){
        $query = "DELETE FROM usuarios WHERE id_usuario = $id_usuario"; //Consulta para eliminar un usuario por su ID
        mysqli_query($this->con, $query); //Ejecuta la consulta en la base de datos
        return true; //Indica éxito en la operación
    }
}
?>
