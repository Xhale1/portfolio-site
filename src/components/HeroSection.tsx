import React from "react";
import { Typography, Box, Link, Grid } from "@material-ui/core";

export default function HeroSection(): JSX.Element {
  return (
    <Box sx={{ py: 6 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h1">Reece Carolan</Typography>
          <Typography variant="body1">
            San Francisco Bay Area developer and designer.
          </Typography>
          <Box sx={{ my: 3 }}>
            <Link href="tel:6034224533" sx={{ pr: 2 }}>
              (603) 422-4533
            </Link>
            <Link href="mailto:reececarolan@gmail.com">
              reececarolan@gmail.com
            </Link>
          </Box>
          <Link href="https://github.com/Xhale1" rel="noopener" target="_blank">
            GitHub
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}
