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

//Icons
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import { Typography } from "@material-ui/core";
import tree from "../assets/starry.jpg";

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
});

const Home = () => {
  const classes = useStyles();

  return (
    <div className="Home">
      <Box p={1} height="100vh">
        <Container maxWidth="md">
          <HeadContainer>
            {/* <Tree>
              <img src={tree} alt="Photo by nate rayfield on Unsplash" />
            </Tree> */}
            <Grid container spacing={2}></Grid>
            <Grid container display="flex" justify="flex-start">
              <Typography variant="h3" color="primary" gutterBottom>
                Hello, my name is abdirahman farah
              </Typography>
            </Grid>
            <Grid container display="flex" justify="flex-end">
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
  // border: 1px solid black;
`;

const ButtonOne = styled.div`
  margin-top: 20%;
`;
const Tree = styled.div`
  height: 200px;
  width: 200px;
`;
