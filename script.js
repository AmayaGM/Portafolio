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

function setLanguage(lang) {
    // 1. Cambiar estado visual de los botones
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn-${lang}`).classList.add('active');

    // 2. Cambiar todos los textos con atributos data-en/data-es
    const elements = document.querySelectorAll('[data-en]');
    
    elements.forEach(el => {
        // Cambiar Texto
        if (el.tagName !== 'IMG') {
            el.textContent = el.getAttribute(`data-${lang}`);
        } 
        // Cambiar Imágenes (si tienen el atributo definido)
        else {
            const newSrc = el.getAttribute(`data-${lang}`);
            if (newSrc) el.src = newSrc;
        }
    });

    // Opcional: Guardar preferencia en el navegador
    localStorage.setItem('preferredLang', lang);
}

// Al cargar la página, verificar si hay un idioma guardado
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'es';
    setLanguage(savedLang);
});