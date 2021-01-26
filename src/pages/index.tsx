import React from "react";
import { projectData } from "data/ProjectData";
import HeroSection from "components/HeroSection";
import ProjectsSection from "components/ProjectsSection";

export default function Index(): JSX.Element {
  return (
    <React.Fragment>
      <HeroSection />
      <ProjectsSection projects={projectData} />
    </React.Fragment>
  );
}
