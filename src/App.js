/* eslint-disable semi */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/login/login'
import Main from './components/main/main'
//import { Router } from '@material-ui/icons';

function App () {
  return (
    <Router>
      <Switch>
        <Route exact path ="/">
          <Login />
        </Route>
        <Route path="/dashboard">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
