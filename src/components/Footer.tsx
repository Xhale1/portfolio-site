import React from "react";
import Typography from "@material-ui/core/Typography";
import MuiLink from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";

export default function Footer(): JSX.Element {
  return (
    <Box sx={{ py: 3 }}>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Built with "}
        <MuiLink
          color="inherit"
          target="_blank"
          rel="noopener"
          href="https://reactjs.org/"
        >
          React.js
        </MuiLink>
        {" and "}
        <MuiLink
          color="inherit"
          target="_blank"
          rel="noopener"
          href="https://nextjs.org/"
        >
          Next.js
        </MuiLink>
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center">
        <MuiLink
          color="inherit"
          target="_blank"
          rel="noopener"
          href="https://github.com/Xhale1/portfolio-site/"
        >
          ❤️ Open Source
        </MuiLink>
      </Typography>
    </Box>
  );
}
