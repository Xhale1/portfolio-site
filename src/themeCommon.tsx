import { ThemeOptions } from "@material-ui/core/styles";

const themeCommon: ThemeOptions = {
  typography: {
    fontWeightMedium: 600,
    fontFamily: "'Nunito', sans-serif",
    fontSize: 17,

    h1: {
      fontFamily: "'Nunito', sans-serif",
      fontSize: "3rem",
      fontWeight: 600,
    },
    h2: {
      fontFamily: "'Nunito', sans-serif",
      fontSize: "1.6rem",
      fontWeight: 600,
    },
    h3: {
      fontFamily: "'Nunito', sans-serif",
      fontSize: "1.0rem",
    },
    body1: {
      fontFamily: "'Nunito', sans-serif",

      fontSize: "1.2rem",
      fontWeight: 400,
    },
    body2: {
      fontFamily: "'Nunito', sans-serif",
      fontSize: "1.0rem",
    },
  },
};

export default themeCommon;
