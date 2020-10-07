import React from "react";
import Typography from "@material-ui/core/Typography";
import MuiLink from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";

export default function Footer() {
  return (
    <Box py={3}>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Built with "}
        <MuiLink color="inherit" href="https://reactjs.org/">
          React.js
        </MuiLink>
        {" and "}
        <MuiLink color="inherit" href="https://nextjs.org/">
          Next.js
        </MuiLink>
      </Typography>
    </Box>
  );
}
