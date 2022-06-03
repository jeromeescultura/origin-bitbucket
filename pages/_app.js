import "../styles/globals.css";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";

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
    button: {
      textTransform: "none",
    },
    h2: {
      fontSize: 24,
      fontWeight: 400,
      "@media (min-width:1024px)": {
        fontSize: 32,
      },
    },
    subtitle1: {
      fontSize: 14,
      fontWeight: 400,
    },
    p: {
      fontSize: 14,
      color: "#232323",
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
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}

export default MyApp;
