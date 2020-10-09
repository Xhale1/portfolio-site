import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ProjectTile from "../components/ProjectTile";
import Box from "@material-ui/core/Box";
import { projectData } from "../data/Projects";
import Link from "@material-ui/core/Link";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    linkLeft: {
      paddingRight: theme.spacing(2),
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
      <Box py={6}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h1">Reece Carolan</Typography>
            {/* <Typography variant="h4">Open to work</Typography> */}
            <Typography variant="body1">
              San Francisco Bay Area developer and designer. Open to offers :)
            </Typography>
            <Box my={3}>
              <Link href="tel:6034224533" className={classes.linkLeft}>
                (603) 422-4533
              </Link>
              <Link
                href="mailto:reececarolan@gmail.com"
                className={classes.linkLeft}
              >
                reececarolan@gmail.com
              </Link>
            </Box>
            <Link
              href="https://github.com/Xhale1"
              rel="noopener"
              target="_blank"
              className={classes.linkLeft}
            >
              GitHub
            </Link>
          </Grid>
        </Grid>
      </Box>
      <Box mt={0}>
        <Grid container spacing={3} alignItems="stretch">
          {projects}
        </Grid>
      </Box>
    </Container>
  );
}
