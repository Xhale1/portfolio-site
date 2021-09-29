import { CssBaseline } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect, useState } from "react";
import getTheme from "theme";

type Props = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: Props): JSX.Element {
  const [theme, setTheme] = useState(getTheme(false));

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  useEffect(() => {
    if (process.browser) {
      setTheme(getTheme(prefersDarkMode));
    }
  }, [prefersDarkMode]);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
