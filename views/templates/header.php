 <!--Esto especifica la versión de HTML que se está utilizando, en este caso, HTML5-->
<!doctype html> 
<!--Especifica que el idioma principal de la página es el inglés (English)-->
<html lang="en">
   <!--Abre la sección de encabezado de la página--> 
  <head>
    <!--Define el conjunto de caracteres utilizado para la codificación--> 
    <meta charset="utf-8">
    <!--Controla cómo se escala la página en dispositivos móviles, se ajusta al ancho del dispositivo y establece el nivel de escala inicial-->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!--Se ingresa codificación Php, por lo tanto se abre etiqueta-->
    <?php
    //Verifica si la variable $this->estilosCSS está definida
         if(isset($this->errorCSS)){
    //Cierre de etiqueta ya que se ingresa codigo html      
    ?>
    <!--Carga la hoja de estilo y almacena la ubicación en la variable -->
     <link rel="stylesheet" href="<?= $this->errorCSS ?>">
     <!--Se abre etiqueta php para el cierre de la condición-->
   <?php } ?>
   <?php
    //Verifica si la variable $this->loginCSS está definida
         if(isset($this->loginCSS)){
    //Cierre de etiqueta ya que se ingresa codigo html      
    ?>
    <!--Carga la hoja de estilo y almacena la ubicación en la variable -->
     <link rel="stylesheet" href="<?= $this->loginCSS ?>">
     <!--Se abre etiqueta php para el cierre de la condición-->
   <?php } ?>
    <!--Título de la página que aparecerá en la pestaña del navegador-->
    <title>CRUD</title>
    <!-- Abre un enlace de preconexión para la fuente de Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <!-- Abre un enlace de preconexión para el servidor de Google Fonts con atributo crossorigin -->
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <!-- Abre un enlace para cargar los iconos de Bootstrap desde un CDN -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
    <!-- Abre un enlace para cargar los estilos de Bootstrap desde un CDN con integridad del contenido -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <!-- Abre un enlace para cargar la fuente Roboto desde Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <!-- Abre un enlace para cargar los iconos de Boxicons desde un CDN -->
    <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet'>
    <!-- Abre un enlace para cargar los estilos de DataTables desde un CDN -->
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.11.2/css/jquery.dataTables.css"/>
    <!-- Abre un enlace para cargar los estilos de DataTables Buttons desde un CDN -->
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/buttons/2.0.0/css/buttons.dataTables.css"/>
    <!-- Abre un enlace para cargar los estilos de Bootstrap 4 desde un CDN -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <!-- Abre un enlace para cargar los estilos de Select2 desde un CDN -->
    <link href="https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/css/select2.min.css" rel="stylesheet" />
  <!--Cierra la sección de encabezado de la página-->   
  </head>
  <!--Abre la sección del cuerpo de la página y es lo que los usuarios verán en la página web-->
  <body>

   