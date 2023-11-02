  //Cuando se hace clic en un elemento con la clase "ver"
  $(document).on("click",".ver", function(event){
    //Obtiene el atributo "data-usuario" del elemento clickeado
    id_usuario = $(this).data("usuario");
    //Crea un objeto para configurar la solicitud AJAX
    var obj = {};
    obj.url = "getUsuario"; //URL a la que se enviará la solicitud AJAX
    obj.data = {id_usuario:id_usuario}; //Datos que se enviarán con la solicitud
    obj.type = "POST"; //Método de la solicitud (en este caso, POST)
    obj.accion = "getUsuario"; //Acción que se realizará en el servidor
    peticionAjax(obj); //Realiza la solicitud AJAX usando la configuración del objeto
    $("#infoModal").modal("show"); //Muestra un modal con información al usuario
  });
  //Cuando se hace clic en un elemento con la clase "editar"
  $(document).on("click",".editar", function(event){
    //Obtiene el atributo "data-usuario" del elemento clickeado
    id_usuario = $(this).data("usuario");
    //Crea un objeto para configurar la solicitud AJAX
    var obj = {};
    obj.url = "getUsuario"; //URL a la que se enviará la solicitud AJAX
    obj.data = {id_usuario:id_usuario}; //Datos que se enviarán con la solicitud
    obj.type = "POST"; //Método de la solicitud (en este caso, POST)
    obj.accion = "updateUsuario"; //Acción que se realizará en el servidor
    peticionAjax(obj); //Realiza la solicitud AJAX usando la configuración del objeto
    $("#updateModal").modal("show"); //Muestra un modal de actualización al usuario
  });

  //Cuando se hace clic en un elemento con la clase "eliminar"
$(document).on("click", ".eliminar", function() {
  id_usuario = $(this).data("usuario");   //Obtiene el valor del atributo "data-usuario" del elemento clickeado
  var obj = {}; //Crea un objeto para almacenar los datos de la solicitud AJAX
  obj.id_usuario = id_usuario; //Asigna el valor de id_usuario al objeto
  obj.url = "deleteUsuario"; //Especifica la URL a la que se enviará la solicitud AJAX
  obj.data = {id_usuario: id_usuario}; //Datos que se enviarán con la solicitud, en este caso, el id_usuario
  obj.type = "POST"; //Método de la solicitud (en este caso, POST)
  obj.accion = "deleteUsuario"; //Acción que se realizará en el servidor (eliminar usuario)
  peticionAjax(obj);  //Llama a la función peticionAjax y pasa el objeto como parámetro para realizar la solicitud AJAX
});

  //Cuando se envía el formulario con el id "formulario"
