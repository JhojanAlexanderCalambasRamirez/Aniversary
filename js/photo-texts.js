const photoTexts = [
    // Foto 1
    {
        title: "Nuestros tesoros",
        text: "Ver cómo crecen juntos nos llena de orgullo y alegría. Su complicidad y cariño nos enseñan lo importante de la familia y la paciencia.e el texto descriptivo para la primera foto. Puedes contar una anécdota, un recuerdo especial, o cualquier mensaje que quieras compartir."
    },

    // Foto 2
    {
        title: "Nuestro presente",
        text: "Aprendemos a disfrutar lo que tenemos, valorando cada instante. Nos enfocamos en vivir con atención y cariño, en cuidar nuestra relación y en compartir amor con nuestros hijos."
    },

    // Foto 3
    {
        title: "Nuestros hijos",
        text: "Ellos son la alegría que nos despierta cada mañana, la motivación que nos impulsa a ser mejores y el recordatorio constante de que nuestro amor se multiplica y se refleja en ellos."
    },

    // Foto 4
    {
        title: "Sueños en construcción",
        text: "Nos emociona imaginar todo lo que aún tienes por descubrir y aprender. Nos hace sentir la importancia de estar presentes, acompañándote con cuidado y amor en cada etapa."
    },

    // Foto 5
    {
        title: "Días de celebración",
        text: "Cada cumpleaños se convierte en un momento especial, lleno de risas, abrazos y cariño. Verlos disfrutar juntos, compartir alegría y sentirse amados nos recuerda la magia de crecer en una familia unida y presente."
    },

    // Foto 6
    {
        title: "Pequeños detalles",
        text: "Cada gesto cotidiano, cada palabra amable y cada mirada significativa fortalece nuestra historia y nos recuerda que estamos construyendo algo valioso y duradero."
    },

    // Foto 7
    {
        title: "Manos unidas",
        text: "Texto Verlos tomar nuestras manos mientras caminamos por lugares desconocidos nos llena de ternura y orgullo. Nos recuerda que su seguridad y felicidad dependen tanto de nosotros como de su curiosidad. la séptima foto."
    },

    // Foto 8
    {
        title: "Citas improvisadas",
        text: "Incluso salir por un helado o caminar por la calle se convierte en un momento para reír y disfrutar juntos."
    },

    // Foto 9
    {
        title: "Nuestro hogar",
        text: "Cada rincón de nuestra casa tiene ecos de risas, abrazos y conversaciones. No importa lo grande o pequeño que sea, lo que realmente importa es la calidez que sentimos al estar juntos."
    },

    // Foto 10
    {
        title: "Creciendo en amor",
        text: "Cada día nuestra familia crece en comprensión, cariño y unión. Vemos reflejado nuestro amor en los gestos de nuestros hijos y en la armonía de nuestro hogar."
    },

    // Foto 11
    {
        title: "Rumbo a la felicidad",
        text: "No importa el destino; lo importante es que vamos juntos, riendo, descubriendo y cuidándonos mientras construimos recuerdos que permanecerán."
    },

    // Foto 12
    {
        title: "Manos pequeñas",
        text: "Cuando tomas nuestras manos sentimos responsabilidad, ternura y alegría al mismo tiempo. Nos enseñas que el amor también se demuestra sosteniendo, acompañando y guiando."
    },

    // Foto 13
    {
        title: "Alegría compartida",
        text: "Cada sonrisa, cada carcajada y cada momento de felicidad se multiplica porque lo vivimos en familia. La alegría compartida se convierte en recuerdos que permanecerán para siempre."
    },

    // Foto 14
    {
        title: "Compañeros de vida",
        text: "Nos apoyamos y acompañamos en cada paso, respetando nuestros tiempos, celebrando logros y aprendiendo de los errores. La compañía mutua nos hace sentir fuertes y completos."
    },

    // Foto 15
    {
        title: "Nuestro futuro",
        text: "Miramos hacia adelante con esperanza y confianza. Planeamos juntos, soñamos juntos y sabemos que lo que construimos hoy será la base de la felicidad de nuestra familia mañana."
    },

    // Foto 16
    {
        title: "Rincones escondidos",
        text: "Descubrir plazas, fuentes y parques poco conocidos nos hace sentir que cada viaje guarda secretos especiales solo para nuestra familia."
    },

    // Foto 17
    {
        title: "Mi alegría",
        text: "Cada día contigo nos recuerda lo afortunados que somos. Ver cómo sonríes ante lo simple y cómo disfrutas cada instante nos llena de una felicidad que no se puede medir, y nos hace valorar aún más cada momento juntos."
    },

    // Foto 18
    {
        title: "Caminos compartidos",
        text: "Cada destino nos enseña que lo mejor no es solo llegar, sino recorrerlo juntos, tomados de la mano y disfrutando de cada instante."
    },

    // Foto 19
    {
        title: "Nuestro equipo",
        text: "Somos un equipo en todo: en decisiones, en cuidado de nuestros hijos, en la rutina y en los momentos importantes. Juntos enfrentamos los retos y celebramos las alegrías, siempre como un solo corazón."
    },

    // Foto 20
    {
        title: "Manos que guían",
        text: "Mientras exploramos, les mostramos el camino, los cuidamos y los acompañamos. Ellos crecen confiados, seguros y llenos de alegría por descubrir."
    },

    // Foto 21
    {
        title: "Corazón de hogar",
        text: "La esencia de nuestra familia se percibe en cada abrazo, en cada sonrisa y en cada gesto que hacemos por amor y cuidado mutuo."
    },

    // Foto 22
    {
        title: "Tiempo juntos",
        text: "Cada instante compartido es un regalo. Nos detenemos a disfrutar, a valorar y a agradecer la vida que tenemos, conscientes de lo afortunados que somos."
    },

    // Foto 23
    {
        title: "Historias para contar",
        text: "Cada lugar visitado nos deja anécdotas que luego recordamos con cariño. Son historias sencillas, pero significativas, que forman parte de nuestra memoria familiar."
    },

    // Foto 24
    {
        title: "Nuestro abrazo",
        text: "A veces no hacen falta palabras. Un abrazo dice todo lo que sentimos, nos reconforta y nos recuerda que siempre somos un refugio seguro el uno para el otro."
    },

    // Foto 25
    {
        title: "Siempre nosotros",
        text: "Hoy celebramos no solo un aniversario, sino todos los días que hemos compartido, nuestro amor, nuestra vida y la familia que hemos creado juntos."
    },

    // Foto 26
    {
        title: "Orgullo diario",
        text: "Verlos crecer, aprender y enfrentarte a pequeñas dificultades nos llena de orgullo. Cada paso que das nos confirma que estamos acompañándote bien, y nos motiva a seguir guiándote con amor."
    },

    // Foto 27
    {
        title: "Raíces y alas",
        text: "Nuestra familia nos da estabilidad y fuerza, pero también la libertad para crecer y soñar. Es un equilibrio perfecto entre seguridad y expansión, entre cuidado y confianza."
    },

    // Foto 28
    {
        title: "Pequeños exploradores",
        text: "Las risas y la curiosidad son la chispa que hace que cualquier paseo se transforme en aventura. Nos recuerdan que lo simple, como caminar por un parque o mirar el cielo, se vuelve especial contigo al lado"
    },

    // Foto 29
    {
        title: "Amor sin fronteras",
        text: "Desde países distintos y culturas diferentes, sus caminos se cruzaron para dar inicio a una historia basada en el respeto, la comprensión y el amor verdadero. Juntos demostraron que cuando el corazón elige, no existen distancias ni límites."
    }
];
