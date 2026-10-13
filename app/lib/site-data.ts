import { withBasePath } from "@/lib/base-path";
import type { Project, Section } from "@/lib/models";

/**
 * Capa de datos semilla (fallback).
 *
 * Fase 2: esta es la única fuente de verdad en memoria.
 * Fase 3: `app/lib/data.ts` intentará leer de SQLite (`data/portfolio.db`)
 * y volverá a estos datos si la DB no existe o está vacía.
 */

export const seedProjects: Project[] = [
  {
    id: "re-diseno-linkedin",
    title: "re-diseño linkedin",
    pageTitle: "LINKEDIN - CODERHOUSE UX/UI AVANZADO",
    subtitle: "Optimización de experiencia para perfiles y networking",
    year: "2026",
    client: "Concept redesign",
    overview:
      "Exploración de mejoras de usabilidad para una plataforma profesional, repensando la lectura del perfil, la jerarquía de acciones y la visualización de vínculos.",
    cover: withBasePath("/img/portadas/portada-1.png"),
    homeHoverTitle: "linkedin - coderhouse ux/ui avanzado",
    homeOrder: 1,
    figmaNodeId: "427:170",
    prototypeUrl:
      "https://embed.figma.com/proto/Di5H67B5gxTtXnerCww0jI/PROTOTIPO_LinkedIn?node-id=55-1860&starting-point-node-id=55%3A1860&scaling=contain&embed-host=share",
    images: [
      { src: withBasePath("/img/portadas/portada-1.png"), alt: "Portada del re-diseño de LinkedIn" },
      { src: withBasePath("/img/ux-ui/test-img.png") },
    ],
    textSections: [
      {
        title: "problema detectado",
        body:
          "La experiencia actual concentra demasiada información al mismo tiempo y vuelve menos claras algunas acciones clave como conectar, seguir o revisar experiencia laboral.",
      },
      {
        title: "propuesta",
        body:
          "Se reorganizaron bloques, se simplificaron acciones primarias y se diseñó una interfaz con más aire para favorecer la lectura y la comparación entre perfiles.",
      },
      {
        title: "aprendizaje",
        body:
          "Este proyecto sirvió para profundizar en diseño de sistemas complejos y en cómo pequeñas decisiones de layout afectan la percepción de confianza y claridad.",
      },
      {
        title: "detalle adicional",
        body:
          "También se contemplaron estados de interacción, consistencia de componentes y comportamiento responsive para distintos puntos de entrada del usuario.",
      },
    ],
  },
  {
    id: "latin-cine",
    title: "latin cine",
    pageTitle: "LATIN CINE - CODERHOUSE UX UI",
    subtitle: "Plataforma editorial de streaming cultural",
    year: "2025",
    client: "Proyecto académico",
    overview:
      "Sistema visual y de experiencia para una plataforma de cine latinoamericano, con foco en navegación simple, descubrimiento de contenido y una interfaz clara para distintos tipos de usuario.",
    cover: withBasePath("/img/portadas/portada-2.png"),
    homeHoverTitle: "latin cine - coderhouse ux/ui",
    homeOrder: 2,
    figmaNodeId: "417:102",
    prototypeUrl:
      "https://embed.figma.com/proto/Slb7WT75NSdOY9BgikFt24/Latin-Cine?scaling=contain&embed-host=share",
    images: [
      { src: withBasePath("/img/portadas/portada-2.png"), alt: "Portada de Latin Cine" },
      { src: withBasePath("/img/ux-ui/test-img.png") },
    ],
    textSections: [
      {
        title: "desafío",
        body:
          "El objetivo fue ordenar una gran cantidad de películas, festivales y notas editoriales dentro de una experiencia que se sintiera contemporánea y fácil de recorrer.",
      },
      {
        title: "proceso",
        body:
          "Se trabajó sobre arquitectura de información, mapa de navegación, wireframes de baja fidelidad y luego una interfaz final con decisiones de tipografía, jerarquía y componentes reutilizables.",
      },
      {
        title: "resultado",
        body:
          "La propuesta final prioriza recorridos rápidos, lectura cómoda y una identidad visual sobria que acompaña el contenido sin competir con él.",
      },
    ],
  },
  {
    id: "manual-de-instrucciones",
    title: "manual de instrucciones",
    pageTitle: "CANDY - MANUAL DE INSTRUCCIONES",
    subtitle: "Pieza editorial técnica con lectura guiada",
    year: "2024",
    client: "Proyecto académico",
    overview:
      "Diseño de un manual de instrucciones donde se plasmaron las características, componentes y descripciones de la heladera Candy Smart Frost. Se trabajó con una propuesta de diseño modular y minimalista, respetando la identidad de la marca.",
    pageText:
      "Diseño de un manual de instrucciones donde se plasmaron las características, componentes y descripciones de la heladera Candy Smart Frost. Se trabajó con una propuesta de diseño modular y minimalista, respetando la identidad de la marca.",
    pageNote: "Realizado en la asignatura Taller de Diseño - Fernanda Ferrari - 2024 - UNLa",
    cover: withBasePath("/img/portadas/portada-3.png"),
    homeHoverTitle: "candy - manual de instrucciones",
    homeOrder: 3,
    figmaNodeId: "417:125",
    images: [
      { src: withBasePath("/img/portadas/portada-3.png"), alt: "Portada del manual de instrucciones Candy" },
      { src: withBasePath("/img/editorial/test-img.png") },
    ],
    textSections: [
      {
        title: "estructura",
        body:
          "Se definió una retícula flexible que permitiera combinar diagramas, títulos, advertencias y pasos secuenciales sin perder orden ni legibilidad.",
      },
      {
        title: "decisiones visuales",
        body:
          "La tipografía, el uso del espacio en blanco y la modulación de pesos se trabajaron para facilitar el escaneo rápido de la información.",
      },
    ],
  },
  {
    id: "ciudades-visibles",
    title: "ciudades visibles",
    pageTitle: "Ciudades Visibles",
    subtitle: "Infografía y afiche sobre las calles de Temperley",
    year: "2023",
    client: "UNLa - Taller de Diseño Orientado",
    overview:
      "Las piezas gráficas presentadas retratan el abandono y la falta de mantenimiento de las calles de Temperley. Tanto la infografía como el afiche buscan generar consciencia y dar voz a una problemática que hace años se ve reflejada en los barrios del conurbano bonaerense.",
    pageText:
      "Las piezas gráficas presentadas retratan el abandono y la falta de mantenimiento de las calles de Temperley. Tanto la infografía como el afiche buscan generar consciencia y dar voz a una problemática que hace años se ve reflejada en los barrios del conurbano bonaerense. Ambas composiciones visuales se han realizado durante el cursado del Taller de Diseño Orientado: Ciudades Visibles, en línea con el proyecto Non Sapere de Civic City.",
    pageNote: "Realizado en la asignatura Diseño Orientado - Cátedra Volpe - 2023 - UNLa",
    cover: withBasePath("/img/portadas/portada-4.png"),
    homeHoverTitle: "ciudades visibles",
    homeOrder: 4,
    figmaNodeId: "379:118",
    images: [
      { src: withBasePath("/img/portadas/portada-4.png"), alt: "Portada de Ciudades visibles" },
    ],
    textSections: [
      {
        title: "proyecto",
        body:
          "Ambas composiciones visuales se han realizado durante el cursado del Taller de Diseño Orientado: Ciudades Visibles, en línea con el proyecto Non Sapere de Civic City.",
      },
      {
        title: "ficha",
        body: "Realizado en la asignatura Diseño Orientado - Cátedra Volpe - 2023 - UNLa",
      },
    ],
  },
  {
    id: "identidad-sweeney-todd",
    title: 'identidad film "Sweeney Todd"',
    pageTitle: 'Identidad Film "Sweeney Todd"',
    subtitle: "Afiche conceptual para universo cinematográfico",
    year: "2024",
    client: "Proyecto académico",
    overview:
      "Diseño de un afiche en donde se pretende interpretar la puesta en escena de Sweeney Todd a través de un diseño incluyente. Se trabajó con imágenes del film en cuestión, más el agregado de recursos tipográficos con un toque de color específico.",
    pageText:
      "Diseño de un afiche en donde se pretende interpretar la puesta en escena de Sweeney Todd a través de un diseño incluyente. Se trabajó con imágenes del film en cuestión, más el agregado de recursos tipográficos con un toque de color específico.",
    pageNote: "Realizado en la asignatura Taller de Diseño - Silvana Scandolini - 2024 - UNLa",
    cover: withBasePath("/img/portadas/portada-5.png"),
    homeHoverTitle: 'identidad film "Sweeney Todd"',
    homeOrder: 5,
    figmaNodeId: "334:34",
    images: [
      { src: withBasePath("/img/portadas/portada-5.png"), alt: "Afiche de Sweeney Todd" },
      { src: withBasePath("/img/afiches/test-img.png") },
    ],
    textSections: [
      {
        title: "búsqueda estética",
        body:
          "Se investigaron referencias visuales del film para trasladar su tono al afiche sin perder personalidad propia dentro de la propuesta gráfica.",
      },
      {
        title: "composición",
        body:
          "La estructura prioriza un punto focal contundente y una lectura escalonada del resto de la información.",
      },
    ],
  },
  {
    id: "moscu-olympic-games",
    title: "moscú olympic games 2023/ visual identity",
    pageTitle: "MOSCÚ Olympic Games 2032// Visual Identity",
    subtitle: "Identidad visual aplicada a evento deportivo",
    year: "2023",
    client: "Proyecto conceptual",
    overview:
      "Sistema de identidad para un evento deportivo de gran escala, desarrollado para adaptarse a soportes editoriales, señalética, piezas promocionales y comunicación digital.",
    pageText:
      "Este proyecto consistió en desarrollar la identidad visual de los Juegos Olímpicos de Moscú en los cuales se integró una imagen conjunta para cada una de las modalidades del evento, las cuales están en constante crecimiento y movimiento, representando así a cada una de las disciplinas participantes.",
    pageNote: "Realizado en la asignatura Diseño 9 - Ditmar Luparello - 2023 - UNLa",
    cover: withBasePath("/img/portadas/portada-6.png"),
    homeHoverTitle: "moscú olympic games 2032 // visual identity",
    homeOrder: 6,
    figmaNodeId: "132:34",
    images: [
      { src: withBasePath("/img/portadas/portada-6.png"), alt: "Identidad visual Moscú Olympic Games" },
      { src: withBasePath("/img/branding/test-img.png") },
    ],
    textSections: [
      {
        title: "universo visual",
        body:
          "Se construyó una identidad con recursos gráficos modulares, contraste cromático y un lenguaje visual energético para transmitir movimiento y escala.",
      },
      {
        title: "aplicaciones",
        body:
          "La propuesta contempla afiches, credenciales, piezas institucionales, banners y elementos de entorno, manteniendo coherencia en todos los puntos de contacto.",
      },
      {
        title: "sistema",
        body:
          "El trabajo buscó que la marca pudiera sostenerse tanto en piezas de alto impacto como en formatos funcionales de uso cotidiano.",
      },
      {
        title: "proyección",
        body:
          "Se desarrolló pensando en crecimiento, escalabilidad y consistencia, de forma que el sistema pudiera extenderse fácilmente a nuevas piezas y escenarios.",
      },
    ],
  },
  {
    id: "catalogo",
    title: "catálogo",
    subtitle: "Sistema editorial para presentación de piezas",
    year: "2025",
    client: "Proyecto cultural",
    overview:
      "Catálogo diseñado para destacar contenido visual y textual con equilibrio, cuidando tanto la narrativa general como el ritmo de cada doble página.",
    images: [
      { src: withBasePath("/img/editorial/test-img.png") },
    ],
    textSections: [
      {
        title: "concepto",
        body:
          "La propuesta parte de una composición sobria que permite que las imágenes respiren, mientras el texto acompaña con una jerarquía precisa.",
      },
      {
        title: "narrativa",
        body:
          "Se pensó la secuencia completa para construir una lectura progresiva, alternando páginas de impacto con otras más informativas.",
      },
      {
        title: "resultado final",
        body:
          "El proyecto logra una presentación consistente del material y una experiencia de lectura más elegante y fluida.",
      },
    ],
  },
  {
    id: "afiche-evento",
    title: "afiche evento",
    subtitle: "Comunicación gráfica de alto impacto",
    year: "2025",
    client: "Evento cultural",
    overview:
      "Diseño de afiche orientado a difusión y recordación, combinando una composición directa con recursos de color y jerarquía tipográfica para máxima visibilidad.",
    images: [
      { src: withBasePath("/img/afiches/test-img.png") },
    ],
    textSections: [
      {
        title: "objetivo",
        body:
          "La pieza debía captar atención a distancia y condensar información esencial sin perder fuerza visual.",
      },
      {
        title: "solución",
        body:
          "Se trabajó con contraste, escalas tipográficas bien marcadas y una distribución de elementos que facilita la lectura inmediata.",
      },
      {
        title: "adaptabilidad",
        body:
          "El sistema visual se pensó para convivir con variantes digitales y recortes para redes sociales.",
      },
    ],
  },
  {
    id: "unla-abremate",
    title: "visual identity | UNLa - Abremate",
    subtitle: "Sistema espacial de orientación e identidad",
    year: "2025",
    client: "UNLa",
    overview:
      "Proyecto de arquigrafía para un espacio institucional, combinando señalética, identidad y experiencia de recorrido dentro de un entorno físico.",
    images: [
      { src: withBasePath("/img/arquigrafia/test-img.png") },
    ],
    textSections: [
      {
        title: "enfoque",
        body:
          "La propuesta integra información funcional y lenguaje visual para que el espacio acompañe al usuario desde el ingreso hasta los puntos clave del recorrido.",
      },
      {
        title: "aplicación",
        body:
          "Se diseñaron criterios de ubicación, escalas tipográficas, materiales y recursos de orientación para distintos escenarios de uso.",
      },
      {
        title: "impacto",
        body:
          "El sistema mejora la lectura del espacio y refuerza la identidad de la institución de una manera clara y contemporánea.",
      },
    ],
  },
];

