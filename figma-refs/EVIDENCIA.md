# Evidencia Figma — análisis previo (migrado desde soff-porfolio, 2026-10-11)

Documento de contexto para continuar la Fase 1 sin volver a golpear la API de Figma.

## Archivo

- Key: `dZQ5i3kajfDHwXHK79V4Mt` — nombre "Porfolio"
- URL: https://www.figma.com/design/dZQ5i3kajfDHwXHK79V4Mt/Porfolio
- Acceso: MCP Framelink + env `FIGMA_API_KEY` (figd_..., seteada a nivel Usuario de Windows, persiste global)
- Para embeds de prototipos (Fase 4) falta: activar link-sharing del archivo en Figma ("Cualquier persona con el enlace puede ver").

## Estado de rate limit (IMPORTANTE)

- 2026-10-11: el endpoint de estructura (`get_figma_data` / REST `/v1/files`) devolvió 429 "retry after ~320.600s (~89h)" → libre aproximadamente el **2026-10-15**.
- El endpoint de imágenes (`download_figma_images` / REST `/v1/images`) tiene bucket **independiente** y funciona.
- Truco: `download_figma_images` renderiza **cualquier node como PNG** aunque no tenga imageRef (se usó para los `ref-*.png`).

## Estructura del archivo

Página "Web" (`0:1`) — flow "Flow 1" arranca en Home `3:8`:

| Frame | Node ID | Tamaño |
|---|---|---|
| Home | 3:8 | 1440x2249 |
| Sobre mi | 109:337 | 1440x1124 |
| Contacto | 114:446 | 1440x916 |
| Moscú (branding) | 132:34 | — |
| Identidad Film "Sweeney Todd" | 334:34 | — |
| Manual de instrucciones | 417:125 | — |
| Ciudades visibles | 379:118 (y 397:190) | — |
| LATIN CINE | 417:102 | — |
| Linkedin | 427:170 | — |

Página "Animación" (`126:118`): component sets de estados (Hover 1-5, botones, etc.).

## Home `3:8` — estructura (get_figma_data, ya fetcheada)

- Fondo `#EFEFEF` · acento azul `#266A96` · naranja secundario `#D96248` · texto `#1F1F1F`
- Tipografía Space Grotesk (Bold 700 / Regular 400 / Light 300), mucha data en SMALL_CAPS
- Nav (no tocar: coincide con el navbar existente): "home" bold activo x=941 y=53, "sobre mí" x=1102, "contacto" x=1263; línea y=98 w=1302 stroke 3px
- Hero: text `#33:104` "Hola, me llamo Sofia y transformo conceptos en realidades visuales" — Regular 40px, x=69 y=236, w=1305 h=123
- **Grilla de 6 tarjetas de proyecto** (2 columnas: x=69 / x=727; tarjetas 644x448; filas y=730 / y=1192 / y=1654):

  | Posición | Instance | Node ID | Proyecto | Portada |
  |---|---|---|---|---|
  | fila1 izq | Hover 5 | 419:164 | LinkedIn | portada-1.png |
  | fila1 der | Hover 4 | 395:186 | Latin Cine | portada-2.png |
  | fila2 izq | Hover 3 | 389:164 | Manual de instrucciones | portada-3.png |
  | fila2 der | Hover 2 | 379:114 | Ciudades visibles | portada-4.png |
  | fila3 izq | Hover 1 | 339:66 | Sweeney Todd | portada-5.png |
  | fila3 der | Hover | 270:125 | Moscú | portada-6.png |

- Cada tarjeta es INSTANCE de un component set "Hover N" (sets: `419:147`, `395:169`, `389:147`, `379:97`, `339:57`, `270:116`). Variante default = solo imagen. Contenido de la variante hover: **pendiente de analizar** (ver `ref-hover-*.png`, se pueden leer visualmente — muestran default + hover lado a lado).
- Footer: Behance 52x52 x=1278 y=2147; LinkedIn x=1347 y=2160
- Chevron de scroll: 26x13.68 en x=710 y=528 (equivale al hero__arrow existente)

## imageRefs de las portadas (para re-descargar si hace falta)

