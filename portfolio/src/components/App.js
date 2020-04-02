import React from "react";
import Project from "./projects";
import styled from "styled-components";

//styles
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

//Icons
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import MailIcon from "@material-ui/icons/Mail";

const useStyles = makeStyles(theme => ({
  marginAutoContainer: {
    width: 100,
    height: 30
  }
}));
function App() {
  return (
    <div className="App">
      <Box p={1} height="100vh">
        <Grid
          spacing={3}
          container
          direction="column"
          justify="space-between"
          alignItems="center"
        >
          <HeadContainer>
            <Name>Abdirahman Farah</Name>
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
                <GitHubIcon fontSize="large" />
                <LinkedInIcon fontSize="large" />
                <TwitterIcon fontSize="large" />
                <MailIcon fontSize="large" />
              </Grid>
            </Grid>
            <ButtonOne>
              <Button variant="contained" color="primary" size="large">
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
  border: 1px solid black;
  width: 100%;
`;
const Name = styled.h1`
  font-size: 4.5rem;
  padding: 15px;
`;

const ButtonOne = styled.div`
  margin-top: 18%;
`;
