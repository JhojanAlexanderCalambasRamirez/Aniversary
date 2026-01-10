// ARTÍCULOS DE TEXTO PARA EL PERIÓDICO
// Estos textos aparecen ENTRE las fotos, como artículos de un periódico real
// Son completamente independientes de las fotos

const articles = [
    // Artículo 1 - Aparece después de la foto 3
    {
        position: 2, // Después de qué foto aparece (0 = antes de todas)
        title: "Horizontes compartidos",
        content: "Cada día que vivimos juntos nos recuerda que el futuro no se construye solo con planes, sino con afecto, paciencia y pequeñas decisiones cotidianas. Mirar hacia adelante nos llena de ilusión, porque sabemos que cualquier desafío se vuelve más fácil cuando lo enfrentamos juntos, y que cada sueño que compartimos refuerza la unión que nos mantiene como familia."
    },

    // Artículo 2 - Aparece después de la foto 7
    {
        position: 5,
        title: "Nuestro refugio",
        content: "El hogar no es solo un espacio físico; es donde encontramos consuelo, risas, abrazos y momentos de tranquilidad. Cada rincón guarda memorias, desde charlas improvisadas hasta silencios llenos de cariño, y nos recuerda que lo más valioso es la calidez y la seguridad que sentimos estando juntos, sin importar lo que ocurra afuera."
    },

    // Artículo 3 - Aparece después de la foto 12
    {
        position: 9,
        title: "Agradecimiento diario",
        content: "Nos detenemos a valorar cada instante: la risa inesperada de nuestros hijos, un abrazo compartido, una conversación sincera o simplemente la compañía mutua. La gratitud nos conecta con lo que realmente importa, nos hace más conscientes de la belleza de la vida cotidiana y nos enseña que cada día vivido juntos es un regalo que merece ser apreciado y celebrado."
    },

    {
        position: 12,
        title: "Creciendo juntos",
        content: "Cada experiencia, cada dificultad y cada alegría nos enseña algo nuevo. No solo vemos crecer a nuestros hijos, sino que nosotros mismos aprendemos a ser más pacientes, atentos y amorosos. Las lecciones de la vida se vuelven más significativas cuando se comparten, y nos sentimos afortunados de recorrer este camino de aprendizaje como familia, apoyándonos y celebrando cada pequeño logro."
    },

    {
        position: 16,
        title: "Pequeños/grandes milagros",
        content: "La vida nos sorprende en lo cotidiano: un gesto amable, una sonrisa inesperada, un momento de complicidad o una palabra que reconforta. Estos pequeños milagros son los que dan sentido a nuestros días y nos recuerdan que, aunque el tiempo pase rápido, siempre hay momentos llenos de magia y emoción que construyen recuerdos imborrables y fortalecen nuestro amor familiar."
    },

    {
        position: 20,
        title: "El valor del presente",
        content: "Aprender a detenernos, respirar y disfrutar de lo que tenemos hoy se ha vuelto esencial. La vida no se mide solo por los grandes logros, sino por los pequeños instantes de felicidad que compartimos: una conversación, una mirada cómplice, un abrazo inesperado. Cada momento vivido plenamente se convierte en un recuerdo eterno, y nos enseña que lo más importante está aquí y ahora, juntos."
    },

    {
        position: 24,
        title: "Sueños compartidos",
        content: "Cada plan que hacemos juntos, cada meta que imaginamos y cada ilusión que compartimos nos acerca más. Soñar no es solo imaginar un futuro ideal, sino trabajar juntos para hacerlo posible, disfrutando del camino, celebrando los avances y aprendiendo de los tropiezos. Los sueños compartidos nos enseñan que la familia es el motor que convierte la imaginación en realidad."
    },

    {
        position: 29,
        title: "Amor constante",
        content: "El amor verdadero no es solo un sentimiento; es también acción diaria, cuidado, paciencia y dedicación. Cada gesto, cada atención y cada esfuerzo por mantenernos unidos demuestra que lo que se cultiva con cariño crece y se fortalece con el tiempo. Nuestra familia es testimonio de que el amor constante se refleja en la felicidad de nuestros hijos, en la armonía del hogar y en la fuerza de los lazos que nos unen."
    },
];
