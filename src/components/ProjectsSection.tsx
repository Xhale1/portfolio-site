import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Project from "../models/Project";
import ProjectTile from "./ProjectTile";

type Props = {
  projects: Project[];
};

export default function ProjectsSection(props: Props) {
  const projects = props.projects.map((project) => (
    <ProjectTile project={project} key={project.title} />
  ));

  return (
    <Box sx={{ mt: 0 }}>
      <Grid container spacing={3} alignItems="stretch">
        {projects}
      </Grid>
    </Box>
  );
}
