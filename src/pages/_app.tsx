import React from "react";
import { Container, useMediaQuery } from "@material-ui/core";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../theme";
import Footer from "../components/Footer";

// export const cache = createCache({ key: 'css', prepend: true });

export default function App(props: AppProps): JSX.Element {
  const { Component, pageProps } = props;

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const dynamicTheme = React.useMemo(() => theme(prefersDarkMode), [
    prefersDarkMode,
  ]);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Reece Carolan - Developer</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta
          name="description"
          content="Hello! I'm an iOS developer with a passion for user experience and communication."
        />
      </Head>
      <ThemeProvider theme={dynamicTheme}>
        <CssBaseline />
        <Container maxWidth="md">
          <Component {...pageProps} />
        </Container>
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
}
