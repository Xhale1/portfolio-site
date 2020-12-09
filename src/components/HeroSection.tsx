import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    linkLeft: {
      paddingRight: theme.spacing(2),
    },
  })
);

export default function HeroSection(): JSX.Element {
  const classes = useStyles();

  return (
    <Box sx={{ py: 6 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h1">Reece Carolan</Typography>
          <Typography variant="body1">
            San Francisco Bay Area developer and designer.
          </Typography>
          <Box sx={{ my: 3 }}>
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
  );
}
