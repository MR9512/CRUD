<!--Enlaza el archivo JavaScript bootstrap.bundle.min.js desde un CDN (Content Delivery Network) que contiene Bootstrap y las dependencias necesarias, como Popper.js, para que las funciones de Bootstrap funcionen correctamente. El atributo integrity se utiliza para garantizar la integridad del archivo descargado-->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
<!--Enlaza el archivo JavaScript popper.min.js desde un CDN. Popper.js es una biblioteca utilizada por Bootstrap para manejar la posición y el desplazamiento de los elementos emergentes y las ventanas modales-->    
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
<!--Enlaza el archivo JavaScript bootstrap.min.js desde un CDN que contiene el código principal de Bootstrap que permite que los componentes de Bootstrap, como las alertas y los carruseles, funcionen correctamente-->   
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>  
    <!-- Verifica si la variable $this->js está definida y no es nula -->
    <?php if(isset($this->js)){
        ?>  
      <!--Si está definida, incluye el archivo JavaScript especificado en $this->js -->
      <script src="<?= URLSYS.$this->js ?>"></script>
      <?php } ?>
   <!--Cierra el elemento <body>, marcando el final del contenido visible de la página-->    
   </body>
<!--Cierra el elemento <html>, marcando el final del documento HTML-->   
</html>