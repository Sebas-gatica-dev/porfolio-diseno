import Link from "next/link";

import { getProjectHref } from "@/lib/data";
import type { Project, Section } from "@/lib/models";

type PortfolioSectionPageProps = {
  section: Section;
  projects: Project[];
};

export default function PortfolioSectionPage({
  section,
  projects,
}: PortfolioSectionPageProps) {
  return (
    <section className="portfolio-page">
      <header className="portfolio-page__header">
        <h1>{section.label}</h1>
        <p>{section.description}</p>
      </header>

      <div className="portfolio-page__grid">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={getProjectHref(project)}
            aria-label={project.title}
            className="project-frame"
          />
        ))}
      </div>
    </section>
  );
}
