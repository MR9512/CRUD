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
    //Verifica si la variable $this->bulmaCSS está definida
         if(isset($this->bulmaCSS)){
    //Cierre de etiqueta ya que se ingresa codigo html      
    ?>
    <!--Carga la hoja de estilo y almacena la ubicación en la variable -->
     <link rel="stylesheet" href="<?= $this->bulmaCSS ?>">
     <!--Se abre etiqueta php para el cierre de la condición-->
   <?php } ?>
    <!--Se ingresa codificación Php, por lo tanto se abre etiqueta-->
    <?php
    //Verifica si la variable $this->estilosCSS está definida
         if(isset($this->estilosCSS)){
    //Cierre de etiqueta ya que se ingresa codigo html      
    ?>
    <!--Carga la hoja de estilo y almacena la ubicación en la variable -->
     <link rel="stylesheet" href="<?= $this->estilosCSS ?>">
     <!--Se abre etiqueta php para el cierre de la condición-->
   <?php } ?>
    <!--Título de la página que aparecerá en la pestaña del navegador-->
    <title>CRUD</title>
  <!--Cierra la sección de encabezado de la página-->   
  </head>
  <!--Abre la sección del cuerpo de la página y es lo que los usuarios verán en la página web-->
  <body>

   