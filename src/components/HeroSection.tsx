import { Box, Grid, Link, styled, Typography } from "@mui/material";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function HeroSection() {
  return (
    <Grid container spacing={3} sx={{ py: 6 }}>
      <Grid item xs={12} md={6}>
        <Typography variant="h1">Reece Carolan</Typography>
        <Typography variant="body1">
          Founding full-stack software engineer at{" "}
          <Link href="https://www.trainwell.net">trainwell</Link>.
        </Typography>
        <Box
          sx={{
            my: 3,
            display: "flex",
            justifyContent: "flex-start",
            flexWrap: "wrap",
            listStyle: "none",
            p: 0,
          }}
          component="ul"
        >
          <ListItem>
            <Link href="mailto:reececarolan@gmail.com">
              reececarolan@gmail.com
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://github.com/Xhale1"
              rel="noopener"
              target="_blank"
            >
              GitHub
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/reece-carolan/"
              rel="noopener"
              target="_blank"
            >
              LinkedIn
            </Link>
          </ListItem>
        </Box>
      </Grid>
    </Grid>
  );
}
