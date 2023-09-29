// Obtener referencias a elementos del DOM
const imagenes = document.querySelectorAll('.img-galeria');
const imagenLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-light');
const closeLight = document.querySelector('.close');

// Agregar evento de clic a cada imagen de la galería
imagenes.forEach(imagen => {
    imagen.addEventListener('click', () => {
        aparecerImagen(imagen.getAttribute('src'));
    });
});

// Agregar evento de clic al contenedor de la imagen ampliada
contenedorLight.addEventListener('click', (e) => {
    // Ocultar la imagen ampliada si se hace clic fuera de ella
    if (e.target !== imagenLight) {
        contenedorLight.classList.toggle('show');
        imagenLight.classList.toggle('showImage');
        hamburguer.style.opacity = '1';
    }
});

// Función para mostrar la imagen ampliada
const aparecerImagen = (imagen) => {
    imagenLight.src = imagen;
    contenedorLight.classList.toggle('show');
    imagenLight.classList.toggle('showImage');
    hamburguer.style.opacity = '0';
};
