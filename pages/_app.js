import "../styles/globals.css";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";

import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";

const progress = new ProgressBar({
  size: 8,
  color: "#FFB432",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

const originTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#EC0000 !important",
    },
    secondary: {
      main: "#FFB432",
    },
    text: {
      primary: "#232323",
    },
    error: {
      main: "#EC0000",
    },
    success: {
      main: "#008906",
    },
    warning: {
      main: "#FFB432",
    },
    background: {
      default: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "gordita-regular, Segoe UI, Roboto, sans-serif",
    button: {
      textTransform: "none",
      fontSize: 16,
    },
    h2: {
      fontSize: 24,
      fontWeight: 400,
      "@media (min-width:1024px)": {
        fontSize: 32,
      },
    },
    subtitle1: {
      fontSize: 16,
      fontWeight: 400,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 667,
      md: 768,
      lg: 1024,
      xl: 1440,
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={originTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
