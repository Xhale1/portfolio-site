import { Box, Link, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 3 }}>
      <Typography variant="body2" align="center">
        {"Built with "}
        <Link
          color="inherit"
          target="_blank"
          rel="noopener"
          href="https://reactjs.org/"
        >
          React.js
        </Link>
        {" and "}
        <Link
          color="inherit"
          target="_blank"
          rel="noopener"
          href="https://nextjs.org/"
        >
          Next.js
        </Link>
      </Typography>
      <Typography variant="body2" align="center">
        <Link
          color="inherit"
          target="_blank"
          rel="noopener"
          href="https://github.com/Xhale1/portfolio-site/"
        >
          ❤️ Open Source
        </Link>
      </Typography>
    </Box>
  );
}
