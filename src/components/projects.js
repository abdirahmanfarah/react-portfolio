import React from "react";
import styled from "styled-components";
import nasa from "../images/Nasa.png";
import mission from "../images/mission.png";
import life from "../images/Life.png";
import poke from "../images/poke.png";
import { Link } from "react-router-dom";

//Material Ui
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles({
  root: {
    padding: "10px 0",
    backgroundColor: "#78909c",
  },
  media: {
    height: 140,
  },
  header: {
    marginBottom: "2%",
  },
});
const Project = (props) => {
  const classes = useStyles();
  return (
    <Box p={1} height="100vh">
      <Container maxWidth="md">
        <Grid container justify="flex-start">
          <Button
            component={Link}
            to="/"
            variant="outlined"
            color="secondary"
            size="medium"
            startIcon={<ArrowBackIcon />}
            className={classes.header}
          >
            {" "}
            Home{" "}
          </Button>
        </Grid>
        <Cards>
          <Grid
            container
            spacing={4}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid container item xs={10} sm={10} md={6} lg={6}>
              <Card className={classes.root}>
                {/* <CardActionArea> */}
                <CardMedia
                  className={classes.media}
                  image={mission}
                  title="Mission Control"
                />
                <CardContent>
                  <Typography variant="h6">Mission Control</Typography>
                  <Typography variant="body1">
                    This project was a build-on comprising of three groups. My
                    specific group was tasked with implementing the labeling
                    system a program manager would use to categorize the
                    projects they were overseeing. I designed and implemented
                    the backend structure of this system using GraphQl, Prisma,
                    Apollo, and Docker.
                  </Typography>
                </CardContent>
                {/* </CardActionArea> */}
                <CardActions>
                  <Grid container justify="space-evenly">
                    <Button
                      variant="contained"
                      color="primary"
                      size="medium"
                      target="_blank"
                      href="https://github.com/abdirahmanfarah/mission-control-be"
                    >
                      Codebase
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      size="medium"
                      target="_blank"
                      href="https://www.youtube.com/watch?v=WoiOqx4Z_hQ"
                    >
                      Deployment
                    </Button>
                  </Grid>
                </CardActions>
              </Card>
            </Grid>

            <Grid container item xs={10} sm={10} md={6} lg={6}>
              <Card className={classes.root}>
                {/* <CardActionArea> */}
                <CardMedia
                  className={classes.media}
                  image={life}
                  title="Life GPA"
                />
                <CardContent>
                  <Typography variant="h6">Life GPA</Typography>
                  <Typography>
                    Working remotely with 4 developers, we were tasked with
                    building an app that could efficiently track the life habits
                    of invididuals. I designed and built out the habits section
                    the user would use if they wanted to add, update, delete, or
                    merely view all their habits at once. Built with React and
                    Redux.
                  </Typography>
                </CardContent>
                {/* </CardActionArea> */}
                <CardActions>
                  <Grid container justify="space-evenly">
                    <Button
                      variant="contained"
                      color="primary"
                      size="medium"
                      target="_blank"
                      href="https://github.com/abdirahmanfarah/lifegpa-frontend"
                    >
                      Codebase
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      size="medium"
                      target="_blank"
                      href="https://lifegpa-bw.github.io/heather-ui/index.html"
                    >
                      Deployment
                    </Button>
                  </Grid>
                </CardActions>
              </Card>
            </Grid>

            <Grid container item xs={10} sm={10} md={6} lg={6}>
              <Card className={classes.root}>
                {/* <CardActionArea> */}
                <CardMedia
                  className={classes.media}
                  image={nasa}
                  title="Nasa"
                />
                <CardContent>
                  <Typography variant="h6">Nasa Photo of the Day</Typography>
                  <Typography>
                    One of the first sites I built and one I'm still proud of.
                    Everyday Nasa has a photo featured with a description and we
                    were tasked with utilizing REST API to fetch the data and
                    display it on our browsers. Built with React.
                  </Typography>
                </CardContent>
                {/* </CardActionArea> */}
                <CardActions>
                  <Grid container justify="space-evenly">
                    <Button
                      variant="contained"
                      color="primary"
                      size="medium"
                      target="_blank"
                      href="https://github.com/abdirahmanfarah/nasa-photo-of-the-day/tree/abdi"
                    >
                      Codebase
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      size="medium"
                      target="_blank"
                      href="https://nasa-image-daily.netlify.app"
                    >
                      Deployment
                    </Button>
                  </Grid>
                </CardActions>
              </Card>
            </Grid>

            <Grid container item xs={10} sm={10} md={6} lg={6}>
              <Card className={classes.root}>
                {/* <CardActionArea> */}
                <CardMedia
                  className={classes.media}
                  image={poke}
                  title="Poke"
                />
                <CardContent>
                  <Typography variant="h6">Poke-E-Trade</Typography>
                  <Typography>
                    My first attempt at making a game and an extremely fun
                    project to have worked on. The hardest part about it was
                    figuring out how to get Charmander, the character, to move
                    on the screen. Built with React.
                  </Typography>
                </CardContent>
                {/* </CardActionArea> */}
                <CardActions>
                  <Grid container justify="space-evenly">
                    <Button
                      variant="contained"
                      color="primary"
                      size="medium"
                      target="_blank"
                      href="https://github.com/abdirahmanfarah/Front-End-CS-1/tree/abdi"
                    >
                      Codebase
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      size="medium"
                      target="_blank"
                      href="https://pok-e-trade.netlify.app/"
                    >
                      Deployment
                    </Button>
                  </Grid>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Cards>
      </Container>
    </Box>
  );
};

export default Project;

const Cards = styled.div`
  // border: 1px solid black;
  // padding: 25px 45px;
  // margin: auto;
`;
