import {
  createMuiTheme,
  Theme,
  responsiveFontSizes,
} from "@material-ui/core/styles";

export default function getTheme(prefersDarkMode: boolean): Theme {
  return responsiveFontSizes(
    createMuiTheme({
      palette: {
        mode: prefersDarkMode ? "dark" : "light",
        primary: {
          main: "#2196F3",
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
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: "12px",
              textTransform: "none",
              fontSize: "1.2rem",
              lineHeight: 1.5,
            },
          },
        },
        MuiDialog: {
          styleOverrides: {
            paper: {
              borderRadius: "12px",
            },
          },
        },
        MuiCard: {
          styleOverrides: {
            root: {
              borderRadius: "12px",
            },
          },
        },
        MuiPaper: {
          styleOverrides: {
            rounded: {
              borderRadius: "12px",
              overflow: "hidden",
            },
          },
        },
      },
    })
  );
}
