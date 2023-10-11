$(document).on("click", ".ver", function() {
  //Cuando se hace clic en un elemento con clase "ver"
  id_usuario = $(this).data("usuario");
  //Se crea un objeto llamado 'obj'
   var obj = {};
  //Se asigna la URL a la que se enviará la solicitud AJAX al objeto 'obj'
  obj.url = "getUsuario";
  //Se crea un objeto de datos con una propiedad 'id_usuario' y se asigna al objeto 'data' en 'obj'
  obj.data = {id_usuario: id_usuario};
  //Se especifica el tipo de solicitud HTTP que se realizará, en este caso, es una solicitud POST
  obj.type = "POST";
  //Se asigna una acción específica que se llevará a cabo en el servidor cuando se reciba esta solicitud
  obj.accion = "getUsuario";
  //Se llama a la función peticionAjax con el objeto 'obj'
  peticionAjax(obj);
  //Se muestra un modal con ID "infoModal"
  $("#infoModal").modal("show");
  });

$(document).on("click", ".editar", function() {
  //Cuando se hace clic en un elemento con clase "editar"
  id_usuario = $(this).data("usuario");
  var obj = {};
  //Se crea un objeto 'obj' similar al anterior pero con accion "updateUsuario"
  obj.url = "getUsuario";
  obj.data = {id_usuario:id_usuario};
  obj.type = "POST";
  obj.accion = "updateUsuario";
  //Se llama a la función peticionAjax con el objeto 'obj'
  peticionAjax(obj);
  //Se muestra un modal con ID "updateModal"
  $("#updateModal").modal("show");
});

$(document).on("click", ".eliminar", function() {
  //Cuando se hace clic en un elemento con clase "eliminar"
  id_usuario = $(this).data("usuario");
  var obj = {};
  //Se crea un objeto 'obj' con propiedad id_usuario, URL, data, type y accion
  obj.id_usuario = id_usuario;
  obj.url = "deleteUsuario";
  obj.data = {id_usuario:id_usuario};
  obj.type = "POST";
  obj.accion = "deleteUsuario";
  //Se llama a la función peticionAjax con el objeto 'obj'
  peticionAjax(obj);
});

