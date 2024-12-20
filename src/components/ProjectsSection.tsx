import Grid from "@mui/material/Grid2";
import type Project from "interfaces/project";
import ProjectCard from "./ProjectCard";

type Props = {
  projects: Project[];
};

export default function ProjectsSection(props: Props) {
  const projects = props.projects.map((project, index) => (
    <ProjectCard project={project} key={index} />
  ));

  return (
    <Grid container spacing={3} alignItems="stretch">
      {projects}
    </Grid>
  );
}
