import { createFileRoute } from "@tanstack/react-router";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import { projects } from "../data/projects";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <HeroSection />
      <ProjectsSection projects={projects} />
    </>
  );
}
