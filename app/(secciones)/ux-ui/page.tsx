import PortfolioSectionPage from "@/components/PortfolioSectionPage";
import { getProjectsBySection, getSectionBySlug } from "@/lib/data";

export default async function UxUiPage() {
  const section = await getSectionBySlug("ux-ui");
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
