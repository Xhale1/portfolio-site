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
  },
});

export default theme;
