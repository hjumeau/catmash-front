import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './scenes/Home';
import Ratings from './scenes/Ratings';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/ratings" component={Ratings}/>
        <Route component={Home}/>
      </Switch>
    </Router>
  );
}
