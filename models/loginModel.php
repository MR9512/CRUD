<?php
class loginModel
{
   public $con;
   public $fecha;
    // Constructor de la clase
    public function __construct()
    {
        //Incluye el archivo de conexión a la base de datos
        require_once("db/Conect.php");
        //Crea una nueva instancia de la clase Conect para establecer la conexión
        $con = new Conect();
        //Establece la conexión y la guarda en la propiedad $this->con
        $this->con = $con->conexion();
        //Obtiene la fecha actual y la almacena en la propiedad $this->fecha
        $fecha = getdate();
        $this->fecha = $fecha['year']."-".$fecha['mon']."-".$fecha['mday'];
    }

     //Método para guardar un usuario en la base de datos
     public function saveUser($datos){
        //Construye la consulta SQL para insertar un nuevo usuario
        $query = "INSERT INTO usuarios(nombre,apellidos,correo,password,telefono,status,fecha_altaUsuario,id_rol) VALUES ('".$datos['nombre']."','".$datos['apellidos']."','".$datos['correo']."','".$datos['password']."','".$datos['telefono']."','1','".$this->fecha."','".$datos['id_rol']."')";
        //Ejecuta la consulta en la base de datos
        mysqli_query($this->con, $query);
        //Retorna verdadero para indicar que la operación fue exitosa
        return true;
    }

   //Método para validar el loggeo de un usuario en la base de datos
   public function validar($datos)
   {
       //Construye la consulta SQL para validar el usuario y la contraseña
       $query = 'SELECT * FROM usuarios INNER JOIN roles on roles.id_rol = usuarios.id_rol WHERE correo = "' . $datos['usuario'] . '" AND password = "' . $datos['contrasena'] . '" AND status = 1';
       //Ejecuta la consulta en la base de datos
       $respuesta = mysqli_query($this->con, $query);
       //Inicializa un array asociativo para almacenar los datos del usuario
       $data = array();
         //Verifica si se encontraron resultados en la consulta
         if (mysqli_num_rows($respuesta) > 0) {
           //Itera sobre los resultados y guarda los datos en el array $data
           while ($row = mysqli_fetch_assoc($respuesta)) {
               $data['id_usuario'] = $row['id_usuario'];
               $data['nombre_usuario'] = $row['nombre'];
               $data['id_rol'] = $row['id_rol'];
           }
         } else {
           //Si no se encontraron resultados, asigna un mensaje de error al array $data
           $data['error_usuario'] = "El usuario no existe";
         }
         //Retorna el array $data
         return $data;
   }

     //Método para obtener los roles desde la base de datos
     public function getRoles(){
        // Construye la consulta SQL para obtener todos los roles
        $query = 'SELECT * FROM roles';
        // Ejecuta la consulta en la base de datos
        $respuesta = mysqli_query($this->con, $query);
        // Inicializa un índice para el array y un array para almacenar los datos
        $i = 0;
        $data = array();

        // Itera sobre los resultados y guarda los datos en el array $data
        while($row = mysqli_fetch_assoc($respuesta)){
            $data['id_rol'][$i] = $row['id_rol'];
            $data['rol'][$i] = $row['rol'];
            $i++;
        }
        // Retorna el array $data con los roles
        return $data;
    }
}

