import { seedProjects, seedSections } from "@/lib/site-data";
import type { Project, Section } from "@/lib/models";

/**
 * Capa de acceso a datos.
 *
 * Fase 2 (actual): lee la semilla en memoria (`site-data.ts`).
 * Fase 3: acá se conectará SQLite (`data/portfolio.db`) y, si la DB no existe
 * o está vacía, se caerá a la semilla actual sin romper la app.
 */

/**
 * Ruta de un proyecto: si tiene prototipo, lleva a la vista de prototipo
 * (iframe full window); si no, a la página de proyecto del Figma.
 */
export function getProjectHref(project: Project): string {
  return project.prototypeUrl
    ? `/prototipo/${project.id}/`
    : `/proyecto/${project.id}/`;
}

let cachedProjects: Project[] | null = null;
let cachedSections: Section[] | null = null;

export async function getProjects(): Promise<Project[]> {
  if (!cachedProjects) {
    cachedProjects = [...seedProjects];
  }

  return cachedProjects;
}

export async function getSections(): Promise<Section[]> {
  if (!cachedSections) {
    cachedSections = [...seedSections];
  }

  return cachedSections;
}

export async function getProjectById(id: string): Promise<Project | null> {
  const projects = await getProjects();

  return projects.find((project) => project.id === id) ?? null;
}

export async function getSectionBySlug(slug: string): Promise<Section | null> {
  const sections = await getSections();

  return sections.find((section) => section.slug === slug) ?? null;
}

export async function getProjectsBySection(section: Section): Promise<Project[]> {
  const projects = await getProjects();

  return section.projectIds
    .map((id) => projects.find((project) => project.id === id))
    .filter((project): project is Project => Boolean(project));
}

/** Proyectos del home, en el orden definido por `homeOrder`. */
export async function getHomeProjects(): Promise<Project[]> {
  const projects = await getProjects();

  return projects
    .filter((project) => typeof project.homeOrder === "number" && project.cover)
    .sort((a, b) => (a.homeOrder ?? 0) - (b.homeOrder ?? 0));
}
