import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@material-ui/core/styles";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@material-ui/core/CssBaseline";
import createCache from "@emotion/cache";
// import themeMain from "../theme";
import themeLight from "../themeLight";
import themeDark from "../themeDark";
import Footer from "../components/Footer";

export const cache = createCache({ key: "css", prepend: true });

export default function App(props: AppProps): JSX.Element {
  const { Component, pageProps } = props;

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const themeColors = prefersDarkMode ? themeDark : themeLight;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <CacheProvider value={cache}>
      <Head>
        <title>Reece Carolan - Developer</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta
          name="description"
          content="Hello! I'm an iOS developer with a passion for user experience and communication."
        />
      </Head>
      {/* <ThemeProvider theme={themeMain}> */}
      <ThemeProvider theme={themeColors}>
        {/* <ThemeProvider theme={(theme) => theme}> */}
        <CssBaseline />
        <Component {...pageProps} />

        <Footer />
      </ThemeProvider>
      {/* </ThemeProvider> */}
    </CacheProvider>
  );
}
