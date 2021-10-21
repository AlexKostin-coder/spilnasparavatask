import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Users from './components/Users';
import User from './components/User';

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
