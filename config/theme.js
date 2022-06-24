import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#EC0000",
    },
    secondary: {
      main: "#FFB432",
    },
    text: {
      primary: "#232323",
    },
    error: {
      main: "#EC0000 ",
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

export default theme;