| Portada | Proyecto | imageRef | Node |
|---|---|---|---|
| portada-1 | LinkedIn | de9cb804da29950f9467ab8ecce078e506249b3f | I419:164;419:149 |
| portada-2 | Latin Cine | 12f7802994944260ef21ab8da9bea7c2095fa0e9 | I395:186;395:171 |
| portada-3 | Manual de instrucciones | 6399451b12b2c8e82f32a7dc068179ed5060e0eb | I389:164;389:149 |
| portada-4 | Ciudades visibles | 25726cd4b7bbd8b0bbbb0bfe04341e4da215836b | I379:114;379:99 |
| portada-5 | Sweeney Todd | d8c123d045219338881c325caf41ff496b9fa732 | I339:66;339:36 |
| portada-6 | Moscú | 06f24dded0f599220a552f4f8a41b2a5b8763e95 | I270:125;270:89 |

## Archivos descargados en este repo

- `public/img/portadas/portada-1..6.png` — portadas reales de Figma
- `figma-refs/ref-home.png` — render del frame Home completo (1440x2249)
- `figma-refs/ref-sobre-mi.png` — render frame Sobre mí (1440x1124)
- `figma-refs/ref-contacto.png` — render frame Contacto (1440x916)
- `figma-refs/ref-hover-{linkedin,sweeney,moscu}.png` — renders de 3 component sets hover (default + variante hover lado a lado)

## Observaciones vs app actual (porfolio-diseño)

- `site-data.ts` tiene 8 proyectos en 5 secciones; el Home de Figma muestra **6** (los de la tabla). "Ciudades visibles" **NO existe** en site-data (sí existen "catálogo", "afiche evento", "UNLa - Abremate" que no están en el Home de Figma).
- Mapeo proyecto→sección según site-data: LinkedIn=ux-ui, Latin Cine=ux-ui, Manual=editorial, Sweeney Todd=afiches, Moscú=branding.
- La app actual NO mostraba imágenes en la grilla del home (solo `.project-frame` con título de categoría) — **RESUELTO (2026-10-12)**: `app/page.tsx` ahora renderiza `homeProjects` (6 tarjetas con portada, hover con imagen al 12% + título azul, links a secciones). "Ciudades visibles" queda como tarjeta sin `href` (no existe en site-data; resolver en Fase 2).
- Cambios Fase 1 home: se reemplazó la grilla de secciones (`.home-sections`/`.section-preview`) por `.home-projects`/`.project-card`; las pills del hero ahora navegan a `/ux-ui` etc. (antes scrolleaban a la grilla eliminada).
- Verificación: `ref-hover-{linkedin,latin,manual,ciudades}.png` leídos visualmente para extraer títulos de hover; screenshots en `figma-refs/check-home.png` y `check-hover.png`; lint + tsc + build OK.
- Botón de scroll (chevron) y footer Behance/LinkedIn existen y coinciden — no tocar.
- Accent del repo (`#2E7BAF`) ya es consistente con el azul del Figma (`#266A96`).

## Plan acordado (6 fases) — decisiones del usuario (2026-10-11)

1. **Parity Figma — Home**: ✅ completa (2026-10-13). Grilla 6 tarjetas con portadas + hover, hero azul Regular 40px con corte de línea idéntico al Figma (`max-width: 16.5em`), sin pills de categorías, tarjetas sin links (se linkearán en Fase 4). Navbar/tema/intro/logo intactos.
2. **Modelos de datos**: ✅ completa (2026-10-13). `app/lib/models.ts` (Project: images[], textSections[], cover, homeHoverTitle, homeOrder, figmaNodeId · Section: projectIds). `site-data.ts` = solo semilla (`seedProjects`/`seedSections`); `app/lib/data.ts` = capa de acceso con fallback (Fase 3 conecta SQLite acá). "Ciudades visibles" agregado a afiches con contenido real del frame 379:118.
3. **SQLite** con `node:sqlite` (cero deps), `data/portfolio.db`, APIs `/api/projects` CRUD, seed con datos actuales, Dockerfile → node:24-alpine + volumen.
4. **Prototipos**: ruta `/prototipo/[id]/` con iframe `embed.figma.com/proto` + botón "Volver a proyectos" + link "Abrir en pestaña nueva". starting-point del flow = 3:8.
5. **Admin `/admin`**: login con `ADMIN_PASSWORD` en .env + cookie HMAC (crypto nativo), panel CRUD proyectos + editor textSections + imágenes (subir/reemplazar/eliminar en `public/uploads/`, path en DB).
6. **Responsive** + lint/build + prueba end-to-end. No guardar avances en MEMORY.md.

Decisiones: DB=SQLite node:sqlite · prototipos=iframe inline+back · auth=password env+cookie HMAC · imágenes=sin sharp (solo upload/replace/delete).

## Ronda 2 (2026-10-13): márgenes, redirects y vistas de proyecto/prototipo

