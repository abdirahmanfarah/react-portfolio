import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import Project from "./projects";
import Contact from "./contact";

//Style

import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

// const useStyles = makeStyles({
//   root: {
//     display: "flex",
//     justifyContent: "flex-start",
//   },
//   icon: {
//     borderRadius: "200",
//   },
// });

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Project} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
