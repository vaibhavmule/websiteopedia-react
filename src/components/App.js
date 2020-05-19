import React from 'react';
import { Route, Switch } from "react-router-dom";

import { Container, Box } from '@material-ui/core';

import HomePage from "./home";
import WebSiteInfo from './web-site-info';
import Header from './common/header';

function App()
{
  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/:website" component={WebSiteInfo} />
        </Switch>
      </Box>
    </Container>
  );
}


export default App;
