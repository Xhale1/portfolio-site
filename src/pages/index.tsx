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

  return (
    <Container maxWidth="md">
      <Typography variant="h1">Hello.</Typography>
      <Box mt={6}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <ProjectTile image="/assets/ImageSquare.jpg" />
          </Grid>
          <Grid item xs={12} md={8}>
            <ProjectTile image="/assets/ImageRectangle.jpg" />
          </Grid>
          <Grid item xs>
            <ProjectTile image="/assets/ImageSquare.jpg" />
          </Grid>
          <Grid item xs>
            <ProjectTile image="/assets/ImageSquare.jpg" />
          </Grid>
          <Grid item xs>
            <ProjectTile image="/assets/ImageSquare.jpg" />
          </Grid>
        </Grid>
      </Box>
    </Container>
    // <Container maxWidth="sm">
    //   <Box my={4}>
    //     <Typography variant="h4" component="h1" gutterBottom>
    //       Next.js with TypeScript example
    //     </Typography>
    //     <Link href="/about" color="secondary">
    //       Go to the about page
    //     </Link>
    //     <ProTip />
    //     <Copyright />
    //   </Box>
    // </Container>
  );
}