Feedback del usuario: la app tenía márgenes incongruentes (navbar 70px vs contenido 100px a 1440px; el Figma usa **69px uniformes**), las tarjetas no redirigían a ningún lado correcto, y faltaban las páginas de proyecto y la vista de prototipo.

### Márgenes (spec)

- **Figma (frame 1440px)**: línea del nav x=69 w=1302; hero/títulos x=69; tarjetas x=69 y x=727 (644px de ancho, gap 14px); footer íconos a la derecha. Es decir: margen **69px** a cada lado, contenido **1302px**.
- **App**: `.site-width` unificado a `min(1302px, calc(100vw - 138px))`. Se eliminaron los overrides de ancho duplicados (`.site-header--about/--portfolio .site-width`, `.about-page.site-width`, `.site-footer--about .site-width`) para que navbar, home, secciones, páginas de proyecto y footer compartan el mismo margen en TODAS las vistas.
- Excepción única: la vista de prototipo (`/prototipo/[id]/`), que es full window bajo el navbar.

### Nuevas vistas

- **`/proyecto/[id]/`** (server component, `app/proyecto/[id]/page.tsx`): título azul bold (`pageTitle`), párrafo angosto max-width 578px (`pageText`) + línea "Realizado en la asignatura..." (`pageNote`), y caja de imagen a todo el ancho del contenido con borde 1px (aspect 1302/445). Fiel a los frames del Figma (ej. 379:118 "Ciudades Visibles"). Sin botón "volver" (en el Figma no existe; la navegación es vía navbar). Fallback: si no hay `pageTitle`/`pageText` se usan `title`/`overview`.
- **`/prototipo/[id]/`** (`app/prototipo/[id]/page.tsx` + `PrototypeView.tsx`): iframe `embed.figma.com` full window bajo el navbar (altura medida en JS = 100dvh − alto real del header). Barra con "← volver a proyectos" (un `Link` a `/#home-projects`: navega al home y hace scroll al ancla `id="home-projects"` de la grilla de proyectos, según pidió el usuario — antes era `router.back()`), título y "abrir en pestaña nueva ↗" (linkea al embed). El footer se oculta en estas rutas (`Footer.tsx` chequea `startsWith("/prototipo/")`). Si el proyecto no tiene `prototypeUrl`, responde 404.
- **Redirects**: `getProjectHref(project)` en `app/lib/data.ts` decide la destino: con `prototypeUrl` → `/prototipo/[id]/`, sin prototipo → `/proyecto/[id]/`. Tanto las tarjetas del home (`HomeClient.tsx`) como los frames de las páginas de sección (`PortfolioSectionPage.tsx`) usan este helper.
- Se eliminó el modal de proyecto (`PortfolioSectionPage` con `useState`/`useEffect` + estilos `.project-modal*`) y la ruta interceptora `app/@modal/(.)proyecto/[id]/` (y su slot `modal` en `layout.tsx`). `framer-motion` solo queda en `IntroOverlay`.

### Modelos (extendidos en Fase 2)

