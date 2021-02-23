import React, { useEffect, useState } from "react";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import getTheme from "theme";
import { CssBaseline } from "@material-ui/core";

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
