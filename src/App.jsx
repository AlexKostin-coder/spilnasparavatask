import {
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import React from 'react';
import User from './components/User';
import Users from './components/Users/Users';

const App = () => {

  return (
    <Router>
      <Switch>
        <Route path="/user/:userId">
          <User />
        </Route>
        <Route path="/">
          <Users />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
