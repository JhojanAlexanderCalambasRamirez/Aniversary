// Script para crear partículas tipo luciérnagas de fondo
(function() {
    const firefliesContainer = document.getElementById('fireflies');
    const numberOfFireflies = 100; // Cantidad aumentada para mejor visibilidad

    function createFirefly() {
        const firefly = document.createElement('div');
        firefly.className = 'firefly';

        // Posición inicial aleatoria en toda la pantalla
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        firefly.style.left = `${startX}%`;
        firefly.style.top = `${startY}%`;

        // Movimientos aleatorios GRANDES para visibilidad
        const xRandom1 = (Math.random() - 0.5) * 300; // -150px a 150px
        const yRandom1 = (Math.random() - 0.5) * 300;
        const xRandom2 = (Math.random() - 0.5) * 400; // -200px a 200px
        const yRandom2 = (Math.random() - 0.5) * 400;
        const xRandom3 = (Math.random() - 0.5) * 350; // -175px a 175px
        const yRandom3 = (Math.random() - 0.5) * 350;

        firefly.style.setProperty('--x-random-1', `${xRandom1}px`);
        firefly.style.setProperty('--y-random-1', `${yRandom1}px`);
        firefly.style.setProperty('--x-random-2', `${xRandom2}px`);
        firefly.style.setProperty('--y-random-2', `${yRandom2}px`);
        firefly.style.setProperty('--x-random-3', `${xRandom3}px`);
        firefly.style.setProperty('--y-random-3', `${yRandom3}px`);

        // Duraciones MUY rápidas para movimiento visible
        const moveDuration = 5 + Math.random() * 5; // 5-10 segundos (muy rápido)
        const pulseDuration = 1 + Math.random() * 1; // 1-2 segundos (parpadeo rápido)

        firefly.style.animationDuration = `${moveDuration}s, ${pulseDuration}s`;

        // Retrasos iniciales muy cortos
        const moveDelay = Math.random() * 2; // 0-2 segundos
        const pulseDelay = Math.random() * 1; // 0-1 segundo
        firefly.style.animationDelay = `${moveDelay}s, ${pulseDelay}s`;

        // Tamaño más grande para visibilidad
        const size = 5 + Math.random() * 3; // 5-8px
        firefly.style.width = `${size}px`;
        firefly.style.height = `${size}px`;

        firefliesContainer.appendChild(firefly);

        // Debug: Log para la primera luciérnaga
        if (firefliesContainer.children.length === 1) {
            console.log('Primera luciérnaga:', {
                xRandom1, yRandom1,
                xRandom2, yRandom2,
                xRandom3, yRandom3,
                floatDuration,
                pulseDuration
            });
        }

        // Regenerar valores aleatorios periódicamente para más variedad
        setInterval(() => {
            const newXRandom1 = (Math.random() - 0.5) * 300;
            const newYRandom1 = (Math.random() - 0.5) * 300;
            const newXRandom2 = (Math.random() - 0.5) * 400;
            const newYRandom2 = (Math.random() - 0.5) * 400;
            const newXRandom3 = (Math.random() - 0.5) * 350;
            const newYRandom3 = (Math.random() - 0.5) * 350;

            firefly.style.setProperty('--x-random-1', `${newXRandom1}px`);
            firefly.style.setProperty('--y-random-1', `${newYRandom1}px`);
            firefly.style.setProperty('--x-random-2', `${newXRandom2}px`);
            firefly.style.setProperty('--y-random-2', `${newYRandom2}px`);
            firefly.style.setProperty('--x-random-3', `${newXRandom3}px`);
            firefly.style.setProperty('--y-random-3', `${newYRandom3}px`);
        }, moveDuration * 1000);
    }

    // Crear todas las luciérnagas al cargar
    function initFireflies() {
        for (let i = 0; i < numberOfFireflies; i++) {
            createFirefly();
        }
    }

    // Inicializar inmediatamente al cargar
    document.addEventListener('DOMContentLoaded', () => {
        // Esperar solo 500ms para que se vean rápidamente
        setTimeout(initFireflies, 500);

        // Log para debug
        console.log('Inicializando luciérnagas...');
        setTimeout(() => {
            const count = document.querySelectorAll('.firefly').length;
            console.log(`${count} luciérnagas creadas`);
        }, 1000);
    });
})();
