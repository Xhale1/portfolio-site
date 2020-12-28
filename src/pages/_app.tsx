import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@material-ui/core/styles";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@material-ui/core/CssBaseline";
import createCache from "@emotion/cache";
import theme from "../theme";
import Footer from "../components/Footer";

export const cache = createCache({ key: "css", prepend: true });

export default function App(props: AppProps): JSX.Element {
  const { Component, pageProps } = props;

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
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <Box sx={{ bgcolor: "#f7f7f7" }}> */}
        <Component {...pageProps} />

        <Footer />
        {/* </Box> */}
      </ThemeProvider>
    </CacheProvider>
  );
}
