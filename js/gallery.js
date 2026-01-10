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

// Generar las fotos estilo periódico (grid compacto)
function generateArticles() {
    photoFiles.forEach((fileName, index) => {
        const photoData = photoTexts[index] || {
            title: `Momento ${index + 1}`,
            caption: '',
            modalText: ''
        };

        const photoItem = document.createElement('div');
        photoItem.className = 'photo-item';
        photoItem.setAttribute('data-index', index);

        const hasCaption = photoData.caption && photoData.caption.trim().length > 0;

        photoItem.innerHTML = `
            <figure class="photo-figure">
                <div class="photo-wrapper">
                    <img src="imagenes/${fileName}" alt="${photoData.title}" loading="lazy">
                    <div class="photo-number">#${index + 1}</div>
                </div>
                <figcaption class="photo-info">
                    <h3 class="photo-title">${photoData.title}</h3>
                    ${hasCaption ? `<p class="photo-caption">${photoData.caption}</p>` : ''}
                </figcaption>
            </figure>
        `;

        // Evento de clic en la imagen
        const imageElement = photoItem.querySelector('img');
        if (imageElement) {
            imageElement.style.cursor = 'pointer';
            imageElement.addEventListener('click', () => openModal(index));
        }

        articlesWrapper.appendChild(photoItem);

        // Verificar si hay un artículo que debe aparecer después de esta foto
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

// Abrir modal
function openModal(index) {
    currentPhotoIndex = index;
    updateModalContent();
    photoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Cerrar modal
function closeModal() {
    photoModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Actualizar contenido del modal
function updateModalContent() {
    const photoData = photoTexts[currentPhotoIndex] || {
        title: `Foto ${currentPhotoIndex + 1}`,
        modalText: 'Agrega aquí el texto para esta foto en el archivo photo-texts.js'
    };

    modalImage.src = `imagenes/${photoFiles[currentPhotoIndex]}`;
    modalImage.alt = photoData.title;
    modalTitle.textContent = photoData.title;
    modalText.textContent = photoData.modalText || '';
    photoCounter.textContent = `${currentPhotoIndex + 1} / ${photoFiles.length}`;
}

// Navegación entre fotos
function showPrevPhoto() {
    currentPhotoIndex = (currentPhotoIndex - 1 + photoFiles.length) % photoFiles.length;
    updateModalContent();
}

function showNextPhoto() {
    currentPhotoIndex = (currentPhotoIndex + 1) % photoFiles.length;
    updateModalContent();
}

// Control de música
function toggleMusic() {
    if (musicPlaying) {
        backgroundMusic.pause();
        musicToggle.classList.remove('playing');
        musicPlaying = false;
    } else {
        backgroundMusic.play().catch(error => {
            console.log('No se pudo reproducir la música automáticamente:', error);
        });
        musicToggle.classList.add('playing');
        musicPlaying = true;
    }
}

// Cargar siguiente canción de la playlist
function loadNextSong() {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    backgroundMusic.src = playlist[currentSongIndex];
    backgroundMusic.load();

    if (musicPlaying) {
        backgroundMusic.play()
            .then(() => {
                console.log(`Reproduciendo canción ${currentSongIndex + 1} de ${playlist.length}`);
            })
            .catch((error) => {
                console.log('Error al reproducir siguiente canción:', error);
            });
    }
}

// Intentar reproducir música automáticamente
function initMusic() {
    // Configurar volumen inicial
    backgroundMusic.volume = 0.7;

    // Event listener para cuando termine una canción
    backgroundMusic.addEventListener('ended', () => {
        console.log('Canción terminada, cargando siguiente...');
        loadNextSong();
    });

    // Función para intentar reproducir
    const attemptPlay = () => {
        const playPromise = backgroundMusic.play();

        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    musicPlaying = true;
                    musicToggle.classList.add('playing');
                    console.log('Música reproduciendo automáticamente');
                })
                .catch((error) => {
                    console.log('Reproducción automática bloqueada:', error);
                    musicPlaying = false;
                    musicToggle.classList.remove('playing');
                });
        }
    };

    // Intentar reproducir inmediatamente
    attemptPlay();

    // Intentar reproducir en varios eventos del usuario
    const playOnInteraction = () => {
        if (!musicPlaying) {
            backgroundMusic.play()
                .then(() => {
                    musicPlaying = true;
                    musicToggle.classList.add('playing');
                    // Remover listeners después de reproducir exitosamente
                    document.removeEventListener('click', playOnInteraction);
                    document.removeEventListener('touchstart', playOnInteraction);
                    document.removeEventListener('keydown', playOnInteraction);
                })
                .catch(() => {});
        }
    };

    // Agregar múltiples listeners para diferentes tipos de interacción
    document.addEventListener('click', playOnInteraction);
    document.addEventListener('touchstart', playOnInteraction);
    document.addEventListener('keydown', playOnInteraction);
}

// Event Listeners
modalClose.addEventListener('click', closeModal);
prevBtn.addEventListener('click', showPrevPhoto);
nextBtn.addEventListener('click', showNextPhoto);
musicToggle.addEventListener('click', toggleMusic);

// Cerrar modal al hacer clic fuera del contenido
photoModal.addEventListener('click', (e) => {
    if (e.target === photoModal) {
        closeModal();
    }
});

// Navegación con teclado
document.addEventListener('keydown', (e) => {
    if (photoModal.classList.contains('active')) {
        if (e.key === 'Escape') {
            closeModal();
        } else if (e.key === 'ArrowLeft') {
            showPrevPhoto();
        } else if (e.key === 'ArrowRight') {
            showNextPhoto();
        }
    }
});

// Soporte para gestos táctiles en el modal
let touchStartX = 0;
let touchEndX = 0;

photoModal.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

photoModal.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, { passive: true });

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - siguiente foto
            showNextPhoto();
        } else {
            // Swipe right - foto anterior
            showPrevPhoto();
        }
    }
}

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', () => {
    generateArticles();
    initMusic();
});
