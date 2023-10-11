<div class="container-form sign-up">
    <div class="welcome-back">
        <div class="message">
            <!-- Título y mensaje de bienvenida para nuevos usuarios -->
            <h2>Bienvenido al CRUD de Marco Rodriguez</h2>
            <p>Si ya tienes una cuenta por favor inicia sesión aquí</p>
            <button class="sign-up-btn">Iniciar Sesión</button> <!-- Botón de inicio de sesión -->
        </div>
    </div>
    <form class="formulario">
        <h2 class="create-account">Crear una cuenta</h2> <!-- Encabezado del formulario de registro -->
        <div class="iconos">
            <!-- Íconos para registrar usando redes sociales -->
            <div class="border-icon">
                <i class='bx bxl-instagram'></i>
            </div>
            <div class="border-icon">
                <i class='bx bxl-linkedin'></i>
            </div>
            <div class="border-icon">
                <i class='bx bxl-facebook-circle'></i>
            </div>
        </div>
        <p class="cuenta-gratis">Crear una cuenta gratis</p> <!-- Texto informativo -->
        <!-- Campos del formulario para registrar un nuevo usuario -->
        <input type="text" name="nombre" class="form-control nombre" id="nombre" placeholder="Nombre">
        <input type="text" name="apellidos" class="form-control apellidos" id="apellidos" placeholder="Apellidos">
        <input type="correo" name="correo" class="form-control correo" id="correo" placeholder="Correo">
        <input type="password" name="password" class="form-control password" id="password" placeholder="Password">
        <input type="text" name="telefono" class="form-control telefono" id="telefono" placeholder="Telefono">
        <select name="id_rol" class="form-control id_rol" placeholder="Rol:">
            <option>Seleccione:</option>
            <!-- Loop para generar opciones de selección de roles -->
            <?php foreach ($resp['id_rol'] as $i => $id_rol) { ?>
                <option value="<?= $id_rol ?>"><?= $resp['rol'][$i] ?></option>
            <?php } ?>
        </select>
        <button type="submit" class="btn btn-primary registrar">Registrar</button> <!-- Botón de registro -->
    </form>
</div>
<div class="container-form sign-in">
    <form class="formulario" action="ingresar" method="post">
        <h2 class="create-account">Iniciar Sesión</h2> <!-- Encabezado del formulario de inicio de sesión -->
        <div class="iconos">
            <!-- Íconos para iniciar sesión usando redes sociales -->
            <div class="border-icon">
                <i class='bx bxl-instagram'></i>
            </div>
            <div class="border-icon">
                <i class='bx bxl-linkedin'></i>
            </div>
            <div class="border-icon">
                <i class='bx bxl-facebook-circle'></i>
            </div>
        </div>
        <p class="cuenta-gratis">¿Aún no tienes una cuenta?</p> <!-- Texto informativo -->
        <!-- Campos del formulario para iniciar sesión -->
        <input type="text" name="usuario" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email">
        <input type="password" name="contrasena" class="form-control" id="exampleInputPassword1" placeholder="Contraseña">
        <button type="submit" class="btn btn-primary ingresar">Ingresar</button> <!-- Botón de inicio de sesión -->
    </form>
    <!-- Mostrar mensaje de error si existe -->
    <?php if (isset($resp['error_usuario'])) { ?>
        <div class="alert alert-danger" role="alert">
            <?= $resp['error_usuario']; ?>
        </div>
    <?php } ?>
    <div class="welcome-back">
        <div class="message">
            <!-- Título y mensaje de bienvenida para usuarios existentes -->
            <h2>Bienvenido de nuevo</h2>
            <p>Si aún no tienes una cuenta por favor regístrate aquí</p>
            <button class="sign-in-btn">Registrarse</button> <!-- Botón para redirigir al formulario de registro -->
        </div>
    </div>
</div>