export const seedSections: Section[] = [
  {
    slug: "ux-ui",
    label: "ux ui",
    description:
      "El diseño ux/ui es el proceso de creación de productos que brindan experiencias significativas a los usuarios y soluciones visuales eficientes.",
    projectIds: ["re-diseno-linkedin", "latin-cine"],
  },
  {
    slug: "editorial",
    label: "editorial",
    description:
      "Es una rama del diseño gráfico especializada en la maquetación, composición y estructuración de publicaciones impresas y digitales como libros, revistas, periódicos y catálogos.",
    projectIds: ["manual-de-instrucciones", "catalogo"],
  },
  {
    slug: "branding",
    label: "branding",
    description:
      'El branding es la estrategia que define el "qué y por qué" de una marca, mientras el diseño gráfico es la ejecución visual que define "cómo se ve", creando una identidad coherente y memorable.',
    projectIds: ["moscu-olympic-games"],
  },
  {
    slug: "afiches",
    label: "afiches",
    description:
      "Pieza de comunicación visual que combina imágenes y texto para transmitir un mensaje de forma rápida, clara e impactante.",
    projectIds: ["identidad-sweeney-todd", "ciudades-visibles", "afiche-evento"],
  },
  {
    slug: "arquigrafia",
    label: "arquigrafía",
    description:
      "Integración de elementos gráficos, tipográficos y de comunicación visual dentro de espacios arquitectónicos para crear una experiencia inmersiva y de marca.",
    projectIds: ["unla-abremate"],
  },
];