$("#formulario").on("submit",function(){
  //Cuando se envía el formulario con ID "formulario"
  event.preventDefault();
  //Verifica si el campo de nombre de usuario está vacío
  if($(".nombreUsuario").val() == ""){
    // Si está vacío, muestra el mensaje de error correspondiente
    $(".error_nombreUsuario").show();
  } else {
    //Si no está vacío, oculta el mensaje de error
    $(".error_nombreUsuario").hide();
  }
  //Verifica si el campo de apellidos de usuario está vacío
  if($(".apellidosUsuario").val() == ""){
    //Si está vacío, muestra el mensaje de error correspondiente
    $(".error_apellidosUsuario").show();
  } else {
    // Si no está vacío, oculta el mensaje de error
    $(".error_apellidosUsuario").hide();
  }
  //Verifica si el campo de correo de usuario está vacío
  if($(".correoUsuario").val() == ""){
    // Si está vacío, muestra el mensaje de error correspondiente
    $(".error_correoUsuario").show();
  } else {
    // Si no está vacío, oculta el mensaje de error
    $(".error_correoUsuario").hide();
  }
  //Verifica si el campo de contraseña de usuario está vacío
  if($(".passwordUsuario").val() == ""){
    //Si está vacío, muestra el mensaje de error correspondiente
    $(".error_passwordUsuario").show();
  } else {
    //Si no está vacío, oculta el mensaje de error
    $(".error_passwordUsuario").hide();
  }
  //Verifica si el campo de teléfono de usuario está vacío
  if($(".telefonoUsuario").val() == ""){
    // Si está vacío, muestra el mensaje de error correspondiente
    $(".error_telefonoUsuario").show();
  } else {
    //Si no está vacío, oculta el mensaje de error
    $(".error_telefonoUsuario").hide();
  }
  //Verifica si el campo de rol de usuario está vacío
  if($(".id_rol").val() == ""){
    //Si está vacío, muestra el mensaje de error correspondiente
    $(".error_rolUsuario").show();
  } else {
    //Si no está vacío, oculta el mensaje de error
    $(".error_rolUsuario").hide();
  }
  //Verifica si alguno de los campos obligatorios está vacío
  if($(".nombreUsuario").val() == null || $(".apellidosUsuario").val() == null || $(".correoUsuario").val() == null || $(".passwordUsuario").val() == null || $(".telefonoUsuario").val() == null || $(".id_rol").val() == null){
    //Si algún campo está vacío, devuelve falso para evitar el envío del formulario
    return false;
  }

  //Se serializan los datos del formulario
  var formulario = $("#formulario").serialize();
  //Se realiza una solicitud AJAX de tipo POST
  $.ajax({
    url: 'insertarUsuario',
    type: 'post',
    data: formulario,
    dataType: "json",
    //En caso de éxito, se actualiza la tabla de usuarios y se muestra un modal de mensaje
    success: function(response) {
    //Asigna la propiedad 'datos' de la respuesta a la variable 'datos'
    datos = response.datos;
    //Asigna la propiedad 'usuarios' de la respuesta a la variable 'usuario'
    usuario = response.usuarios;
    //Crea una cadena de texto HTML vacía
    var html = '';
    //Itera sobre los IDs de usuario en el objeto 'usuario'
    $.each(usuario.id_usuario, function(key, usuarios) {
        //Crea una fila de tabla con una clase basada en el ID de usuario
        html += '<tr class="usuario_' + usuarios + '">';
        //Crea celdas de tabla para el nombre, apellidos, rol y estado del usuario
        html += '<td class="nombreUsuario' + usuarios + '">' + usuario.nombre[key] + '</td>';
        html += '<td class="apellidosUsuario' + usuarios + '">' + usuario.apellidos[key] + '</td>';
        html += '<td class="rolUsuario' + usuarios + '">' + usuario.rol[key] + '</td>';
        //Agrega una clase de colorStatus al estado del usuario
        html += '<td class="rolUsuario' + usuarios + ' ' + usuario.colorStatus[key] + '">' + usuario.nombreStatus[key] + '</td>';
        //Crea iconos de ojo, lápiz y papelera para ver, editar y eliminar usuarios respectivamente
        html += '<td>';
        html += '<i class="bi bi-eye ver ver_' + usuario.id_usuario[key] + '" data-usuario="' + usuario.id_usuario[key] + '"></i>&nbsp;&nbsp;';
        html += '<i class="bi bi-pencil editar editar_' + usuario.id_usuario[key] + '" data-usuario="' + usuario.id_usuario[key] + '"></i>&nbsp;&nbsp;';
        html += '<i class="bi bi-trash eliminar eliminar_' + usuario.id_usuario[key] + '" data-usuario="' + usuario.id_usuario[key] + '"></i>';
        html += '</td>';
        html += '</tr>';
    });
      //Inserta la cadena de texto HTML en la tabla con clase "tableUsuarios"
      $(".tableUsuarios").html(html);
      //Oculta el modal con ID "exampleModal"
      $('#exampleModal').modal('hide');
      //Reemplaza el contenido del elemento con clase "contenidoSistema" con el mensaje de la respuesta
      $('.contenidoSistema').html(response.mensaje);
      //Muestra el modal con ID "mensajeSistema"
      $('#mensajeSistema').modal('show');
          }
        });
      });

