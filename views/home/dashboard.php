 <!-- Inicio de la barra de navegación -->
<nav class="navbar">

<!-- Contenedor de la marca o logotipo -->
<div class="navbar-brand">
    <!-- Enlace a la página principal o logo -->
    <a class="navbar-item" href="<?= URLHOME ?>">
        <img src="<?= URLSYSIMG ?>bulma.png" alt="Bulma" width="112" height="28">
    </a>

    <!-- Icono de hamburguesa para dispositivos móviles -->
    <div class="navbar-burger" data-target="navbarExampleTransparentExample">
        <span></span> <!-- Línea 1 del ícono de hamburguesa -->
        <span></span> <!-- Línea 2 del ícono de hamburguesa -->
        <span></span> <!-- Línea 3 del ícono de hamburguesa -->
    </div>
</div>

<!-- Contenedor del menú de navegación -->
<div id="navbarExampleTransparentExample" class="navbar-menu">

    <!-- Sección de elementos de menú en la izquierda -->
    <div class="navbar-start">
        <!-- Enlace a la página de "Dashboard" -->
        <a class="navbar-item" href="#">
            Dashboard
        </a>

        <!-- Menú desplegable "Usuarios" -->
        <div class="navbar-item has-dropdown is-hoverable">
            <!-- Enlace principal del menú desplegable -->
            <a class="navbar-link" href="#">
                Usuarios
            </a>

            <!-- Contenido del menú desplegable -->
            <div class="navbar-dropdown is-boxed">
                <!-- Opción "Nuevo" en el menú desplegable -->
                <a class="navbar-item" href="#">
                    Nuevo
                </a>
                <!-- Opción "Lista" en el menú desplegable -->
                <a class="navbar-item" href="#">
                    Lista
                </a>
                <!-- Opción "Buscar" en el menú desplegable -->
                <a class="navbar-item" href="#">
                    Buscar
                </a>
            </div>
        </div>
    </div>

    <!-- Sección de elementos de menú en la derecha -->
    <div class="navbar-end">
        <!-- Menú desplegable del nombre de usuario -->
        <div class="navbar-item has-dropdown is-hoverable">
            <!-- Nombre de usuario -->
            <a class="navbar-link">
                ** User Name **
            </a>

            <!-- Contenido del menú desplegable del usuario -->
            <div class="navbar-dropdown is-boxed">
                <!-- Opción "Mi cuenta" -->
                <a class="navbar-item" href="#">
                    Mi cuenta
                </a>
                <!-- Opción "Mi foto" -->
                <a class="navbar-item" href="#">
                    Mi foto
                </a>
                <hr class="navbar-divider"> <!-- Línea divisoria -->
                <!-- Opción "Salir" -->
                <a class="navbar-item" href="#" id="btn_exit">
                    Salir
                </a>
            </div>
        </div>
    </div>

</div>
</nav>
<!-- Fin de la barra de navegación -->
