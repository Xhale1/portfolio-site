import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#06c",
    },
    secondary: {
      main: "#19857b",
    },
    background: {
      default: "#fff",
    },
    text: {
      primary: "#111111",
      secondary: "#666666",
    },
  },
  typography: {
    fontWeightMedium: 600,
    fontFamily: "'Nunito', sans-serif",
    fontSize: 17,

    h1: {
      fontSize: "3rem",
      fontWeight: 600,
      color: "#333333",
    },
    h2: {
      fontSize: "1.6rem",
      fontWeight: 600,
      color: "#333333",
    },
    h3: {
      fontSize: "1.0rem",
      color: "#666666",
    },
    body1: {
      fontSize: "1.2rem",
      fontWeight: 400,
      color: "#111111",
    },
    body2: {
      fontSize: "1.0rem",
      color: "#666666",
    },
  },
});

export default theme;
