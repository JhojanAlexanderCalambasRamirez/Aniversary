// -------------------------------
// gallery.js completo (solo texto en modal)
// -------------------------------

// Lista de nombres de archivos de fotos
const photoFiles = [
    'WhatsApp Image 2026-01-10 at 15.42.05 (1).jpeg',
    'WhatsApp Image 2026-01-10 at 15.42.05 (2).jpeg',
    'WhatsApp Image 2026-01-10 at 15.42.05.jpeg',
    'WhatsApp Image 2026-01-10 at 15.42.07 (1).jpeg',
    'WhatsApp Image 2026-01-10 at 15.42.07 (2).jpeg',
    'WhatsApp Image 2026-01-10 at 15.42.07.jpeg',
    'WhatsApp Image 2026-01-10 at 15.42.08.jpeg',
    'WhatsApp Image 2026-01-10 at 15.42.09 (1).jpeg',
    'WhatsApp Image 2026-01-10 at 15.42.09 (2).jpeg',
    'WhatsApp Image 2026-01-10 at 15.42.09.jpeg',
    'WhatsApp Image 2026-01-10 at 15.42.10.jpeg',
    'WhatsApp Image 2026-01-10 at 15.42.11 (1).jpeg',
    'WhatsApp Image 2026-01-10 at 15.42.11 (2).jpeg',
    'WhatsApp Image 2026-01-10 at 15.42.11.jpeg',
    'WhatsApp Image 2026-01-10 at 15.42.12.jpeg',
    'WhatsApp Image 2026-01-10 at 15.42.13 (1).jpeg',
    'WhatsApp Image 2026-01-10 at 15.42.13 (2).jpeg',
    'WhatsApp Image 2026-01-10 at 15.42.13.jpeg',
    'WhatsApp Image 2026-01-10 at 15.42.14.jpeg',
    'WhatsApp Image 2026-01-10 at 15.42.15 (1).jpeg',
    'WhatsApp Image 2026-01-10 at 15.42.15.jpeg',
    'WhatsApp Image 2026-01-10 at 15.42.16 (1).jpeg',
    'WhatsApp Image 2026-01-10 at 15.42.16.jpeg',
    'WhatsApp Image 2026-01-10 at 15.42.17 (1).jpeg',
    'WhatsApp Image 2026-01-10 at 15.42.17 (2).jpeg',
    'WhatsApp Image 2026-01-10 at 15.42.17.jpeg',
    'WhatsApp Image 2026-01-10 at 15.42.18 (1).jpeg',
    'WhatsApp Image 2026-01-10 at 15.42.18.jpeg',
    'WhatsApp Image 2026-01-10 at 15.42.19.jpeg'
];

// Variables globales
let currentPhotoIndex = 0;
let musicPlaying = false;
let currentSongIndex = 0;

// Lista de canciones
const playlist = [
    'musica/Musica.mp3',
    'musica/Musica2.mp3',
    'musica/Musica3.mp3'
];

// Elementos del DOM
const articlesWrapper = document.getElementById('articlesWrapper');
const photoModal = document.getElementById('photoModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');
const modalClose = document.getElementById('modalClose');
const prevBtn = document.getElementById('prevPhoto');
const nextBtn = document.getElementById('nextPhoto');
const photoCounter = document.getElementById('photoCounter');
const backgroundMusic = document.getElementById('backgroundMusic');
const musicToggle = document.getElementById('musicToggle');

// -------------------------------
// Generar las fotos estilo periódico (solo título)
// -------------------------------
function generateArticles() {
    photoFiles.forEach((fileName, index) => {
        const photoData = photoTexts[index] || {
            title: `Momento ${index + 1}`,
            text: ''
        };

        const photoItem = document.createElement('div');
        photoItem.className = 'photo-item';
        photoItem.setAttribute('data-index', index);

        // SOLO el título aparece en el grid
        photoItem.innerHTML = `
            <figure class="photo-figure">
                <div class="photo-wrapper">
                    <img src="imagenes/${fileName}" alt="${photoData.title}" loading="lazy">
                    <div class="photo-number">#${index + 1}</div>
                </div>
                <figcaption class="photo-info">
                    <h3 class="photo-title">${photoData.title}</h3>
                </figcaption>
            </figure>
        `;

        const imageElement = photoItem.querySelector('img');
        if (imageElement) {
            imageElement.style.cursor = 'pointer';
            imageElement.addEventListener('click', () => openModal(index));
        }

        articlesWrapper.appendChild(photoItem);

        // Insertar artículo si corresponde
        const articleToInsert = articles.find(article => article.position === index + 1);
        if (articleToInsert) {
            const articleElement = document.createElement('div');
            articleElement.className = 'newspaper-article';
            articleElement.innerHTML = `
                <h2 class="article-title">${articleToInsert.title}</h2>
                <p class="article-content">${articleToInsert.content}</p>
            `;
            articlesWrapper.appendChild(articleElement);
        }
    });
}

