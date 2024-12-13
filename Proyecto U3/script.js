// Selección de elementos clave
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeButton = document.getElementById('close-button');
const galleryItems = document.querySelectorAll('.gallery-item');

// Función para capitalizar la primera letra
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Función para abrir el modal
function openModal(projectName) {
    const projectPath = `proyectos/${projectName}.html`;
    modalBody.src = projectPath;
    document.getElementById('modal-title').textContent = `Proyecto: ${capitalizeFirstLetter(projectName)}`;
    modal.style.display = 'block';
}

// Función para cerrar el modal
function closeModal() {
    modal.style.display = 'none';
    modalBody.src = '';  // Limpiar el contenido del iframe
}

// Agregar event listeners a cada ítem de la galería
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const projectName = item.getAttribute('data-project').toLowerCase();
        openModal(projectName);
    });
});

// Event listener para cerrar el modal al hacer clic en la 'X'
closeButton.addEventListener('click', closeModal);

// Event listener para cerrar el modal al hacer clic fuera del modal
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// Event listener para cerrar el modal al presionar 'Escape'
window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});

// Manejar la navegación móvil
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});