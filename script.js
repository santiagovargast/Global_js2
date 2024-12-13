// Accedemos a las clases de css con querySelector
const track = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

let currentIndex = 0; // El carousel empezará en la carta 0
let itemsToShow = 3; // Empezamos con 3 elementos visibles

// Función para mover el carrusel
function moveCarousel() {
    const itemWidth = document.querySelector('.carousel-item').offsetWidth + 20; // Calculamos el ancho de la carta
    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`; // Aplica una transformación a la pista del carousel para moverlo horizontalmente

// Función para cambiar el número de elementos visibles según el tamaño de pantalla
function updateItemsToShow() {
    if (window.innerWidth <= 767) {
        itemsToShow = 1;
    } else if (window.innerWidth <= 1023) {
        itemsToShow = 2;
    } else {
        itemsToShow = 3;
    }
}
// Botón "Anterior"
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) { // Si no estamos en la primera carta, retrocede una carta
        currentIndex--; // Retrocede una carta
    }
    moveCarousel(); // Para mover la pista a la nueva posición
});

// Botón "Siguiente"
nextButton.addEventListener('click', () => {
    if (currentIndex < track.children.length - itemsToShow) { // si el índice es menor que la cantidad total de cartas menos los elementos visibles
        currentIndex++; // Avanza una carta
    } else {
        // Si estamos en la última carta el indice se reinicia a 0
        currentIndex = 0;
    }
    moveCarousel();
});

// Cuando se cambia el tamaño de la ventana, se actualiza el numero de cartas a mostrar
window.addEventListener('resize', () => {
    updateItemsToShow();
    moveCarousel();
});

// Al cargar la pagina, se llaman estas funciones
updateItemsToShow(); // elementos visibles según el tamaño de pantalla
moveCarousel(); // El carousel se mueve correctamente a la posicion inicial.
}
