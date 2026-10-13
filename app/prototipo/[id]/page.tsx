import { notFound } from "next/navigation";

import PrototypeView from "@/components/PrototypeView";
import { getProjectById } from "@/lib/data";

type PrototipoPageProps = {
  params: Promise<{ id: string }>;
};

export default async function PrototipoPage({ params }: PrototipoPageProps) {
  const { id } = await params;
  const project = await getProjectById(id);

  if (!project?.prototypeUrl) {
    notFound();
  }

  return (
    <PrototypeView
      title={project.pageTitle ?? project.title}
      src={project.prototypeUrl}
    />
  );
}
