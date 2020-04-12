import React from "react";
import styled from "styled-components";
import image from "../images/unnamed.jpg";
//Material Ui
import { makeStyles } from "@material-ui/core/styles";
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
    "@media (min-width:1440px)": {
      fontSize: "2.5rem",
    },
  },
  media: {
    height: 100,
    "@media (min-width:2500px)": {
      height: 300,
    },
  },
});
const Project = () => {
  const classes = useStyles();
  return (
    <Box p={1} height="100vh">
      <Cards>
        <Grid
          container
          spacing={8}
          direction="row"
          // justify="space-evenly"
          // alignItems="center"
        >
          <Grid
            container
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            justify="center"
            alignItems="center"
          >
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

          <Grid
            container
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            justify="center"
            alignItems="center"
          >
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

          <Grid
            container
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            justify="center"
            alignItems="center"
          >
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

          <Grid
            container
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            justify="center"
            alignItems="center"
          >
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
    </Box>
  );
};

export default Project;

const Header = styled.h2`
  border: 1px solid black;
`;

const Cards = styled.div`
  border: 1px solid black;
  padding: 25px 20px;
`;
