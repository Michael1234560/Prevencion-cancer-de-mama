// Obtener referencias a elementos del DOM
const hamburguer = document.querySelector('.hamburguer');
const menu = document.querySelector('.menu-navegacion');

// Agregar evento de clic al ícono de hamburguesa
hamburguer.addEventListener('click', () => {
    // Alternar la clase "spread" para mostrar/ocultar el menú
    menu.classList.toggle("spread");
});

// Agregar evento de clic en cualquier parte de la ventana
window.addEventListener('click', e => {
    // Verificar si el menú está expandido y si el clic no fue en el menú ni en el ícono de hamburguesa
    if (menu.classList.contains('spread') && e.target != menu && e.target != hamburguer) {
        console.log('cerrar');
        // Ocultar el menú al hacer clic fuera de él
        menu.classList.toggle("spread");
    }
});
