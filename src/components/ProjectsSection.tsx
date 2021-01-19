import React from "react";
import { Grid } from "@material-ui/core";
import Project from "../models/Project";
import ProjectCard from "./ProjectCard";

type Props = {
  projects: Project[];
};

export default function ProjectsSection(props: Props): JSX.Element {
  const projects = props.projects.map((project) => (
    <ProjectCard project={project} key={project.title} />
  ));

  return (
    <Grid container spacing={3} alignItems="stretch">
      {projects}
    </Grid>
  );
}
