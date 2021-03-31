import HeroSection from "components/HeroSection";
import ProjectsSection from "components/ProjectsSection";
import { projects } from "data/projects";

export default function Index(): JSX.Element {
  return (
    <>
      <HeroSection />
      <ProjectsSection projects={projects} />
    </>
  );
}
