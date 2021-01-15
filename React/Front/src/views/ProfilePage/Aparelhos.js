import React from 'react';
import { useState } from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import { JsonToTable } from "react-json-to-table";
import CardFooter from "components/Card/CardFooter.js";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import List from '@material-ui/core/List';
import image from "assets/img/back.jpg";
import Header from "components/Header/Header.js";
import HeaderLinks from 'components/Header/HeaderLinks';
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';
import Primary from 'components/Typography/Primary';
const useStyles = makeStyles(styles);

export default function Aparelhos() {
  const classes = useStyles();
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  var [lista, setLista] = useState([]);
  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  fetch("https://sisce.herokuapp.com/sisce/aparelhos", requestOptions)
    .then(response => response.json())
    .then(result => lista.setLista = (result))
    .catch(error => console.log('error', error));
  
    var saida = []
  var obj = ([[lista.setLista][0]][0]);
  for (var i in obj)
    saida.push(obj[i]);
  console.log(saida);
  return (

    <div>
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          filter: "brightness(110%)"
        }}
      >
        <Header>
          <ul>
            <a><li>Cadastrar Aparelho</li></a>
            <a><li>Sair</li></a>
          </ul>
        </Header>
        <div className={classes.container}>
          <GridContainer justify="center">

            <GridItem xs={12} sm={12} md={10}>
              <Card className={classes[cardAnimaton]}>
                <CardHeader color="primary" className={classes.cardHeader}>
                  <h4>Aparelhos</h4>
                </CardHeader>
                <CardBody>
                  <ul>
                    {saida.map(saida => (
                      <li style={{border:'solid 1px #023a65',
                                  padding:'8px',
                                  borderRadius:'4px',
                                  listStyle:'none',
                                  marginBottom:'8px'
                                }} key={saida.idaparelho}>
                        <h4>
                          <strong>Marca: </strong>
                          {saida.marca}
                          <strong style={{marginLeft:'20px'}} >   Modelo: </strong>
                          {saida.modelo}
                          <strong style={{marginLeft:'20px'}} >   Sistema Operacional: </strong>
                          {saida.so}
                          <a href=''><Delete style={{float:'right'}} color='error' /><Edit style={{float:'right', color:'#013b67'}}/></a>

                        </h4>
                      </li>
                    ))}
                  </ul>
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
