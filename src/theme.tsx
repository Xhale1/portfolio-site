import { createMuiTheme } from "@material-ui/core/styles";
import { colors } from "@material-ui/core";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: colors.red.A400,
    },
    background: {
      default: "#fff",
    },
    // text: {
    //   primary: "#f7f7f7",
    //   secondary: colors.red[600],
    // },
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
      fontSize: "2.2rem",
      fontWeight: 400,
      color: "#333333",
    },
  },
});

export default theme;
