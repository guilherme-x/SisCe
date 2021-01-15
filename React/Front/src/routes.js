import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import {useState} from 'react';
import "assets/scss/material-kit-react.scss?v=1.9.0";
// pages for this product
import LoginPage from "views/LoginPage/LoginPage.js";
import Aparelhos from "views/ProfilePage/Aparelhos.js";
import history from "../src/history";
import { isAuthenticated } from "views/LoginPage/LoginPage.js";
import notFound from "../src/notFound.js"
import { BrowserRouter, Route,Router, Switch, Redirect } from "react-router-dom";
import PrivateRoute from"./privateRoute"
import Dashboard from "views/ProfilePage/Dashboard";

const Routes = () => (
  <Router history={history}>
    <Switch>
      <PrivateRoute path='/painel' component={Dashboard}/>
      <Route path="/aparelhos" component={Aparelhos}/>
      <Route exact path="/" component={LoginPage} />
      <Route path="/app" component={() =>  <body><script>alert('ok')</script><h1>Sucesso</h1></body>} />
      <Route component={notFound}/>
    </Switch>
  </Router>
);

export default Routes;