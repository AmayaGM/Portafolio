const overlay = document.getElementById('overlay');

function expandCard(card) {
    if (!card.classList.contains('active')) {
        card.classList.add('active');
        overlay.classList.add('show');
        document.body.style.overflow = 'hidden'; // Evita que se mueva el fondo
    }
}

function closeCard(event, button) {
    event.stopPropagation();
    const card = button.parentElement;
    card.classList.remove('active');
    overlay.classList.remove('show');
    document.body.style.overflow = 'auto'; // Devuelve el scroll al cerrar
}
// Cerrar al hacer clic en el fondo oscuro
overlay.addEventListener('click', () => {
    const activeCard = document.querySelector('.card.active');
    if (activeCard) {
        activeCard.classList.remove('active');
        overlay.classList.remove('show');
    }
});