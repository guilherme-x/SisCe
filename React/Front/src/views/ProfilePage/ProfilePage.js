import React from 'react';
import {useState} from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import {JsonToTable} from "react-json-to-table";
import CardFooter from "components/Card/CardFooter.js";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import List from '@material-ui/core/List';
import image from "assets/img/back.jpg";

const useStyles = makeStyles(styles);

export default function ProfilePage() {

  const classes = useStyles();
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
var [lista] = useState([]);
var requestOptions = {
  method: 'GET',
  redirect: 'follow',
};

fetch("http://localhost:3003/sisce/aparelhos", requestOptions)
  .then(response => response.json())
  .then(result => lista.setLista = result)
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

          <GridItem xs={12} sm={12} md ={10}>
          <Card className={classes[cardAnimaton]}>
          <CardHeader color="primary" className={classes.cardHeader}>
          <h4>Aparelhos</h4>
          </CardHeader>
          <CardBody>
          <JsonToTable json={lista.setLista}/>
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
