/* eslint-disable semi */
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
} from "react-router-dom";
import Login from "./components/login/login";
import Main from "./components/main/main";
//import { Router } from '@material-ui/icons';

function App() {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/dashboard">
          <Main />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
