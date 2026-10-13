import HomeClient from "@/components/HomeClient";
import { getHomeProjects } from "@/lib/data";
import { homeIntro } from "@/lib/site-data";

export default async function HomePage() {
  const projects = await getHomeProjects();

  return <HomeClient intro={homeIntro} projects={projects} />;
}
