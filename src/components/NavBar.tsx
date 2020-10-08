import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import NavLink from "../components/NavLink";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    // nav: {
    //   height: 80,
    // },
    title: {
      alignItems: "center",
      display: "flex",
    },
    thing: {
      textAlign: "right",
    },
    link: {
      marginLeft: 8,
      color: theme.palette.text.secondary,
    },
    activeLink: {
      color: theme.palette.text.primary,
    },
  })
);

export default function NavBar() {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Box maxWidth="md" height={70} alignItems="center" display="flex">
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          spacing={0}
        >
          <Grid item xs>
            {/* <Typography variant="body1" className={classes.title}>
              Reece Carolan
            </Typography> */}
          </Grid>
          <Grid item xs className={classes.thing}>
            <NavLink href="/">Projects</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
