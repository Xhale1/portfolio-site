import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../theme";
import Footer from "../components/Footer";
import Box from "@material-ui/core/Box";

export default function MyApp(props: AppProps): JSX.Element {
  const { Component, pageProps } = props;

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
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ bgcolor: "#f7f7f7" }}>
          <Component {...pageProps} />

          <Footer />
        </Box>
      </ThemeProvider>
    </React.Fragment>
  );
}
