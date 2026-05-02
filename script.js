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
    const activeBtn = document.getElementById(`btn-${lang}`);
    if (activeBtn) activeBtn.classList.add('active');

    // 2. Cambiar TEXTOS
    // Buscamos elementos que tengan data-es o data-en y NO sean imágenes/iframes
    const textElements = document.querySelectorAll('[data-es]:not(img):not(iframe)');
    textElements.forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
    });

    // 3. Cambiar IMÁGENES
    // Usamos data-img-es y data-img-en para mayor claridad
    const images = document.querySelectorAll('img[data-img-es]');
    images.forEach(img => {
        const newSrc = img.getAttribute(`data-img-${lang}`);
        if (newSrc) img.src = newSrc;
    });

    // 4. Cambiar PROTOTIPOS (Iframes de Figma)
    const iframes = document.querySelectorAll('iframe[data-src-es]');
    iframes.forEach(frame => {
        const newSrc = frame.getAttribute(`data-src-${lang}`);
        if (newSrc) frame.src = newSrc;
    });

    // Guardar preferencia
    localStorage.setItem('preferredLang', lang);
}

// Al cargar la página, verificar si hay un idioma guardado
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'es';
    setLanguage(savedLang);
});