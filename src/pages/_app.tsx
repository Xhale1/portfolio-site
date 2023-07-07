import { CacheProvider, type EmotionCache } from "@emotion/react";
import { Container } from "@mui/material";
import Footer from "components/Footer";
import ThemeProvider from "context/themeContext";
import createEmotionCache from "lib/createEmotionCache";
import type { AppProps } from "next/app";
import Head from "next/head";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function App(props: MyAppProps): JSX.Element {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Reece Carolan - Software Engineer</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta
          name="description"
          content="Hello! I'm a fullstack and iOS developer with a passion for user experience and communication."
        />
      </Head>
      <ThemeProvider>
        <Container maxWidth="md">
          <Component {...pageProps} />
        </Container>
        <Footer />
      </ThemeProvider>
    </CacheProvider>
  );
}