$("#actualizarFormulario").on("submit",function(){
  //Cuando se envía el formulario con ID "actualizarFormulario"
  event.preventDefault();
  //Se serializan los datos del formulario
  var formulario = $("#actualizarFormulario").serialize();
  //Se realiza una solicitud AJAX de tipo POST
  $.ajax({
    url: 'updateUsuario',
    type: 'post',
    data: formulario,
    dataType: "json",
    //En caso de éxito, se actualizan los datos del usuario y se muestra un modal de mensaje
    success: function(response) {
      //Asigna la propiedad 'datos' de la respuesta a la variable 'datos'
      datos = response.datos;
      //Actualiza el contenido del elemento con clase "nombreUsuario" y el ID del usuario correspondiente
      $(".nombreUsuario"+datos.id_usuario).html(datos.editarNombreUsuario);
      //Actualiza el contenido del elemento con clase "apellidosUsuario" y el ID del usuario correspondiente
      $(".apellidosUsuario"+datos.id_usuario).html(datos.editarApellidosUsuario);
      //Actualiza el contenido del elemento con clase "rolUsuario" y el ID del usuario correspondiente
      $(".rolUsuario"+datos.id_usuario).html(datos.rol);
      //Actualiza el contenido del elemento con clase "colorStatus" y el ID del usuario correspondiente
      $(".colorStatus"+datos.id_usuario).html(datos.estatus);
      //Elimina las clases "bg-success" y "bg-warning" del elemento con clase "colorStatus" y el ID del usuario correspondiente
      $(".colorStatus"+datos.id_usuario).removeClass("bg-success");
      $(".colorStatus"+datos.id_usuario).removeClass("bg-warning");
      //Agrega la clase de color obtenida de la respuesta del servidor al elemento con clase "colorStatus" y el ID del usuario correspondiente
      $(".colorStatus"+datos.id_usuario).addClass(response.colorStatus);
      //Oculta el modal con ID "updateModal"
      $("#updateModal").modal("hide");
      //Reemplaza el contenido del elemento con clase "contenidoSistema" con el mensaje de la respuesta del servidor
      $(".contenidoSistema").html(response.respuesta);
      //Muestra el modal con ID "mensajeSistema"
      $("#mensajeSistema").modal("show");
    }
  });
});

$(".tableUsuarios").on("submit",function(){
  //Cuando se envía el formulario dentro de un elemento con clase "tableUsuarios"
  event.preventDefault();
  //Se serializan los datos del formulario
  var tableUsuarios = $(".tableUsuarios").serialize();
  //Se realiza una solicitud AJAX de tipo POST
  $.ajax({
    url: 'deleteUsuario',
    type: 'post',
    data: tableUsuarios,
    dataType: "json",
    // En caso de éxito, se actualizan los datos del usuario y su estatus
    success: function(response) {
      //Actualiza el contenido del elemento con clase "nombreUsuario" y el ID del usuario correspondiente con el nombre del usuario recibido del servidor
      $(".nombreUsuario"+datos.id_usuario).html(datos.nombre);
      //Actualiza el contenido del elemento con clase "apellidosUsuario" y el ID del usuario correspondiente con los apellidos del usuario recibidos del servidor
      $(".apellidosUsuario"+datos.id_usuario).html(datos.apellidos);
      //Actualiza el contenido del elemento con clase "rolUsuario" y el ID del usuario correspondiente con el rol del usuario recibido del servidor
      $(".rolUsuario"+datos.id_usuario).html(datos.rol);
      //Actualiza el contenido del elemento con clase "colorStatus" y el ID del usuario correspondiente con el nombre del estado del usuario recibido del servidor
      $(".colorStatus"+datos.id_usuario).html(datos.nombreStatus);
      //Elimina las clases "bg-success" y "bg-warning" del elemento con clase "colorStatus" y el ID del usuario correspondiente
      $(".colorStatus"+datos.id_usuario).removeClass("bg-success");
      $(".colorStatus"+datos.id_usuario).removeClass("bg-warning");
      //Agrega la clase de color obtenida de la respuesta del servidor al elemento con clase "colorStatus" y el ID del usuario correspondiente
      $(".colorStatus"+datos.id_usuario).addClass(response.colorStatus);
   }
  });
});

