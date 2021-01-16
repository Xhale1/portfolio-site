import { createMuiTheme, Theme } from "@material-ui/core/styles";

export default function theme(prefersDarkMode: boolean): Theme {
  return createMuiTheme({
    palette: {
      mode: prefersDarkMode ? "dark" : "light",
      primary: {
        main: "#06c",
      },
    },
    typography: {
      fontWeightMedium: 600,
      fontFamily: "'Nunito', sans-serif",
      fontSize: 17,

      h1: {
        fontFamily: "'Nunito', sans-serif",
        fontSize: "3rem",
        fontWeight: 600,
        color: prefersDarkMode ? "#ffffff" : "#333333",
      },
      h2: {
        fontFamily: "'Nunito', sans-serif",
        fontSize: "1.6rem",
        fontWeight: 600,
        color: prefersDarkMode ? "#ffffff" : "#333333",
      },
      h3: {
        fontFamily: "'Nunito', sans-serif",
        fontSize: "1.0rem",
        color: prefersDarkMode ? "#c1c1c1" : "#666666",
      },
      body1: {
        fontFamily: "'Nunito', sans-serif",
        fontSize: "1.2rem",
        fontWeight: 400,
        color: prefersDarkMode ? "#ffffff" : "#111111",
      },
      body2: {
        fontFamily: "'Nunito', sans-serif",
        fontSize: "1.0rem",
        color: prefersDarkMode ? "#c1c1c1" : "#666666",
      },
    },
  });
}
