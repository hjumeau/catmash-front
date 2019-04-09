import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './scenes/Home';
import Ratings from './scenes/Ratings';

const App: React.FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Route path="/ratings" component={Ratings}/>
        <Route component={Home}/>
      </Switch>
    </Router>
  );
};

export default App;
