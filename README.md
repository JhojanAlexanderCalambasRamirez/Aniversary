# Galería de Aniversario - Estilo Periódico

Sitio web conmemorativo de aniversario con diseño estilo periódico/revista.

## Características

### Diseño Estilo Periódico
- **Layout alternado**: Fotos a izquierda y derecha alternadamente
- **Artículos con título y texto**: Cada foto tiene su propia "noticia" o historia
- **Tipografía elegante**: Fuentes serif estilo editorial
- **Líneas decorativas**: Detalles visuales que evocan un periódico clásico

### Funcionalidades
- ✨ Efecto de fade-in de 7 segundos al cargar
- 🎵 Reproductor de música de fondo automático con playlist de 3 canciones
- 🔄 Reproducción secuencial automática de las canciones
- 📱 Diseño 100% responsive (laptop, tablet, iPhone 11+)
- 🖼️ Modal para ver fotos en tamaño completo
- ⌨️ Navegación por teclado (flechas, Escape)
- 👆 Gestos táctiles (swipe) en móviles

### Estructura
- **29 fotos** con textos personalizables
- **Navegación anterior/siguiente** en el modal
- **Control de música** con botón flotante

## Personalización

### Editar Textos
Modifica el archivo `js/photo-texts.js` para cambiar los títulos y descripciones de cada foto:

```javascript
{
    title: "Tu título aquí",
    text: "Tu historia o descripción aquí. Puede ser tan larga como desees."
}
```

### Agregar/Cambiar Fotos
1. Coloca tus fotos en la carpeta `imagenes/`
2. Actualiza el array `photoFiles` en `js/gallery.js` con los nombres de tus archivos

### Cambiar Música
La aplicación incluye una playlist de 3 canciones que se reproducen automáticamente en secuencia:
1. `musica/Musica.mp3`
2. `musica/Musica2.mp3`
3. `musica/Musica3.mp3`

Para personalizar:
- Reemplaza los archivos MP3 en la carpeta `musica/`
- O edita el array `playlist` en `js/gallery.js` para agregar/quitar canciones

## Tecnologías
- HTML5
- CSS3 (Grid, Flexbox, Animations)
- JavaScript (Vanilla)
- Diseño responsive con media queries

## Navegador Recomendado
- Chrome, Firefox, Safari, Edge (últimas versiones)
- Optimizado para iPhone 11 y superiores

## Licencia
Proyecto personal