// -------------------------------
// Modal: Abrir / Cerrar / Actualizar
// -------------------------------
function openModal(index) {
    currentPhotoIndex = index;
    updateModalContent();
    photoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    photoModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function updateModalContent() {
    const photoData = photoTexts[currentPhotoIndex] || {
        title: `Foto ${currentPhotoIndex + 1}`,
        text: ''
    };

    modalImage.src = `imagenes/${photoFiles[currentPhotoIndex]}`;
    modalImage.alt = photoData.title;
    modalTitle.textContent = photoData.title;
    modalText.textContent = photoData.text || ''; // SOLO aquí aparece el texto
    photoCounter.textContent = `${currentPhotoIndex + 1} / ${photoFiles.length}`;
}

// -------------------------------
// Navegación entre fotos
// -------------------------------
function showPrevPhoto() {
    currentPhotoIndex = (currentPhotoIndex - 1 + photoFiles.length) % photoFiles.length;
    updateModalContent();
}

function showNextPhoto() {
    currentPhotoIndex = (currentPhotoIndex + 1) % photoFiles.length;
    updateModalContent();
}

// -------------------------------
// Música
// -------------------------------
function toggleMusic() {
    if (musicPlaying) {
        backgroundMusic.pause();
        musicToggle.classList.remove('playing');
        musicPlaying = false;
    } else {
        backgroundMusic.play().catch(error => console.log('No se pudo reproducir automáticamente:', error));
        musicToggle.classList.add('playing');
        musicPlaying = true;
    }
}

function loadNextSong() {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    backgroundMusic.src = playlist[currentSongIndex];
    backgroundMusic.load();
    if (musicPlaying) backgroundMusic.play().catch(() => {});
}

function initMusic() {
    backgroundMusic.volume = 0.7;
    backgroundMusic.addEventListener('ended', loadNextSong);

    const attemptPlay = () => {
        backgroundMusic.play()
            .then(() => { musicPlaying = true; musicToggle.classList.add('playing'); })
            .catch(() => { musicPlaying = false; });
    };

    attemptPlay();

    const playOnInteraction = () => {
        if (!musicPlaying) {
            backgroundMusic.play().then(() => {
                musicPlaying = true;
                musicToggle.classList.add('playing');
                document.removeEventListener('click', playOnInteraction);
                document.removeEventListener('touchstart', playOnInteraction);
                document.removeEventListener('keydown', playOnInteraction);
            }).catch(() => {});
        }
    };

    document.addEventListener('click', playOnInteraction);
    document.addEventListener('touchstart', playOnInteraction);
    document.addEventListener('keydown', playOnInteraction);
}

// -------------------------------
// Eventos
// -------------------------------
modalClose.addEventListener('click', closeModal);
prevBtn.addEventListener('click', showPrevPhoto);
nextBtn.addEventListener('click', showNextPhoto);
musicToggle.addEventListener('click', toggleMusic);

photoModal.addEventListener('click', e => {
    if (e.target === photoModal) closeModal();
});

document.addEventListener('keydown', e => {
    if (!photoModal.classList.contains('active')) return;
    if (e.key === 'Escape') closeModal();
    else if (e.key === 'ArrowLeft') showPrevPhoto();
    else if (e.key === 'ArrowRight') showNextPhoto();
});

// Swipe táctil
let touchStartX = 0, touchEndX = 0;

photoModal.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
photoModal.addEventListener('touchend', e => { touchEndX = e.changedTouches[0].screenX; handleSwipe(); }, { passive: true });

function handleSwipe() {
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) diff > 0 ? showNextPhoto() : showPrevPhoto();
}

// -------------------------------
// Inicialización
// -------------------------------
document.addEventListener('DOMContentLoaded', () => {
    generateArticles();
    initMusic();
});