export const navigationLinks = [
  { href: "/", label: "home" },
  { href: "/sobre-mi", label: "sobre mí" },
  { href: "/contacto", label: "contacto" },
];

export const homeIntro =
  "Hola, me llamo Sofia y transformo conceptos en realidades visuales";

export const aboutParagraphs = [
  "Hola, mi nombre es Sofia, aunque para todos soy Soff.",
  "Mi camino en el mundo visual empezó con una cámara en la mano. Esa pasión por la fotografía y el arte fue la chispa que me llevó a estudiar Diseño y Comunicación Visual en la UNLa (Universidad Nacional de Lanus), donde hoy curso el tramo final de mi carrera.",
  "Me considero una observadora por naturaleza: disfruto tanto de la historia del arte como de analizar la composición de una película o perderme en un buen disco de indie. Esa curiosidad es la que traslado a cada proyecto, buscando que el diseño no solo sea estético, sino que cuente una historia con valor agregado. Mi objetivo es seguir creciendo en ambientes desafiantes donde pueda aportar mi mirada y, sobre todo, seguir aprendiendo.",
  "¿Tenés una idea en mente? ¡Hablemos y démosle forma juntas!",
];

export type EducationItem = {
  title: string;
  institution: string;
  detail: string;
  meta: string;
  certificateUrl?: string;
};

export const educationItems: EducationItem[] = [
  {
    title: "Licenciatura en Diseño y Comunicación visual.",
    institution: "Universidad Nacional de Lanus (UNLa)",
    detail: "2019- en curso",
    meta: "",
  },
  {
    title: "Curso inicial de diseño UX UI",
    institution: "Coderhouse",
    detail: "2025- 2025 (duración de 3 meses)",
    meta: "Certificado",
    certificateUrl: withBasePath("/certifications/pdf-prueba.pdf"),
  },
  {
    title: "Curso avanzado de diseño UX UI",
    institution: "Coderhouse",
    detail: "2025- 2026 (duración de 2 meses y medio)",
    meta: "Certificado",
    certificateUrl: withBasePath("/certifications/pdf-prueba.pdf"),
  },
];
