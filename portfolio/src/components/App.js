import React from "react";
import Project from "./projects";
import styled from "styled-components";
import dave from "../images/dave.jpg";

//styles
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";

//Icons
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import MailIcon from "@material-ui/icons/Mail";
import ArrowDropDownCircleOutlinedIcon from "@material-ui/icons/ArrowDropDownCircleOutlined";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    borderRadius: "200",
  },
  hover: {
    "&$hover:hover": {
      backgroundColor: "#d1c4e9",
    },
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Box p={1} height="100vh" width="auto">
        <Grid
          spacing={3}
          container
          direction="column"
          justify="space-between"
          alignItems="center"
        >
          <HeadContainer>
            <Typography variant="h1">Abdirahman Farah</Typography>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
                item
                xs={5}
              >
                <IconButton className={classes.hover}>
                  {" "}
                  <GitHubIcon fontSize="large" />
                </IconButton>
                <IconButton className={classes.hover}>
                  {" "}
                  <LinkedInIcon fontSize="large" />
                </IconButton>
                <IconButton className={classes.hover}>
                  <TwitterIcon fontSize="large" />
                </IconButton>
                <IconButton className={classes.hover}>
                  <MailIcon fontSize="large" />
                </IconButton>
              </Grid>
            </Grid>
            <ButtonOne>
              <Button
                variant="contained"
                color="primary"
                // size="large"
                endIcon={<ArrowDropDownCircleOutlinedIcon />}
                // className={classes.endIcon}
              >
                {" "}
                Projects{" "}
              </Button>
            </ButtonOne>
          </HeadContainer>
        </Grid>
      </Box>
      <Project />
    </div>
  );
}

export default App;

const HeadContainer = styled.div`
  margin: 20vh 0vh;
  // border: 1px solid black;
  width: 100%;
`;
const Name = styled.h1`
  font-size: 4.5rem;
  padding: 15px;
`;

const ButtonOne = styled.div`
  margin-top: 18%;
`;
