import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Main from '../containers/Main';
import Home from '../components/Home';
import Forecast from '../components/Forecast';


export const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home}/>
      <Route path="forecast/:city" component={Forecast} />
    </Route>
  </Router>
);
