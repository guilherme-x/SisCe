import React, {componentDidMount} from 'react';
import {useState} from 'react';
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
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import image from "assets/img/back.jpg";
import logoMicks from "assets/img/micks.png";
import { withRouter } from 'react-router-dom'; 
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import {ListItemText } from '@material-ui/core';

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {

  const classes = useStyles();
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  const resultado = (res) => {
    var saida = res;
    alert(saida);
   return null;
   };
  fetch("172.17.1.190:3003/sisce/aparelhos", requestOptions)
    .then(response => resultado(response.text()))
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
return(

  <div>
    <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          filter:"brightness(110%)"
        }}
      >
      <div className={classes.container}>
        <GridContainer justify="center">

          <GridItem xs={12} sm={12} md ={6}>
          <Card className={classes[cardAnimaton]}>
          <CardHeader color="primary" className={classes.cardHeader}>
          <h4>Aparelhos</h4>
          </CardHeader>
          <CardBody>
          <List>
            <ListItem button>
              <ListItemText primary="Item 1"/>
            </ListItem>
          </List>
          </CardBody>
          <CardFooter>

          </CardFooter>
        </Card>
          </GridItem>


          <GridItem xs={12} sm={12} md ={6}>
          <Card className={classes[cardAnimaton]}>
          <CardHeader color="primary" className={classes.cardHeader}>
          <h4>Usuários</h4>
          </CardHeader>
          <CardBody>

          </CardBody>
          <CardFooter>

          </CardFooter>
        </Card>
          </GridItem>
        
      </GridContainer>
    </div>
  </div>
</div>
);

}