- `Project.pageTitle`, `Project.pageText`, `Project.pageNote` (textos de la página de proyecto) y `Project.prototypeUrl` (embed). Semilla actualizada con los textos reales de los frames del Figma para: Moscú (132:34), Sweeney Todd (334:34), Manual/Candy (417:125), Ciudades visibles (379:118), Latin Cine (417:102) y LinkedIn (427:170).
- **Prototipos (los únicos dos con iframe, según el usuario)**: se usa el endpoint **`/proto/`** (modo presentación interactivo, con controles de navegación ‹ › y mockup), NO `/design/` (que muestra todas las pantallas del editor). Parámetros: `scaling=contain` y, si hace falta, `node-id` + `starting-point-node-id` para arrancar en el frame correcto del flow.
  - LinkedIn: `https://embed.figma.com/proto/Di5H67B5gxTtXnerCww0jI/PROTOTIPO_LinkedIn?node-id=55-1860&starting-point-node-id=55%3A1860&scaling=contain&embed-host=share` (con `node-id`, porque 55:1860 es un frame real con inicio de flow).
  - Latin Cine: `https://embed.figma.com/proto/Slb7WT75NSdOY9BgikFt24/Latin-Cine?scaling=contain&embed-host=share` — **sin `node-id`**. El usuario pasó al principio `node-id=0-1`, que es la raíz del canvas (page node), no un frame: el player quedaba en negro con "0/452". Sin `node-id`, Figma usa el flow starting point por defecto → el frame `Hombrescreen` (#1:70957, launcher del teléfono), que arranca el flow correctamente (1/452).
  - Inicialmente el usuario pasó URLs `/design/` (modo editor); se corrigió a `/proto/` tras su feedback (2026-10-13) para que se vea el prototipo presentable y clicable. Corrección adicional del mismo día: quitar `node-id=0-1` de Latin Cine para que renderice el flow por defecto.
### Nota sobre la Fase 3

El usuario pidió completar esta ronda ANTES de la Fase 3, y además señaló que la Fase 3 "deberá tener modificaciones y deberá ser reformulado" — no arrancar hasta que él lo indique.

## Ronda 3 (2026-10-14): footer, sobre mí y contacto fieles al Figma

Feedback: "debes asegurarte de respetar el diseño a la pie de la letra, verifica todos los detalles del Figma y debes corresponder cómo es realmente el footer, cómo es la página sobre mí y contacto realmente, ya que el diseño es diferente."

Referencias usadas (renders ya descargadas): `figma-refs/ref-home.png`, `ref-sobre-mi.png`, `ref-contacto.png`.

### Footer (frames Home 3:8, Sobre mi 109:337, Contacto 114:446)

- **Figma**: en las 3 páginas el footer son SOLO los íconos Behance + LinkedIn alineados abajo a la derecha. Sin línea divisoria, sin texto de copyright.
- **App antes**: `.site-footer__line` + "©2026 Sg.dev. Todos los derecho reservados" en home/contacto/secciones; en sobre-mi se ocultaban pero el chequeo `pathname === "/sobre-mi"` fallaba con trailing slash (mostraba línea + copyright igual).
- **App ahora**: `Footer.tsx` simplificado — solo `.site-footer__socials` (flex-end). Se eliminaron `site-footer__line`, `site-footer--about`, `site-footer__content` y toda la lógica `isAboutPage`. Se mantiene el oculto en `/prototipo/`. Padding `.site-footer { padding: 44px 0 40px }`.

### Sobre mí (frame 109:337)

- Párrafos con **`<strong>`** donde el Figma tiene bold: "Soff", "Diseño y Comunicación Visual", y el último párrafo completo (además ya existía `.info-page__hero p:last-child { font-weight: 700 }`). Se renderizan con `dangerouslySetInnerHTML` (contenido estático de la semilla).
- Texto corregido: "démosle forma junt**os**" (la app decía "juntas"; el Figma dice "juntos").
- **Estructura de columnas**: "formación academica" ahora contiene SOLO la Licenciatura (UNLa). Los dos cursos de Coderhouse van en una sección **"cursos"** separada (`.about-subsection`, margin-top 66px) dentro de la misma columna izquierda — como en el Figma.
- Orden de cursos = Figma: primero "Curso avanzado" (2025- 2026), después "Curso inicial" (2025- 2025).
- Ambos cursos muestran **ícono ojo** (link al certificado), no texto "Certificado".
- `EducationItem.meta` ahora es opcional y renderiza como `<em class="education-item__meta">` en gris 11px junto al detail (ej. "(duración de 2 meses y medio)"), como en el Figma.
- Nuevas exports en `site-data.ts`: `courseItems`; `educationItems` = solo la licenciatura.

### Contacto (frame 114:446)

- **3 campos** como en el Figma (antes5): se quitaron "apellido" y "telefono" del form y del payload. La API `/api/contact` no se tocó (apellido/teléfono ya eran opcionales con `?? ""`).
- Labels y placeholders con tildes: "dirección de correo electrónico" (antes sin tildes).
- h1 "contacto" a **20px** azul bold (antes usaba el clamp grande; ahora `.contact-page .contact-page__hero h1` comparte el estilo de `.about-page .info-page__hero h1`).
- Labels del form en **azul** (`var(--accent)`, 0.82rem) y borde de inputs/textarea en azul claro (`color-mix accent 55% white`), como en el Figma.
- Botón "enviar" **centrado** bajo el form (`justify-self: center`; antes `start`). `margin-top` del form ajustado a17px.

### Verificación

- lint + tsc + `npm run build` OK (12/12 páginas). Screenshots comparativos vs `ref-sobre-mi.png` / `ref-contacto.png` / `ref-home.png`: footer, estructura de sobre-mi y form de contacto coinciden.

## Skill figma-design-to-code

Instalada pero requiere TemPad Dev MCP (no disponible en este entorno) — usar directamente `get_figma_data` + `download_figma_images`.
