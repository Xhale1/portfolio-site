import { createMuiTheme } from "@material-ui/core/styles";
import themeCommon from "./themeCommon";

const themeDark = createMuiTheme(
  {
    palette: {
      mode: "dark",
      primary: {
        main: "#06c",
      },
      background: {
        // default: "#f7f7f7",
      },
      text: {
        primary: "#ffffff",
        secondary: "#c1c1c1",
      },
    },
    typography: {
      h1: {
        color: "#ffffff",
      },
      h2: {
        color: "#ffffff",
      },
      h3: {
        color: "#c1c1c1",
      },
      body1: {
        color: "#ffffff",
      },
      body2: {
        color: "#c1c1c1",
      },
    },
  },
  themeCommon
);

export default themeDark;
