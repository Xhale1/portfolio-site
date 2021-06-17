import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { Container } from "@material-ui/core";
import Footer from "components/Footer";
import ThemeProvider from "context/themeContext";
import { AppProps } from "next/app";
import Head from "next/head";

const cache = createCache({ key: "css", prepend: true });
cache.compat = true;

export default function App(props: AppProps): JSX.Element {
  const { Component, pageProps } = props;

  return (
    <CacheProvider value={cache}>
      <ThemeProvider>
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
      </ThemeProvider>
    </CacheProvider>
  );
}
