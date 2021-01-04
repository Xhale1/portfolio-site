import { createMuiTheme } from "@material-ui/core/styles";
import themeCommon from "./themeCommon";

const _ = require("lodash");

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#06c",
    },
    background: {
      default: "#f7f7f7",
    },
    text: {
      primary: "#111111",
      secondary: "#666666",
    },
  },
  typography: {
    h1: {
      color: "#333333",
    },
    h2: {
      color: "#333333",
    },
    h3: {
      color: "#666666",
    },
    body1: {
      color: "#111111",
    },
    body2: {
      color: "#666666",
    },
  },
});

const themeLight = _.merge(theme, themeCommon);

export default themeLight;
