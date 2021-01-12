import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import {useState} from 'react';
import "assets/scss/material-kit-react.scss?v=1.9.0";
// pages for this product
import LoginPage from "views/LoginPage/LoginPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";

import { isAuthenticated } from "views/LoginPage/LoginPage.js";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
/* const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/#", state: { from: props.location } }} />
      )
    }
  />
); */

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/painel' component={ProfilePage}/>
      <Route exact path="/" component={LoginPage} />
      <Route path="/app" component={() =>  <body><script>alert('ok')</script><h1>Sucesso</h1></body>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;