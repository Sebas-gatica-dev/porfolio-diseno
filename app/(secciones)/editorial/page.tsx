import PortfolioSectionPage from "@/components/PortfolioSectionPage";
import { getProjectsBySection, getSectionBySlug } from "@/lib/data";

export default async function EditorialPage() {
  const section = await getSectionBySlug("editorial");
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
