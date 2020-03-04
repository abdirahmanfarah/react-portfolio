import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    primary: {
      main: "#722ABE"
    },
    secondary: {
      main: "#77BE2A"
    }
  },
  typography: {
    htmlFontSize: 10,
    fontFamily: "Roboto",
    body1: {
      fontSize: "1.7rem",
      fontWeight: 600
    }
  }
});
