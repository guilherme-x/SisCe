import React, {componentDidMount} from 'react';
import {Component} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import classNames from "classnames";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import img from "react";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Parallax from "components/Parallax/Parallax.js";
import infoArea from "components/InfoArea/InfoArea.js";
import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/back.jpg";
import logoMicks from "assets/img/micks.png";

class Teste extends Component{
    constructor(props){
        super(props);
        this.state = { name: ''};
      }
}