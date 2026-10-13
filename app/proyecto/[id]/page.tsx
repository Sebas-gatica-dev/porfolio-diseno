import Image from "next/image";
import { notFound } from "next/navigation";

import { getProjectById } from "@/lib/data";

type ProyectoPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProyectoPage({ params }: ProyectoPageProps) {
  const { id } = await params;
  const project = await getProjectById(id);

  if (!project) {
    notFound();
  }

  const media = project.cover ?? project.images[0]?.src;

  return (
    <div className="site-width project-page">
      <header className="project-page__header">
        <h1 className="project-page__title">{project.pageTitle ?? project.title}</h1>

        <div className="project-page__text">
          <p>{project.pageText ?? project.overview}</p>
          {project.pageNote ? <p>{project.pageNote}</p> : null}
        </div>
      </header>

      <div className="project-page__media">
        {media ? (
          <Image
            src={media}
            alt={project.title}
            fill
            sizes="(max-width: 900px) 100vw, 1302px"
            className="project-page__media-image"
          />
        ) : null}
      </div>
    </div>
  );
}
