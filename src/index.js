import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";

//Styles
import theme from "./mui/custom-theme";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseLine from "@material-ui/core/CssBaseline";
import "./styles/index.css";
import "./styles/App.css";

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseLine />
    <Router>
      <App />
    </Router>
  </MuiThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
