import PortfolioSectionPage from "@/components/PortfolioSectionPage";
import { getProjectsBySection, getSectionBySlug } from "@/lib/data";

export default async function ArquigrafiaPage() {
  const section = await getSectionBySlug("arquigrafia");
  const projects = section ? await getProjectsBySection(section) : [];

  if (!section) {
    return null;
  }

  return (
    <div className="site-width">
      <PortfolioSectionPage section={section} projects={projects} />
    </div>
  );
}
