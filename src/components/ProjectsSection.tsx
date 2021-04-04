import { Grid } from "@material-ui/core";
import Project from "interfaces/Project";
import ProjectCard from "./ProjectCard";

type Props = {
  projects: Project[];
};

export default function ProjectsSection(props: Props): JSX.Element {
  const projects = props.projects.map((project, index) => (
    <ProjectCard project={project} key={index} />
  ));

  return (
    <Grid container spacing={3} alignItems="stretch">
      {projects}
    </Grid>
  );
}
