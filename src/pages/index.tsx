import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
// import Box from '@material-ui/core/Box';
// import ProTip from '../src/ProTip';
// import Link from '../src/Link';
// import Copyright from '../src/Copyright';
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ProjectTile from "../components/ProjectTile";
import Box from "@material-ui/core/Box";
import { projectData } from "../data/Projects";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);

export default function Index() {
  const classes = useStyles();
  const projects = projectData.map((project) => (
    <ProjectTile project={project} key={project.title} />
  ));

  return (
    <Container maxWidth="md">
      <Box my={6}>
        <Typography variant="h1">Reece Carolan</Typography>
        <Grid container spacing={3} alignItems="stretch">
          <Grid item xs={12} md={6}>
            <Typography variant="body1">
              I've spent thousands of hours since turning ten learning to code,
              design, and communicate.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box mt={0}>
        <Grid container spacing={3}>
          {projects}
        </Grid>
      </Box>
    </Container>
  );
}
