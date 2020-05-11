import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Typical from "react-typical";

//styles
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import MailIcon from "@material-ui/icons/Mail";

//Icons
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    borderRadius: "200",
  },
  button: {
    fontSize: "2rem",
    "@media (max-width:600px)": {
      marginTop: "30%",
    },
  },
  hover: {
    "&$hover:hover": {
      backgroundColor: "#d1c4e9",
    },
  },
  IconButton: {
    fontSize: "4rem",
    color: "secondary",
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <div className="Home">
      <Box p={1} height="100vh">
        <Container maxWidth="md">
          <HeadContainer>
            <Name>
              <Grid container display="flex" justify="flex-start">
                <Typography variant="h3" color="primary" gutterBottom>
                  Abdirahman Farah
                </Typography>
              </Grid>
            </Name>
            <Grid container display="flex" justify="flex-start">
              <Intro>
                <Typography variant="h4" color="secondary" gutterBottom>
                  I am a{" "}
                  <Typical
                    steps={[
                      "developer",
                      3000,
                      "writer",
                      3000,
                      "student",
                      3000,
                      "human.",
                      5000,
                    ]}
                    loop={Infinity}
                    wrapper="b"
                  />
                </Typography>
              </Intro>
            </Grid>
            {/* <Contact> */}
            <Grid container justify="flex-start">
              <Grid>
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
              <Grid>
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

              <Grid>
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

              <Grid>
                <IconButton
                  className={classes.hover}
                  href="mailto:androidanom@gmail.com"
                  target="_top"
                >
                  <MailIcon color="secondary" className={classes.IconButton} />
                </IconButton>
              </Grid>
            </Grid>
            <ButtonOne>
              <Button
                component={Link}
                to="/projects"
                variant="contained"
                color="primary"
                endIcon={<DoubleArrowIcon />}
                size="large"
                className={classes.button}
              >
                Projects
              </Button>
            </ButtonOne>
          </HeadContainer>
        </Container>
      </Box>
    </div>
  );
};

export default Home;

const HeadContainer = styled.div`
  margin-top: 15%;
`;
const Name = styled.div`
  padding-left: 10px;
`;
const Intro = styled.div`
  padding-left: 12px;
`;

const ButtonOne = styled.div`
  margin-top: 20%;
`;
const Tree = styled.div`
  height: 200px;
  width: 200px;
`;