function peticionAjax(obj){
  //Función para realizar solicitudes AJAX
  $.ajax({
    url: obj.url,
    type: obj.type,
    data: obj.data,
    dataType: "json",
    success: function(res){ 
      //En caso de éxito, se manejan los datos de respuesta según la acción solicitada
      switch(obj.accion){

        case "getUsuario":
          //Asigna el valor recibido del servidor al campo de entrada con clase "verNombreUsuario"
          $(".verNombreUsuario").val(res.nombre);
          //Asigna el valor recibido del servidor al campo de entrada con clase "verApellidosUsuario"
          $(".verApellidosUsuario").val(res.apellidos);
          //Asigna el valor recibido del servidor al campo de entrada con clase "verCorreoUsuario"
          $(".verCorreoUsuario").val(res.correo);
          //Asigna el valor recibido del servidor al campo de entrada con clase "verContrasenaUsuario"
          $(".verContrasenaUsuario").val(res.password);
          //Asigna el valor recibido del servidor al campo de entrada con clase "verTelefonoUsuario"
          $(".verTelefonoUsuario").val(res.telefono);
          //Asigna el valor recibido del servidor al campo de entrada con clase "verRolUsuario"
          $(".verRolUsuario").val(res.rol);
          //Asigna el valor recibido del servidor al campo de entrada con clase "verFechaUsuario"
          $(".verFechaUsuario").val(res.fecha_altaUsuario);
          break;

        case "updateUsuario":
          //Variables para establecer las opciones predeterminadas en los menús desplegables
          var statusActivo = '';
          var statusInactivo = '';
          //Comprueba el estado del usuario y establece la opción seleccionada en el menú desplegable de estado
          if(res.status == 'Activo'){
            statusActivo = 'selected';
          }
          if(res.status == 'Inactivo'){
            statusInactivo = 'selected';
          }
          //Crea el HTML para el menú desplegable de estado
          var selectStatus = "";
          selectStatus += '<select class="form-select" name="editarStatusUsuario" aria-label="Default select example">';
          selectStatus += '<option value="1" '+statusActivo+'>Activo</option>';
          selectStatus += '<option value="0" '+statusInactivo+'>Inactivo</option>';
          selectStatus += '</select>';
          //Crea el HTML para el menú desplegable de rol
          var selectRol = "";
          selectRol += '<select class="form-select" name="editarRolUsuario" aria-label="Default select example">';
          var crearRol = res.listaUsuarios;
          //Llena el menú desplegable de rol con datos obtenidos del servidor
          $.each(crearRol.id_rol, function(key, dato) {
            var selected = "";
            //Verifica si la opción debe estar seleccionada
            selectRol += '<option value="'+dato+'" '+selected+'>'+res.listaUsuarios.nombreRol[key]+'</option>';
          });
          selectRol += '</select>';
          //Establece los valores de los campos de edición del formulario con los datos del usuario obtenidos del servidor
          $(".editarId_usuario").val(res.id_usuario);
          $(".editarNombreUsuario").val(res.nombre);
          $(".editarApellidosUsuario").val(res.apellidos);
          $(".editarCorreoUsuario").val(res.correo);
          $(".editarContrasenaUsuario").val(res.password);
          $(".editarTelefonoUsuario").val(res.telefono);
          $(".editarRol").html(selectRol);  // Llena el campo de edición del rol con el menú desplegable de rol
          $(".editarStatusUsuario").html(selectStatus);  // Llena el campo de edición del estado con el menú desplegable de estado
          $(".editarFechaUsuario").val(res.fecha_altaUsuario);
          break;

        case "deleteUsuario":
          //Muestra el modal con ID "mensajeSistema"
          $("#mensajeSistema").modal("show");
          //Actualiza el contenido del elemento con clase "contenidoSistema" con el mensaje de respuesta del servidor
          $(".contenidoSistema").html(res.respuesta);
          break;
          
      }
    },
    error: function(xhr, status){
      // En caso de error, se maneja la respuesta
    }
  });
}
