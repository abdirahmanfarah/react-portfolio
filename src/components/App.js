import React, { useState, useEffect, useRef } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import Project from "./projects";
// import Footer from "./footer";
import Contact from "./contact";

//Style
import IconButton from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import Popover from "@material-ui/core/Popover";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "flex-start",
  },
  icon: {
    borderRadius: "200",
  },
});

function App() {
  // const classes = useStyles();
  // const [anchorEl, setAnchorEl] = useState(null);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  // const open = Boolean(anchorEl);
  // const id = open ? "simple-popover" : undefined;

  return (
    <div className="App">
      {/* <div className={classes.root}>
        <IconButton aria-describedby={id} onClick={handleClick}>
          <MenuIcon className={classes.icon} color="primary" fontSize="large" /> */}
      {/* <Typography>Menu</Typography>
        </IconButton>
        <Popover
          id={id}
          open={open}
          anchorReference="anchorPosition"
          anchorPosition={{ top: 35, left: 5 }}
          onClose={handleClose}
          anchororigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformorigin={{
            vertical: "top",
            horizontal: "left",
          }}
          disablePortal
        >
          <MenuList>
            <MenuItem component={Link} to="/" onClick={handleClose}>
              <Typography variant="button" color="secondary">
                Home{" "}
              </Typography>
            </MenuItem>
            <MenuItem component={Link} to="/projects" onClick={handleClose}>
              <Typography color="secondary">Projects</Typography>
            </MenuItem>
            <MenuItem component={Link} to="/contact" onClick={handleClose}>
              <Typography color="secondary">Contacts</Typography>
            </MenuItem>
          </MenuList>
        </Popover>
      </div> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Project} />
        <Route path="/contact" component={Contact} />
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
