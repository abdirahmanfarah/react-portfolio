import React from "react";
import styled from "styled-components";
import image from "../images/unnamed.jpg";
import mission from "../images/mission.png";
import life from "../images/Life.png";
import sleep from "../images/sleep.png";

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

const useStyles = makeStyles({
  root: {
    padding: "10px 0",
    backgroundColor: "#bcaaa4",
  },
  media: {
    height: 120,
  },
  header: {
    // color: "secondary",
    padding: "20px 0",
  },
});
const Project = (props) => {
  const classes = useStyles();
  return (
    <Box p={1} height="100vh">
      <Typography variant="h3" color="secondary" className={classes.header}>
        Projects
      </Typography>
      <Container maxWidth="md">
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
                <CardActionArea
                // target="_blank"
                // href="https://github.com/abdirahmanfarah/mission-control-be"
                >
                  <CardMedia
                    className={classes.media}
                    image={mission}
                    title="Mission Control"
                  />
                  <CardContent>
                    <Typography>Mission Control</Typography>
                    <Typography variant="body1">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
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
                <CardActionArea
                // target="_blank"
                // href="https://life-gpa.now.sh"
                >
                  <CardMedia
                    className={classes.media}
                    image={life}
                    title="Life GPA"
                  />
                  <CardContent>
                    <Typography>Life GPA</Typography>
                    <Typography>
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
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
                      href="https://life-gpa.now.sh"
                    >
                      Deployment
                    </Button>
                  </Grid>
                </CardActions>
              </Card>
            </Grid>

            <Grid container item xs={10} sm={10} md={6} lg={6}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={sleep}
                    title="Sleep"
                  />
                  <CardContent>
                    <Typography>Sleep Tracker</Typography>
                    <Typography>
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Grid container justify="space-evenly">
                    <Button
                      variant="contained"
                      color="primary"
                      size="medium"
                      target="_blank"
                      href="https://github.com/abdirahmanfarah/Front-End"
                    >
                      Codebase
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      size="medium"
                      target="_blank"
                      href="https://sleeping-tracker.netlify.app/login"
                    >
                      Deployment
                    </Button>
                  </Grid>
                </CardActions>
              </Card>
            </Grid>

            <Grid container item xs={10} sm={10} md={6} lg={6}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={image}
                    title="Big Elephant"
                  />
                  <CardContent>
                    <Typography>Elephant</Typography>
                    <Typography>
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Grid container justify="space-evenly">
                    <Button variant="contained" color="primary" size="medium">
                      Codebase
                    </Button>
                    <Button variant="contained" color="primary" size="medium">
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
  border: 1px solid black;
  // padding: 25px 45px;
  // margin: auto;
`;
