import React from "react";
import Container from "@material-ui/core/Container";
import { projectData } from "../data/ProjectData";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";

export default function Index(): JSX.Element {
  return (
    <Container maxWidth="md">
      <HeroSection />
      <ProjectsSection projects={projectData} />
    </Container>
  );
}
