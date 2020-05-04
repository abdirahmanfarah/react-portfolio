import React from "react";
import styled from "styled-components";

//styles
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import GridList from "@material-ui/core/GridList";

//Icons
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import MailIcon from "@material-ui/icons/Mail";
import { Typography } from "@material-ui/core";
import seattle from "../assets/seattle.jpg";

const useStyles = makeStyles({
  root: {
    borderRadius: "200",
  },
  hover: {
    "&$hover:hover": {
      backgroundColor: "#d1c4e9",
    },
  },
  IconButton: {
    fontSize: "3.5rem",
    color: "secondary",
  },
  image: {
    width: "30%",
    height: "30%",
    borderRadius: "200px",
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <div className="Home">
      <Box p={1} height="100vh">
        <Container maxWidth="md">
          <HeadContainer>
            <Typography color="primary" variant="h4">
              Shoot me an email or contact me through social media.
            </Typography>
            <Contact>
              <Grid container spacing={12} justify="center">
                <Grid item xs={2}>
                  <IconButton
                    className={classes.hover}
                    target="_blank"
                    href="https://github.com/abdirahmanfarah"
                  >
                    {" "}
                    <GitHubIcon
                      color="secondary"
                      className={classes.IconButton}
                    />
                  </IconButton>
                </Grid>
                <Grid item xs={2}>
                  <IconButton
                    className={classes.hover}
                    target="_blank"
                    href="https://www.linkedin.com/in/abdirahman-farah/"
                  >
                    {" "}
                    <LinkedInIcon
                      color="secondary"
                      className={classes.IconButton}
                    />
                  </IconButton>
                </Grid>

                <Grid item xs={2}>
                  <IconButton
                    className={classes.hover}
                    target="_blank"
                    href="https://twitter.com/the_real_abdi"
                  >
                    <TwitterIcon
                      color="secondary"
                      className={classes.IconButton}
                    />
                  </IconButton>
                </Grid>

                <Grid item xs={2}>
                  <IconButton
                    className={classes.hover}
                    href="mailto:androidanom@gmail.com"
                    target="_top"
                  >
                    <MailIcon
                      color="secondary"
                      className={classes.IconButton}
                    />
                  </IconButton>
                </Grid>
              </Grid>
            </Contact>
          </HeadContainer>
          {/* <img
            className={classes.image}
            src={seattle}
            alt="Photo by nate rayfield on Unsplash"
          /> */}
        </Container>
      </Box>
    </div>
  );
};

export default Home;

const HeadContainer = styled.div`
  margin-top: 20%;
`;

const Contact = styled.div`
  margin-top: 5%;
  //   margin-bottom: 5%;
`;
