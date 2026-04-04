/// <reference types="vite/client" />
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import fontsourceVariableNunitoCss from "@fontsource-variable/nunito?url";
import { Container, CssBaseline } from "@mui/material";
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import React from "react";
import Footer from "../components/Footer";
import ThemeProvider from "../context/themeContext";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "initial-scale=1, width=device-width",
      },
      {
        title: "Reece Carolan - Software Engineer",
      },
      {
        name: "description",
        content:
          "Hello! I'm a fullstack and iOS developer with a passion for user experience and communication.",
      },
    ],
    links: [
      { rel: "stylesheet", href: fontsourceVariableNunitoCss },
      {
        rel: "icon",
        type: "image/png",
        href: "/icons/favicon-16.png",
        sizes: "16x16",
      },
      {
        rel: "icon",
        type: "image/png",
        href: "/icons/favicon-32.png",
        sizes: "32x32",
      },
      {
        rel: "icon",
        type: "image/png",
        href: "/icons/favicon-48.png",
        sizes: "48x48",
      },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function Providers({ children }: { children: React.ReactNode }) {
  const emotionCache = createCache({ key: "css" });

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Providers>
          <Container component="main" maxWidth="md">
            {children}
          </Container>
          <Footer />
        </Providers>

        <TanStackRouterDevtools position="bottom-right" />
        <Scripts />
      </body>
    </html>
  );
}
