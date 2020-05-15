import React from 'react';
import { Route, Switch } from "react-router-dom";

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import HomePage from "./home";

function App()
{
  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Box>
    </Container>
  );
}


export default App;
