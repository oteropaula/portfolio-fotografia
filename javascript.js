// Función para obtener el nombre de la categoría desde la URL
function getCategoryFromURL() {
    const path = window.location.pathname;  // Obtiene la ruta de la URL
    const pageName = path.split('/').pop();  // Obtiene el nombre del archivo 
    return pageName.split('.')[0];  // Devuelve el nombre de la categoría sin la extensión .html
}

let currentImageIndex = 1;  // Índice de la imagen actual para el modal
let currentCategory = getCategoryFromURL();  // Obtiene la categoría desde la URL

// Función para abrir el modal con la imagen correspondiente
function openModal(imageIndex) {
    currentImageIndex = imageIndex;  // Actualiza el índice de la imagen
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    modal.style.display = 'flex';  // Muestra el modal
    modalImage.src = `imagenes/${currentCategory}/image${currentImageIndex}.jpg`;  // Asigna la imagen correcta al modal
}

// Función para cerrar el modal cuando se hace clic en la cruz o fuera de la imagen
function closeModal(event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal || event.target === document.querySelector('.close-modal')) {
        modal.style.display = 'none';  // Oculta el modal
    }
}

// Función para cambiar la imagen al hacer clic en las flechas de navegación
function changeImage(direction) {
    currentImageIndex += direction;  // Cambia el índice según la dirección

    // Ajusta el índice según el número máximo de imágenes de la categoría actual
    let maxImages = 16;  // Número máximo de imágenes por defecto
    if (currentCategory === 'naturaleza') {
        maxImages = 15;  // Asumimos que hay 15 imágenes en "naturaleza"
    }

    // Si el índice es menor que 1, lo ajustamos al máximo número de imágenes
    if (currentImageIndex < 1) currentImageIndex = maxImages;
    if (currentImageIndex > maxImages) currentImageIndex = 1;

    const modalImage = document.getElementById('modalImage');
    modalImage.src = `imagenes/${currentCategory}/image${currentImageIndex}.jpg`;  // Cambia la imagen en el modal
}

// Detectar el clic fuera del modal para cerrarlo
document.getElementById('imageModal').addEventListener('click', closeModal);

// Prevenir el cierre del modal si se hace clic dentro del modal-content
document.querySelector('.modal-content').addEventListener('click', (event) => {
    event.stopPropagation();  // Evita que el clic se propague y cierre el modal
});

// Corregir el botón de la cruz para cerrar el modal
document.querySelector('.close-modal').addEventListener('click', closeModal);
