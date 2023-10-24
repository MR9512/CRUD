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

  $(document).on("click", ".eliminar", function() {
    id_usuario = $(this).data("usuario");
    var obj = {};
    obj.id_usuario = id_usuario;
    obj.url = "deleteUsuario";
    obj.data = {id_usuario:id_usuario};
    obj.type = "POST";
    obj.accion = "deleteUsuario";
    console.log(obj);
    peticionAjax(obj);
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
  $("#actualizarFormulario").on("submit",function(){
    event.preventDefault();
    var formulario = $("#actualizarFormulario").serialize();
    $.ajax({
      url: 'updateUsuario',
      type: 'post',
      data: formulario,
      dataType: "json",
      success: function(response) {
      datos = response.datos;
      $(".nombreUsuario"+datos.id_usuario).html(datos.editarNombreUsuario);
      $(".apellidosUsuario"+datos.id_usuario).html(datos.editarApellidosUsuario);
      $(".rolUsuario"+datos.id_usuario).html(datos.rol);
      $(".colorStatus"+datos.id_usuario).html(datos.estatus);
      $(".colorStatus"+datos.id_usuario).removeClass("bg-success");
      $(".colorStatus"+datos.id_usuario).removeClass("bg-warning");
      $(".colorStatus"+datos.id_usuario).addClass(response.colorStatus);
      $("#updateModal").modal("hide");
      $(".contenidoSistema").html(response.respuesta);
      $("#mensajeSistema").modal("show");   
      }
  });
  });

  $(document).on("click",".tableUsuarios", function(event){
    event.preventDefault();
    var tableUsuarios = $(".tableUsuarios").serialize();
    $.ajax({
      url: 'deleteUsuario',
      type: 'post',
      data: tableUsuarios,
      dataType: "json",
      success: function(response) {
      html = ""; 
      datos = response.datos;
      html += $(".nombreUsuario"+datos.id_usuario).html(datos.nombre);
      html += $(".apellidosUsuario"+datos.id_usuario).html(datos.apellidos);
      html += $(".rolUsuario"+datos.id_usuario).html(datos.rol);
      html += $(".colorStatus"+datos.id_usuario).html(datos.nombreStatus);
      html += $(".colorStatus"+datos.id_usuario).removeClass("bg-success");
      html += $(".colorStatus"+datos.id_usuario).removeClass("bg-warning");
      html += $(".colorStatus"+datos.id_usuario).addClass(response.colorStatus);
      $(".tableUsuarios").html(html)
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
      switch(obj.accion) {
            case "insertarUsuario":
              var html = "";
              var usuarios = res.usuarios;
              $.each(usuarios.id_usuario, function(key, dato){
                html += '<tr class="usuario_' + dato + '">';
                html += '<td>' + usuarios.nombre[key] + '</td>';
                html += '<td>' + usuarios.apellidos[key] + '</td>';
                html += '<td>' + usuarios.rol[key] + '</td>';
                html += '<td class="' + usuarios.colorStatus[key] + '">' + usuarios.nombreStatus[key] + '</td>';
                html += '<td width="8%">';
                html += '<i class="bi bi-eye ver ver_' + usuarios.id_usuario[key] + '" data-usuario="' + usuarios.id_usuario[key] + '"></i>&nbsp;&nbsp;';
                html += '<i class="bi bi-pencil editar editar_' + usuarios.id_usuario[key] + '" data-usuario="' + usuarios.id_usuario[key] + '"></i>&nbsp;&nbsp;';
                html += '<i class="bi bi-trash eliminar eliminar_' + usuarios.id_usuario[key] + '" data-usuario="' + usuarios.id_usuario[key] + '"></i>&nbsp;&nbsp;';
                html += '</td>';
                html += '</tr>';
              });
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
              var statusActivo = '';
              var statusInactivo = '';
              if(res.status == 'Activo'){
                var statusActivo = 'selected';
              }
              if(res.status == 'Inactivo'){
                var statusInactivo = 'selected';
              }
              var selectStatus = "";
              selectStatus+= '<select class="form-select" name="editarStatusUsuario" aria-label="Default select example">';
              selectStatus+='<option value="1" '+statusActivo+'>Activo</option>';
              selectStatus+='<option value="0" '+statusInactivo+'>Inactivo</option>';
              selectStatus+= '</select>';
              var selectRol = "";
              selectRol+= '<select class="form-select" name="editarRolUsuario" aria-label="Default select example">';
              var crearRol = res.listaUsuarios;
              $.each(crearRol.id_rol,function(key,dato){
                var selected = "";
              selectRol+='<option value="'+dato+'" '+selected+'>'+res.listaUsuarios.nombreRol[key]+'</option>';
              });
              selectRol+= '</select>';
              $(".editarId_usuario").val(res.id_usuario);
              $(".editarNombreUsuario").val(res.nombre);
              $(".editarApellidosUsuario").val(res.apellidos);
              $(".editarCorreoUsuario").val(res.correo);
              $(".editarContrasenaUsuario").val(res.password);
              $(".editarTelefonoUsuario").val(res.telefono);
              $(".editarRol").html(selectRol);
              $(".editarStatusUsuario").html(selectStatus);
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