$("#formulario").on("submit",function(){
    event.preventDefault(); //Previene el comportamiento por defecto del formulario (recargar la página)
    //Verifica si el campo de nombre de usuario está vacío
    if($(".nombreUsuario").val() == ""){
      $(".error_nombreUsuario").show(); //Muestra un mensaje de error para el campo de nombre de usuario
   }else{
     $(".error_nombreUsuario").hide(); //Oculta el mensaje de error para el campo de nombre de usuario
   }
   //Verifica si el campo de apellidos de usuario está vacío
   if($(".apellidosUsuario").val() == ""){
     $(".error_apellidosUsuario").show(); //Muestra un mensaje de error para el campo de apellidos de usuario
   }else{
     $(".error_apellidosUsuario").hide(); //Oculta el mensaje de error para el campo de apellidos de usuario
   }
   //Verifica si el campo de correo de usuario está vacío
   if($(".correoUsuario").val() == ""){
    $(".error_correoUsuario").show(); //Muestra un mensaje de error para el campo de correo de usuario
  }else{
    $(".error_correoUsuario").hide(); //Oculta el mensaje de error para el campo de correo de usuario
  }
   //Verifica si el campo de contraseña de usuario está vacío
   if($(".passwordUsuario").val() == ""){
     $(".error_passwordUsuario").show(); //Muestra un mensaje de error para el campo de contraseña de usuario
   }else{
     $(".error_passwordUsuario").hide(); //Oculta el mensaje de error para el campo de contraseña de usuario
   }
   //Verifica si el campo de teléfono de usuario está vacío
   if($(".telefonoUsuario").val() == ""){
     $(".error_telefonoUsuario").show(); //Muestra un mensaje de error para el campo de teléfono de usuario
   }else{
     $(".error_telefonoUsuario").hide(); //Oculta el mensaje de error para el campo de teléfono de usuario
   }
   //Verifica si el campo de rol de usuario está vacío
   if($(".id_rol").val() == ""){
     $(".error_rolUsuario").show(); //Muestra un mensaje de error para el campo de rol de usuario
   }else{
     $(".error_rolUsuario").hide(); //Oculta el mensaje de error para el campo de rol de usuario
   }
   //Si alguno de los campos requeridos está vacío, no permite enviar el formulario y retorna false
   if($(".nombreUsuario").val() == null || $(".apellidosUsuario").val() == null || $(".correoUsuario").val() == null || $(".passwordUsuario").val() == null || $(".telefonoUsuario").val() == null || $(".id_rol").val() == null){
    return false;
   }
  //Serializa los datos del formulario con el id "formulario"
  var formulario = $("#formulario").serialize();
  //Crea un objeto para configurar la solicitud AJAX
  var obj = {};
  obj.url = "insertarUsuario"; //URL a la que se enviará la solicitud AJAX (para insertar un usuario)
  obj.data = formulario; //Datos serializados del formulario que se enviarán con la solicitud
  obj.type = "POST"; //Método de la solicitud (en este caso, POST)
  obj.accion = "insertarUsuario"; //Acción que se realizará en el servidor (insertar un usuario)
  peticionAjax(obj); //Realiza la solicitud AJAX usando la configuración del objeto
  });

 //Cuando se envía el formulario con el id "actualizarFormulario"
$("#actualizarFormulario").on("submit", function(event) {
  event.preventDefault();
  var formulario = $("#actualizarFormulario").serialize();
  $.ajax({
    url: 'updateUsuario',
    type: 'post',
    data: formulario,
    dataType: "json",
    success: function(response) {
           //Inicializa una variable HTML
           var html = "";
           //Obtiene los datos de usuarios de la respuesta AJAX
           var usuarios = response.usuarios;
           //Itera a través de los datos de usuarios y construye una tabla HTML
           $.each(usuarios.id_usuario, function(key, dato) {
             //Construye una fila de tabla para cada usuario en los datos recibidos
             html += '<tr class="usuario_' + dato + '">'; // Inicia la fila de la tabla con una clase específica para cada usuario
             html += '<td>' + usuarios.nombre[key] + '</td>'; // Agrega la celda para el nombre del usuario
             html += '<td>' + usuarios.apellidos[key] + '</td>'; // Agrega la celda para los apellidos del usuario
             html += '<td>' + usuarios.rol[key] + '</td>'; // Agrega la celda para el rol del usuario
             html += '<td class="' + usuarios.colorStatus[key] + '">' + usuarios.nombreStatus[key] + '</td>'; // Agrega la celda para el estado del usuario con una clase específica
             html += '<td width="8%">'; // Celda para los iconos de acciones con un ancho específico
             //Agrega iconos para ver, editar y eliminar usuarios, cada uno con su clase específica y atributo de datos para el ID del usuario
             html += '<i class="bi bi-eye ver ver_' + usuarios.id_usuario[key] + '" data-usuario="' + usuarios.id_usuario[key] + '"></i>&nbsp;&nbsp;'; // Icono para ver usuario
             html += '<i class="bi bi-pencil editar editar_' + usuarios.id_usuario[key] + '" data-usuario="' + usuarios.id_usuario[key] + '"></i>&nbsp;&nbsp;'; // Icono para editar usuario
             html += '<i class="bi bi-trash eliminar eliminar_' + usuarios.id_usuario[key] + '" data-usuario="' + usuarios.id_usuario[key] + '"></i>&nbsp;&nbsp;'; // Icono para eliminar usuario
             html += '</td>'; // Cierra la celda de acciones
             html += '</tr>'; // Cierra la fila de la tabla
           });
      $(".tableUsuarios").html(html); // Agrega la nueva fila a la tabla
      // Cierra el modal de actualización
      $("#updateModal").modal("hide");
      // Actualiza el contenido del sistema con el mensaje de respuesta del servidor
      $(".contenidoSistema").html(response.respuesta);
      // Muestra un modal con el mensaje del sistema
      $("#mensajeSistema").modal("show");
      
    },
    error: function(xhr, status) {
      // Maneja errores si la solicitud falla
    }
  });
});


  //Definición de la función peticionAjax que toma un objeto de configuración como parámetro
