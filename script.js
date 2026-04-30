const overlay = document.getElementById('overlay');

// Alternar scroll del body
const toggleScroll = (disable) => {
    document.body.style.overflow = disable ? 'hidden' : 'auto';
};

// Función centralizada para expandir
function expandCard(card) {
    if (!card || card.classList.contains('active')) return;
    
    card.classList.add('active');
    overlay.classList.add('show');
    toggleScroll(true);
}

// Función para cerrar cualquier tarjeta activa
function closeActiveCard() {
    const activeCard = document.querySelector('.card.active');
    if (activeCard) {
        activeCard.classList.remove('active');
        overlay.classList.remove('show');
        toggleScroll(false);
    }
}

// Manejador del botón cerrar
function closeCard(event, button) {
    event.stopPropagation();
    closeActiveCard();
}

// Abrir Golden Quote desde el header
function openGoldenQuote() {
    const specialCard = document.getElementById('golden-quote-hidden');
    expandCard(specialCard);
}

// Cerrar al hacer clic en el overlay
overlay.addEventListener('click', closeActiveCard);

// Cerrar con la tecla Escape para mejor UX
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeActiveCard();
});