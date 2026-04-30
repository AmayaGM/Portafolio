const overlay = document.getElementById('overlay');

// Esta función se encarga de abrir la tarjeta oculta desde el header
function openGoldenQuote() {
    const specialCard = document.getElementById('golden-quote-hidden');
    // Usamos la función expandCard que ya tienes para mantener la lógica
    expandCard(specialCard);
}

// Función general para expandir cualquier tarjeta
function expandCard(card) {
    if (card && !card.classList.contains('active')) {
        card.classList.add('active');
        overlay.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

// Función para cerrar
function closeCard(event, button) {
    event.stopPropagation();
    const card = button.parentElement;
    card.classList.remove('active');
    overlay.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Cerrar al hacer clic en el overlay (fondo oscuro)
overlay.addEventListener('click', () => {
    const activeCard = document.querySelector('.card.active');
    if (activeCard) {
        activeCard.classList.remove('active');
        overlay.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
});