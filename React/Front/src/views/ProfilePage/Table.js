import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useState } from 'react';


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(marca, Modelo, SistemaOperacional, Processador) {
  return { marca, Modelo, SistemaOperacional, Processador };
}
/* {saida.map(saida => (
  <MenuItem key={saida.idaparelho}>
          {saida.marca}
          {saida.modelo}
          {saida.so}
  </MenuItem>
))} */
const rows = [
  createData('Acer', 'Aspire 5', 'Linux Ubuntu', '8Gb', 'Intel Core i7'),
  createData('Lenovo', "ideapad 330", 'Windows 10 Home', '8Gb', 'AMD Ryzen 5'),
  createData('Acer', 'Aspire 3', 'Linux Mint', '8Gb', 'Intel Core i7'),
  createData('Compaq', "CpQ 12", 'Windows XP Professional', '2Gb', 'Intel Celeron'),
  createData('Lenovo', "ThinkPad", 'Windows 10 Home', '8Gb', 'Intel Core i5'),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  var [lista, setLista] = useState([]);
var requestOptions = {
  method: 'GET',
  redirect: 'follow',
};
var saida = []
async function listar() {
  await fetch("https://sisce.herokuapp.com/sisce/aparelhos", requestOptions)
    .then(response => response.json())
    .then(result => setLista(result))
    .catch(error => console.log('error', error));
}
var obj = ([[lista][0]][0]);
for (var i in obj)
  saida.push(obj[i]);
  console.log(obj)
listar();

  const classes = useStyles();

  return (
    <TableContainer style={{marginBottom:"2em"}} component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <h3 style={{ width: "100%", textAlign: "center" }}>Aparelhos Cadastrados</h3>
          <TableRow >
            <StyledTableCell style={{ backgroundColor: "#0b102d" }}>Marca</StyledTableCell>
            <StyledTableCell style={{ backgroundColor: "#0b102d" }} align="right">Modelo</StyledTableCell>
            <StyledTableCell style={{ backgroundColor: "#0b102d" }} align="right">Sistema Operacional</StyledTableCell>
            <StyledTableCell style={{ backgroundColor: "#0b102d" }} align="right">Processador</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {saida.map((saida) => (
            <StyledTableRow key={saida.idaparelho}>
              <StyledTableCell>
                {saida.marca}
              </StyledTableCell>
              <StyledTableCell align="right">{saida.modelo}</StyledTableCell>
              <StyledTableCell align="right">{saida.so}</StyledTableCell>
              <StyledTableCell align="right">{saida.processador}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}