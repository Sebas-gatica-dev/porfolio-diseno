export type TextSection = {
  title: string;
  body: string;
};

export type ImageItem = {
  src: string;
  alt?: string;
};

export type Project = {
  /** Slug único del proyecto; también se usa en URLs (futuro /proyecto/[id]). */
  id: string;
  title: string;
  /** Título tal como aparece en la página de proyecto del Figma (si difiere). */
  pageTitle?: string;
  subtitle: string;
  year: string;
  client: string;
  overview: string;
  /** Texto del párrafo principal en la página de proyecto (frame del Figma). */
  pageText?: string;
  /** Línea final "Realizado en la asignatura ..." de la página de proyecto. */
  pageNote?: string;
  /** Portada mostrada en la grilla del home. */
  cover?: string;
  /** Título en azul que aparece en hover sobre la portada del home. */
  homeHoverTitle?: string;
  /** Orden en la grilla del home (los que no tengan, no aparecen). */
  homeOrder?: number;
  images: ImageItem[];
  textSections: TextSection[];
  /** Node ID del frame del proyecto en Figma (embeds de prototipo, Fase 4). */
  figmaNodeId?: string;
  /** URL de embed del prototipo (embed.figma.com). Si existe, el proyecto abre la vista de prototipo. */
  prototypeUrl?: string;
};

export type Section = {
  slug: string;
  label: string;
  description: string;
  projectIds: string[];
};
