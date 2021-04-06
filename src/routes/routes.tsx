import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Homepage } from '../pages/Homepage';
import { UserDetails } from '../pages/UserDetails';

export const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/user/:username" component={UserDetails} />
      </Switch>
    </Router>
  );
};
