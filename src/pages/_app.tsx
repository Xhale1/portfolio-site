import React from "react";
import { Container } from "@material-ui/core";
import Head from "next/head";
import { AppProps } from "next/app";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import Footer from "components/Footer";
import ThemeProvider from "context/themeContext";

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
    <ThemeProvider>
      <CacheProvider value={cache}>
        <Head>
          <title>Reece Carolan - Developer</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <meta
            name="description"
            content="Hello! I'm an iOS developer with a passion for user experience and communication."
          />
        </Head>
        <Container maxWidth="md">
          <Component {...pageProps} />
        </Container>
        <Footer />
      </CacheProvider>
    </ThemeProvider>
  );
}
