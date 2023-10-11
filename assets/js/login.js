//Selecciona los elementos del DOM necesarios

//Selecciona el elemento del botón de inicio de sesión en el DOM y lo almacena en la variable $btnSignIn
const $btnSignIn = document.querySelector('.sign-in-btn');
//Selecciona el elemento del botón de registro en el DOM y lo almacena en la variable $btnSignUp
const $btnSignUp = document.querySelector('.sign-up-btn');
//Selecciona el elemento del formulario de registro en el DOM y lo almacena en la variable $signUp
const $signUp = document.querySelector('.sign-up');
//Selecciona el elemento del formulario de inicio de sesión en el DOM y lo almacena en la variable $signIn
const $signIn = document.querySelector('.sign-in');

//Agrega un evento de clic al documento
document.addEventListener('click', e => {
        //Verifica si el objetivo del clic es el botón de inicio de sesión o el botón de registro
        if ((e.target === $btnSignIn || e.target === $btnSignUp)) {
            //Alterna las clases 'active' en los elementos de inicio de sesión y registro
            $signIn.classList.toggle('active');
            $signUp.classList.toggle('active');
        }
    });
    

//Agrega un controlador de clic al botón de registro
$(".registrar").click(function(event) {
    //Previene el comportamiento predeterminado del formulario
    event.preventDefault();
    //Obtiene los valores de los campos del formulario
    var nombre = $(".nombre").val();
    var apellidos = $(".apellidos").val();
    var correo = $(".correo").val();
    var password = $(".password").val();
    var telefono = $(".telefono").val();
    var id_rol = $(".id_rol").val();

    //Realiza una solicitud AJAX para guardar los datos del usuario
    $.ajax({
        url: "../login/save", // URL del controlador para guardar datos de usuario
        // Define un objeto de datos con propiedades específicas
        data: {
            //Almacena el valor de la variable 'nombre' en la propiedad 'nombre' del objeto
            nombre: nombre,
            //Almacena el valor de la variable 'apellidos' en la propiedad 'apellidos' del objeto
            apellidos: apellidos,
            //Almacena el valor de la variable 'correo' en la propiedad 'correo' del objeto
            correo: correo,
            //Almacena el valor de la variable 'password' en la propiedad 'password' del objeto
            password: password,
            //Almacena el valor de la variable 'telefono' en la propiedad 'telefono' del objeto
            telefono: telefono,
            //Almacena el valor de la variable 'id_rol' en la propiedad 'id_rol' del objeto
            id_rol: id_rol
        },
        type: "POST", // Método de solicitud
        dataType: "json", // Tipo de datos esperados en la respuesta
        success: function(res) {
            // Lógica después de un registro exitoso (puede estar vacía si no hay ninguna acción específica)
        },
        error: function(xhr, status) {
            // Lógica en caso de error (puede estar vacía si no hay ninguna acción específica)
        }
    });
});
