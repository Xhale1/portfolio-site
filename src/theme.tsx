import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import type {} from "@mui/material/themeCssVarsAugmentation";

export const theme = responsiveFontSizes(
  createTheme({
    cssVariables: true,
    colorSchemes: {
      light: {
        palette: {
          primary: {
            main: "#2563eb",
          },
          background: {
            default: "#f8fafc",
          },
          text: {
            primary: "#020617",
            secondary: "#334155",
          },
        },
      },
      dark: {
        palette: {
          primary: {
            main: "#bfdbfe",
          },
          background: {
            default: "#020617",
            paper: "#0f172a",
          },
          text: {
            primary: "#f8fafc",
            secondary: "#cbd5e1",
          },
        },
      },
    },
    typography: {
      fontWeightMedium: 600,
      fontFamily: "'Nunito Variable', sans-serif",
      fontSize: 17,
      h1: {
        fontSize: "3rem",
        fontWeight: 600,
        color: "var(--mui-palette-text-primary)",
      },
      h2: {
        fontSize: "1.6rem",
        fontWeight: 600,
        color: "var(--mui-palette-text-primary)",
      },
      h3: {
        fontSize: "1.0rem",
        color: "var(--mui-palette-text-secondary)",
      },
      body1: {
        fontSize: "1.2rem",
        fontWeight: 400,
        color: "var(--mui-palette-text-primary)",
      },
      body2: {
        fontSize: "1.0rem",
        color: "var(--mui-palette-text-secondary)",
      },
    },
    shape: {
      borderRadius: 16,
    },
    components: {
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
        styleOverrides: {
          root: {
            textTransform: "none",
            lineHeight: 1.5,
            borderRadius: 8,
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
  }),
);
