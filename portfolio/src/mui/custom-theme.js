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
      fontSize: "1.7rem",
      // "@media (min-width:600px)": {
      //   fontSize: "2.0rem",
      // },
      "@media (min-width:1440px)": {
        fontSize: "3.2rem",
      },
      "@media (min-width:2500px)": {
        fontSize: "5rem",
      },
      fontWeight: 600,
    },
    h1: {
      fontSize: "7.7rem",
      "@media (max-width:600px)": {
        fontSize: "5.0rem",
      },
      "@media (max-width:780px)": {
        fontSize: "5.0rem",
      },
      "@media (min-width:1440px)": {
        fontSize: "10.0rem",
      },
      "@media (min-width:2500px)": {
        fontSize: "20.0rem",
      },
    },
    // button: {
    //   // fontSize: "1.7rem",
    //   // "@media (min-width:600px)": {
    //   //   fontSize: "2.0rem",
    //   // },
    //   "@media (min-width:1440px)": {
    //     fontSize: "2.5rem",
    //   },
    //   "@media (min-width:2500px)": {
    //     fontSize: "5rem",
    //   },
    //   fontWeight: 600,
    // },
  },
});

export default theme;
