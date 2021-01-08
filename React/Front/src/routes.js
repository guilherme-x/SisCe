import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import {useState} from 'react';
import "assets/scss/material-kit-react.scss?v=1.9.0";
// pages for this product
import LoginPage from "views/LoginPage/LoginPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";

import { isAuthenticated } from "./auth";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <PrivateRoute path="/app" component={() => <h1>Você está logado</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;