import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#722ABE",
    },
    secondary: {
      main: "#77BE2A",
    },
  },
  typography: {
    htmlFontSize: 10,
    fontFamily: "Roboto",
    body1: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    h1: {
      fontSize: "7rem",
    },
    h3: {
      "@media (max-width:600px)": {
        fontSize: "2.7rem",
      },
    },
  },
});

export default theme;
