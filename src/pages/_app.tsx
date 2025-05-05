import { Container } from "@mui/material";
import { AppCacheProvider } from "@mui/material-nextjs/v15-pagesRouter";
import Footer from "components/Footer";
import ThemeProvider from "context/themeContext";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <AppCacheProvider {...props}>
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
    </AppCacheProvider>
  );
}