function peticionAjax(obj) {
  //Realiza una solicitud AJAX usando jQuery
  $.ajax({
    url: obj.url, //URL a la que se enviará la solicitud AJAX
    type: obj.type, //Método de la solicitud (en este caso, POST)
    data: obj.data, //Datos que se enviarán con la solicitud
    dataType: "json", //Tipo de datos que se esperan recibir en la respuesta (en este caso, JSON)
    success: function(res) {
      //Cuando la solicitud es exitosa, se ejecuta esta función
      switch (obj.accion) {

        case "insertarUsuario":
            //Inicializa una variable HTML
            var html = "";
            //Obtiene los datos de usuarios de la respuesta AJAX
            var usuarios = res.usuarios;
            //Itera a través de los datos de usuarios y construye una tabla HTML
            $.each(usuarios.id_usuario, function(key, dato) {
              //Construye una fila de tabla para cada usuario en los datos recibidos
              html += '<tr class="usuario_' + dato + '">'; // Inicia la fila de la tabla con una clase específica para cada usuario
              html += '<td>' + usuarios.nombre[key] + '</td>'; // Agrega la celda para el nombre del usuario
              html += '<td>' + usuarios.apellidos[key] + '</td>'; // Agrega la celda para los apellidos del usuario
              html += '<td>' + usuarios.rol[key] + '</td>'; // Agrega la celda para el rol del usuario
              html += '<td class="' + usuarios.colorStatus[key] + '">' + usuarios.nombreStatus[key] + '</td>'; // Agrega la celda para el estado del usuario con una clase específica
              html += '<td width="8%">'; // Celda para los iconos de acciones con un ancho específico
              //Agrega iconos para ver, editar y eliminar usuarios, cada uno con su clase específica y atributo de datos para el ID del usuario
              html += '<i class="bi bi-eye ver ver_' + usuarios.id_usuario[key] + '" data-usuario="' + usuarios.id_usuario[key] + '"></i>&nbsp;&nbsp;'; // Icono para ver usuario
              html += '<i class="bi bi-pencil editar editar_' + usuarios.id_usuario[key] + '" data-usuario="' + usuarios.id_usuario[key] + '"></i>&nbsp;&nbsp;'; // Icono para editar usuario
              html += '<i class="bi bi-trash eliminar eliminar_' + usuarios.id_usuario[key] + '" data-usuario="' + usuarios.id_usuario[key] + '"></i>&nbsp;&nbsp;'; // Icono para eliminar usuario
              html += '</td>'; // Cierra la celda de acciones
              html += '</tr>'; // Cierra la fila de la tabla
            });
            //Actualiza el contenido de la tabla con la nueva estructura HTML
            $(".tableUsuarios").html(html);
            //Oculta el modal con el ID "exampleModal"
            $("#exampleModal").modal("hide");
            //Actualiza el contenido del sistema con el mensaje de respuesta del servidor
            $(".contenidoSistema").html(res.mensaje);
            //Muestra un modal con el mensaje del sistema
            $("#mensajeSistema").modal("show");
            break;

            case "getUsuario":
              // Actualiza los valores de los campos de visualización con la información del usuario obtenida de la respuesta del servidor
              $(".verNombreUsuario").val(res.nombre); //Establece el valor del campo "verNombreUsuario" con el valor de "res.nombre"
              $(".verApellidosUsuario").val(res.apellidos); //Establece el valor del campo "verApellidosUsuario" con el valor de "res.apellidos"
              $(".verCorreoUsuario").val(res.correo); //Establece el valor del campo "verCorreoUsuario" con el valor de "res.correo"
              $(".verContrasenaUsuario").val(res.password); //Establece el valor del campo "verContrasenaUsuario" con el valor de "res.password"
              $(".verTelefonoUsuario").val(res.telefono); //Establece el valor del campo "verTelefonoUsuario" con el valor de "res.telefono"
              $(".verRolUsuario").val(res.rol); //Establece el valor del campo "verRolUsuario" con el valor de "res.rol"
              $(".verFechaUsuario").val(res.fecha_altaUsuario); //Establece el valor del campo "verFechaUsuario" con el valor de "res.fecha_altaUsuario"
            break;

            case "updateUsuario":
              //Variables para manejar las opciones seleccionadas en los selectores de estado y rol
              var statusActivo = '';
              var statusInactivo = '';
              //Verifica el estado del usuario y selecciona la opción correspondiente en el selector de estado
              if (res.status == 'Activo') {
                var statusActivo = 'selected';
              }
              if (res.status == 'Inactivo') {
                var statusInactivo = 'selected';
              }
              //Construye el selector de estado con las opciones "Activo" e "Inactivo"
              var selectStatus = "";
              selectStatus += '<select class="form-select" name="editarStatusUsuario" aria-label="Default select example">';
              selectStatus += '<option value="1" ' + statusActivo + '>Activo</option>';
              selectStatus += '<option value="0" ' + statusInactivo + '>Inactivo</option>';
              selectStatus += '</select>';
              //Construye el selector de rol basado en los datos recibidos del servidor
              var selectRol = "";
              selectRol += '<select class="form-select" name="editarRolUsuario" aria-label="Default select example">';
              var crearRol = res.listaUsuarios;
              //Itera a través de los datos de roles y construye las opciones del selector de rol
              $.each(crearRol.id_rol, function (key, dato) {
                var selected = "";
                //Verifica si el rol actual es el mismo que el del usuario y lo marca como seleccionado
                if (dato == res.id_rol) {
                  selected = "selected";
                }
                //Agrega la opción del selector de rol con el nombre del rol y su ID como valor
                selectRol += '<option value="' + dato + '" ' + selected + '>' + res.listaUsuarios.nombreRol[key] + '</option>';
              });
              selectRol += '</select>';
              //Llena los campos de entrada con los datos del usuario recibidos del servidor
              $(".editarId_usuario").val(res.id_usuario);
              $(".editarNombreUsuario").val(res.nombre);
              $(".editarApellidosUsuario").val(res.apellidos);
              $(".editarCorreoUsuario").val(res.correo);
              $(".editarContrasenaUsuario").val(res.password);
              $(".editarTelefonoUsuario").val(res.telefono);
              //Llena los selectores de estado y rol con las opciones construidas previamente
              $(".editarRol").html(selectRol);
              $(".editarStatusUsuario").html(selectStatus);
              //Llena el campo de fecha de alta del usuario con la fecha recibida del servidor
              $(".editarFechaUsuario").val(res.fecha_altaUsuario);
              break;

              case "deleteUsuario":
              //Oculta el elemento del usuario específico en la interfaz utilizando su ID
              $(".usuario_" + obj.id_usuario).hide();
              //Actualiza el contenido del sistema con el mensaje de respuesta del servidor
              $(".contenidoSistema").html(res.respuesta);
              //Muestra un modal con un mensaje del sistema
              $("#mensajeSistema").modal("show");
              break;
            
      }
    },
      error: function(xhr, status){
      
      }
  });
}