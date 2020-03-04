import React from "react";
import Project from "./projects";
import styled from "styled-components";

//styles
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

function App() {
  return (
    <div className="App">
      <Box bgcolor="red" p={1}>
        <Container maxWidth="sm">
          <Name>Abdirahman Farah</Name>
          <Button variant="contained" color="primary">
            {" "}
            Projects{" "}
          </Button>
        </Container>
      </Box>
      <Project />
    </div>
  );
}

export default App;

const Name = styled.h1`
  font-size: 2.5rem;
`;
