import {
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import { Provider } from 'react-redux'
import React from 'react';
import User from './components/User';
import Users from './components/Users/Users';
import store from "./redux/store";

const App = () => {

  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
