const overlay = document.getElementById('overlay');

function expandCard(card) {
    if (!card.classList.contains('active')) {
        card.classList.add('active');
        overlay.classList.add('show');
    }
}

function closeCard(event, button) {
    // Evita que el clic en la X también dispare el clic en la tarjeta
    event.stopPropagation();
    
    const card = button.parentElement;
    card.classList.remove('active');
    overlay.classList.remove('show');
}

// Cerrar al hacer clic en el fondo oscuro
overlay.addEventListener('click', () => {
    const activeCard = document.querySelector('.card.active');
    if (activeCard) {
        activeCard.classList.remove('active');
        overlay.classList.remove('show');
    }
});