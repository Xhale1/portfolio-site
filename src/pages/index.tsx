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
          <Grid item xs={12}>
            <ProjectTile
              title="01. HelloCampus"
              titleColor="#0064E9"
              image="/assets/HelloCampusHero.png"
              description="HelloCampus helps students share and discover events across their college campus. One of its core features is a beautiful native iOS app written in Swift."
              descriptionWidth={6}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <ProjectTile
              title="02. Turtle Fly"
              titleColor="#27ae60"
              image="/assets/ImageRectangle.jpg"
              description="Turtle Fly was #1 in the App Store in 2011. I aquired it in 2016 and grew the downloads by 500% and the revenue by 700%."
              descriptionWidth={12}
            />
          </Grid>
          {/* <Grid item xs>
            <ProjectTile image="/assets/ImageSquare.jpg" />
          </Grid>
          <Grid item xs>
            <ProjectTile image="/assets/ImageSquare.jpg" />
          </Grid>
          <Grid item xs>
            <ProjectTile image="/assets/ImageSquare.jpg" />
          </Grid> */}
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
