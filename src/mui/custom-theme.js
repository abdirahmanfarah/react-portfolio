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
      fontFamily: "Balsamiq Sans",
      fontSize: "5.5rem",
      "@media (max-width:900px)": {
        // color: "red",
        fontSize: "4.7rem",
      },
      "@media (max-width:600px)": {
        // color: "yellow",
        fontSize: "3.4rem",
      },
    },
    h4: {
      fontFamily: "Balsamiq Sans",
      fontSize: "4.3rem",
      "@media (max-width:900px)": {
        // color: "blue",
        fontSize: "3rem",
      },
      "@media (max-width:600px)": {
        // color: "green",
        fontSize: "2.5rem",
      },
    },
  },
});

export default theme;
