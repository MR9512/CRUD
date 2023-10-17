$(document).ready(function(){
  //Cuando se hace clic en un elemento con la clase "ver"
  $(".ver").click(function(){
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
  $(".editar").click(function(){
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
  $(".eliminar").click(function(){
    //Obtiene el atributo "data-usuario" del elemento clickeado
    id_usuario = $(this).data("usuario");
    //Crea un objeto con el id del usuario, URL y otros datos para configurar la solicitud AJAX
    var obj = {};
    obj.id_usuario = id_usuario; //Id del usuario a ser eliminado
    obj.url = "deleteUsuario"; //URL a la que se enviará la solicitud AJAX
    obj.data = {id_usuario:id_usuario}; //Datos que se enviarán con la solicitud
    obj.type = "POST"; //Método de la solicitud (en este caso, POST)
    obj.accion = "deleteUsuario"; //Acción que se realizará en el servidor
    peticionAjax(obj); //Realiza la solicitud AJAX usando la configuración del objeto
  });

  // Cuando se envía el formulario con el id "formulario"
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
$("#actualizarFormulario").on("submit", function(){
  event.preventDefault(); //Previene el comportamiento por defecto del formulario (recargar la página)
  //Serializa los datos del formulario con el id "actualizarFormulario"
  var formulario = $("#actualizarFormulario").serialize();
  //Realiza una solicitud AJAX usando jQuery
  $.ajax({
    url: 'updateUsuario', //URL a la que se enviará la solicitud AJAX (para actualizar un usuario)
    type: 'post', //Método de la solicitud (en este caso, POST)
    data: formulario, //Datos serializados del formulario que se enviarán con la solicitud
    dataType: "json", //Tipo de datos que se esperan recibir en la respuesta (en este caso, JSON)
    success: function(response) {
      //Cuando la solicitud es exitosa, se ejecuta esta función
      $("#updateModal").modal("hide"); //Oculta el modal de actualización
      $(".contenidoSistema").html(response.respuesta); //Actualiza el contenido del sistema con la respuesta del servidor
      $("#mensajeSistema").modal("show"); //Muestra un modal con el mensaje del sistema
    }
  });
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
      switch(obj.accion) {
            case "insertarUsuario":
              var html = "";
              var usuarios = res.usuarios;
              html += '<select name="id_rol" name="id_rol" class="form-control id_rol" placeholder="Rol:">';
              $.each(usuarios.id_usuario, function(key, dato){
                html += ' <option value="'+dato+'">'+usuarios.nombre[key]+'</option>';
              });
              html += '</select>';
              $(".tableUsuarios").html(html);
              $("#exampleModal").modal("hide"); //Oculta el modal de ejemplo
              $(".contenidoSistema").html(res.mensaje); //Actualiza el contenido del sistema con el mensaje del servidor
              $("#mensajeSistema").modal("show"); //Muestra un modal con el mensaje del sistema
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
              var statusActivo = ''; //Inicializa una variable para indicar el estado 'Activo' del usuario
              var statusInactivo = ''; //Inicializa una variable para indicar el estado 'Inactivo' del usuario
              if(res.status == 'Activo'){
                  var statusActivo = 'selected'; //Si el estado del usuario es 'Activo', marca 'selected' para la opción 'Activo'
              }
              if(res.status == 'Inactivo'){
                  var statusInactivo = 'selected'; //Si el estado del usuario es 'Inactivo', marca 'selected' para la opción 'Inactivo'
              }
              var selectStatus = ""; //Inicializa una cadena para almacenar el selector de estado del usuario
              selectStatus += '<select class="form-select" name="editarStatusUsuario" aria-label="Default select example">'; //Agrega la apertura del tag select al selector
              selectStatus += '<option value="1" '+statusActivo+'>Activo</option>'; //Agrega la opción 'Activo' al selector, marcándola como seleccionada si el estado es 'Activo'
              selectStatus += '<option value="0" '+statusInactivo+'>Inactivo</option>'; //Agrega la opción 'Inactivo' al selector, marcándola como seleccionada si el estado es 'Inactivo'
              selectStatus += '</select>'; //Agrega el cierre del tag select al selector

              var selectRol = ""; //Inicializa una cadena para almacenar el selector de roles del usuario
              selectRol += '<select class="form-select" name="editarRolUsuario" aria-label="Default select example">'; //Agrega la apertura del tag select al selector
              var crearRol = res.listaUsuarios; // Obtiene la lista de roles del usuario desde la respuesta del servidor
              $.each(crearRol.id_rol, function(key, dato){
                    var selected = ""; //Inicializa la variable 'selected' para determinar si una opción está seleccionada
                    selectRol += '<option value="'+dato+'" '+selected+'>'+res.listaUsuarios.nombreRol[key]+'</option>'; //Agrega opciones de roles al selector, marcando la opción como seleccionada si corresponde
              });
              selectRol += '</select>'; //Agrega el cierre del tag select al selector

              //Asigna los valores obtenidos de la respuesta del servidor a los campos de edición en el formulario
              $(".editarId_usuario").val(res.id_usuario); //Asigna el ID del usuario al campo de edición de ID de usuario
              $(".editarNombreUsuario").val(res.nombre); //Asigna el nombre del usuario al campo de edición de nombre de usuario
              $(".editarApellidosUsuario").val(res.apellidos); //Asigna los apellidos del usuario al campo de edición de apellidos de usuario
              $(".editarCorreoUsuario").val(res.correo); //Asigna el correo del usuario al campo de edición de correo de usuario
              $(".editarContrasenaUsuario").val(res.password); //Asigna la contraseña del usuario al campo de edición de contraseña de usuario
              $(".editarTelefonoUsuario").val(res.telefono); //Asigna el teléfono del usuario al campo de edición de teléfono de usuario
              $(".editarRol").html(selectRol); //Agrega el selector de roles al campo de edición de rol de usuario
              $(".editarStatusUsuario").html(selectStatus); //Agrega el selector de estado al campo de edición de estado de usuario
              $(".editarFechaUsuario").val(res.fecha_altaUsuario); //Asigna la fecha de alta del usuario al campo de edición de fecha de alta de usuario
              break;

              case "deleteUsuario":
              //Oculta el elemento del usuario específico en la interfaz utilizando su ID
              $(".usuario_" + obj.id_usuario).hide();
              //Muestra un modal con un mensaje del sistema
              $("#mensajeSistema").modal("show");
              //Actualiza el contenido del sistema con el mensaje de respuesta del servidor
              $(".contenidoSistema").html(res.respuesta);
              break;
            
      }
    },
      error: function(xhr, status){
      
      }
  });
}