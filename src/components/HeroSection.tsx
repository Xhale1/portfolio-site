import { Box, Grid, Link, Typography } from "@mui/material";

export default function HeroSection() {
  return (
    <Grid container spacing={3} sx={{ py: 6 }}>
      <Grid item xs={12} md={6}>
        <Typography variant="h1">Reece Carolan</Typography>
        <Typography variant="body1">
          Full-stack software engineer at CoPilot.
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
  );
}
