import React, { componentDidMount } from 'react';
import { useState } from 'react';
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
import image from "assets/img/back.jpg";
import logoMicks from "assets/img/micks.png";
import { withRouter } from 'react-router-dom';
import PrimarySearchAppBar from "../../BarraSuperior";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container'
import CustomizedMenu from "./Menu"
import Aparelhos from "./Aparelhos";
import CustomizedTables from "./Table"
import OutLinedCard from "./Counts"
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function Dashboard() {

  const classes = useStyles();

  return (
    <div>
      <PrimarySearchAppBar style={{ backgroundColor: "#0b102d" }} />
      <div>
        <br /><br /><br />
      </div>

      <Container fixed>
        <GridContainer>
          <GridItem>
            <CustomizedMenu />
          </GridItem>
        </GridContainer>
        <OutLinedCard />
        <CustomizedTables />
      </Container>
    </div>
  )
}