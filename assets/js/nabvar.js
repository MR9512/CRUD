// Espera a que el contenido del documento se haya cargado completamente
document.addEventListener('DOMContentLoaded', () => {
    //Obtiene todos los elementos con la clase "navbar-burger"
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    //Agrega un evento de clic a cada uno de ellos
    $navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {
        //Obtiene el valor del atributo "data-target"
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        //Alterna la clase "is-active" en tanto en el "navbar-burger" como en el "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  });
  