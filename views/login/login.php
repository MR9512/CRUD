<div class="main-container">
    <!-- Inicio del formulario de inicio de sesión-->
    <form class="box login" action="" method="POST" autocomplete="off">
        <!--Título del formulario-->
        <h5 class="title is-5 has-text-centered is-uppercase">LOGIN</h5>
        <!--Campo para ingresar el usuario-->
        <div class="field">
            <label class="label">Usuario</label>
            <div class="control">
                <!-- Input para el usuario -->
                <input class="input" type="text" name="login_usuario" pattern="[a-zA-Z0-9]{4,20}" maxlength="20" required>
                <!-- Explicación: Este input permite al usuario ingresar su nombre de usuario. El atributo "pattern" restringe los caracteres permitidos y la longitud requerida. -->
            </div>
        </div>
        <!--Campo para ingresar la clave-->
        <div class="field">
            <label class="label">Clave</label>
            <div class="control">
                <!--Input para la clave-->
                <input class="input" type="password" name="login_clave" pattern="[a-zA-Z0-9$@.-]{7,100}" maxlength="100" required>
                <!--Permite al usuario ingresar su contraseña. El atributo "type" oculta los caracteres de la contraseña. El atributo "pattern" restringe los caracteres permitidos y la longitud requerida-->
            </div>
        </div>
        <!--Botón para enviar el formulario-->
        <p class="has-text-centered mb-4 mt-3">
            <button type="submit" class="button is-info is-rounded">Iniciar sesión</button>
            <!--Permite al usuario enviar el formulario de inicio de sesión-->
        </p>
    </form>
    <!--Fin del formulario de inicio de sesión-->
</div>
