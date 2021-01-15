import React from "react";
import {Route, Redirect} from "react-router-dom";
 const PrivateRoute = props => {
    const isLogged = localStorage.getItem('app-token')=="true";
    return isLogged ? <Route {... props} /> : <Redirect to="/"/>
 }
 export default PrivateRoute;