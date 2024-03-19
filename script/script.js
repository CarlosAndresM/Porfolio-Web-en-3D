
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-image');
    const closeBtn = document.getElementsByClassName('close-modal')[0];

    // Agregar evento de clic a todas las imágenes con la clase "open-modal"
    const images = document.querySelectorAll('.open-modal');
    images.forEach(function (image) {
        image.addEventListener('click', function () {
            modal.style.display = 'block'; // Mostrar el modal
            modalImg.src = this.src; // Establecer la imagen del modal como la imagen clicada
        });
    });

    // Agregar evento de clic al botón de cerrar modal
    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none'; // Ocultar el modal al hacer clic en el botón de cerrar
    });

    // Cerrar modal al hacer clic fuera de la imagen
    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});





// Scroll automatico al seleccionar la flecha hacia abajo
document.addEventListener('DOMContentLoaded', function() {
    var arrowIcon = document.getElementById('arrow-icon');
    var portfolioSection = document.getElementById('portfolio');

    if (arrowIcon && portfolioSection) {
        arrowIcon.addEventListener('click', function() {
            portfolioSection.scrollIntoView({ behavior: 'smooth' }); 
        });
    }
});

