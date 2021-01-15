import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import {useState} from 'react';
import "assets/scss/material-kit-react.scss?v=1.9.0";
// pages for this product
import LoginPage from "views/LoginPage/LoginPage.js";


import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));