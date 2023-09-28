<!-- Contenedor principal con diseño fluido -->
<div class="container is-fluid">
    <!-- Título principal de la página -->
    <h1 class="title">Home</h1>

    <!-- Columnas para centrar el contenido -->
    <div class="columns is-flex is-justify-content-center">
        <!-- Figura con una imagen -->
        <figure class="image is-128x128">
            <!-- Imagen redondeada del logo de Bulma, cargada desde la URLSYSIMG -->
            <img class="is-rounded" src="<?= URLSYSIMG ?>user.png" alt="User Imagen">
        </figure>
    </div>

    <!-- Otra fila de columnas para el mensaje de bienvenida -->
    <div class="columns is-flex is-justify-content-center">
        <!-- Subtítulo de bienvenida, puede personalizarse con el nombre del usuario -->
        <h2 class="subtitle">¡Bienvenido User Name!</h2>
    </div>
</div>
