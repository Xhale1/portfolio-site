import { createTheme, responsiveFontSizes, Theme } from "@mui/material/styles";

export default function getTheme(prefersDarkMode: boolean): Theme {
  return responsiveFontSizes(
    createTheme({
      palette: {
        mode: prefersDarkMode ? "dark" : "light",
        primary: {
          main: "#0069c0",
        },
        background: {
          default: prefersDarkMode ? "#424242" : "#F7F7F7",
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
      shape: {
        borderRadius: 10,
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              textTransform: "none",
              lineHeight: 1.5,
            },
          },
        },
        MuiPaper: {
          styleOverrides: {
            rounded: {
              overflow: "hidden",
            },
          },
        },
      },
    })
  );
}
