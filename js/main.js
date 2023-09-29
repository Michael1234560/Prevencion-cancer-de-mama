// Guardar la posición actual de desplazamiento
let ubicacionPrincipal = window.pageYOffset; // 0

// Inicializar AOS para animaciones al hacer scroll
AOS.init();

// Evento de scroll
window.addEventListener("scroll", function(){
    // Obtener la posición actual de desplazamiento
    let desplazamientoActual = window.pageYOffset; // 180

    // Comparar la posición actual con la posición anterior
    if(ubicacionPrincipal >= desplazamientoActual){
        // Si el desplazamiento es hacia arriba, mostrar el menú
        document.getElementsByTagName("nav")[0].style.top = "0px";
    } else {
        // Si el desplazamiento es hacia abajo, ocultar el menú
        document.getElementsByTagName("nav")[0].style.top = "-100px";
    }

    // Actualizar la ubicación principal con la posición actual
    ubicacionPrincipal = desplazamientoActual; // 200
});

// Menú
let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click", function(){
    // Cambiar el color del ícono de hamburguesa al hacer clic
    if(semaforo){
        document.querySelectorAll(".hamburguer")[0].style.color ="#fff";
        semaforo = false;
    } else {
        document.querySelectorAll(".hamburguer")[0].style.color ="#000";
        semaforo = true;
    }

    // Alternar la clase "menudos" para mostrar/ocultar el menú
    enlacesHeader.classList.toggle("menudos");
});
