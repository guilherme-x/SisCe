import React from 'react';
import { useState } from 'react';
// @material-ui/core components
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';
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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles(styles);


export default function Aparelhos() {

  const width = window.innerWidth;
  console.log('width:'+width/6.9)

  const columns = [
    { field: 'id', headerName: 'ID', width: 70, hide: true },
    { field: 'marca', headerName: 'Marca', width: width/7.2 },
    { field: 'modelo', headerName: 'Modelo', width: width/7.2 },
    { field: 'so', headerName: 'Sistema Operacional', width: width/6.9 },
    { field: 'processador', headerName: 'Processador', width: width/6.9 },
    { field: 'mac', headerName: 'Mac', width: width/6.9 },
    { field: 'obs', headerName: 'Observações', width: width/6.9 },
  ];


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

  async function listar() {
    await fetch("https://sisce.herokuapp.com/sisce/aparelhos", requestOptions)
      .then(response => response.json())
      .then(result => lista.setLista = (result))
      .catch(error => console.log('error', error));
  }
  listar();
  var saida = []
  var obj = ([[lista.setLista][0]][0]);
  for (var i in obj)
    saida.push(obj[i]);
  console.log(saida);
  const height = window.innerHeight;
  console.log(height);
  return (
    <div style={{ marginTop: "-50px" }}>
      <h3>Aparelhos Cadastrados</h3>
      <div style={{ height:height/2, width: '100%', border: "solid 1px #0b102d", borderRadius: '4px' }}>
        <DataGrid rows={saida} columns={columns} pageSize={100} checkboxSelection />
      </div>
    </div>
  );
}
