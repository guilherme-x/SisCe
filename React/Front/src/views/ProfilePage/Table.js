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
import EditIcon from '@material-ui/icons/Edit';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
const PurpleSwitch = withStyles({
  switchBase: {
    color: "#0b102d",
    '&$checked': {
      color: "black",
    },
    '&$checked + $track': {
      backgroundColor: "#000",
    },
  },
  checked: {},
  track: {},
})(Switch);

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
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  // FETCH APARELHOS
  var [listaAparelhos, setListaAparelhos] = useState([]);
  var requestOptionsAparelhos = {
    method: 'GET',
    redirect: 'follow',
  };
  var saidaAparelhos = []
  async function listarAparelhos() {
    await fetch("https://sisce.herokuapp.com/sisce/aparelhos", requestOptionsAparelhos)
      .then(response => response.json())
      .then(result => setListaAparelhos(result))
      .catch(error => console.log('error', error));
  }
  var obj = ([[listaAparelhos][0]][0]);
  for (var i in obj)
    saidaAparelhos.push(obj[i]);


  // FETCH USUÁRIOS

  var [listaUsuarios, setListaUsuarios] = useState([]);
  var requestOptionsUsuarios = {
    method: 'GET',
    redirect: 'follow',
  };
  var saidaUsuarios = []
  async function listarUsuarios() {
    await fetch("https://sisce.herokuapp.com/sisce/usuarios", requestOptionsUsuarios)
      .then(response => response.json())
      .then(result => setListaUsuarios(result))
      .catch(error => console.log('error', error));
  }
  var obj = ([[listaUsuarios][0]][0]);
  for (var i in obj)
    saidaUsuarios.push(obj[i]);

  const classes = useStyles();
  function fetchData() {
    listarUsuarios();
    listarAparelhos();
  }
  window.onload = fetchData;
  return (
    <div>
      <TableContainer style={{ marginBottom: "2em" }} component={Paper}>
        <h3 style={{ width: "100%", textAlign: "center" }}>Aparelhos Cadastrados</h3>

        <Table className={classes.table} aria-label="customized table">

          <TableHead>
            <TableRow >
              <StyledTableCell style={{ backgroundColor: "#0b102d", width: "20%" }} align="center">Marca</StyledTableCell>
              <StyledTableCell style={{ backgroundColor: "#0b102d" }} align="center">Modelo</StyledTableCell>
              <StyledTableCell style={{ backgroundColor: "#0b102d" }} align="center">Sistema Operacional</StyledTableCell>
              <StyledTableCell style={{ backgroundColor: "#0b102d" }} align="center">Processador</StyledTableCell>
              <StyledTableCell style={{ backgroundColor: "#0b102d" }} align="center">Observações</StyledTableCell>
              <StyledTableCell style={{ backgroundColor: "#0b102d" }} align="center">Opções</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {saidaAparelhos.map((saidaAparelhos) => (
              <StyledTableRow key={saidaAparelhos.idaparelho}>
                <StyledTableCell align="center">
                  {saidaAparelhos.marca}
                </StyledTableCell>
                <StyledTableCell align="center">{saidaAparelhos.modelo}</StyledTableCell>
                <StyledTableCell align="center">{saidaAparelhos.so}</StyledTableCell>
                <StyledTableCell align="center">{saidaAparelhos.processador}</StyledTableCell>
                <StyledTableCell align="center">{saidaAparelhos.obs}</StyledTableCell>
                <StyledTableCell align="center"><a><EditIcon style={{ color: "#0b102d" }} /></a>
                  <FormControlLabel style={{ marginLeft: "15px" }}
                    control={<PurpleSwitch onChange={handleChange} name="checkedA" />}
                  />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer style={{ marginBottom: "4em" }} component={Paper}>
        <h3 id="tabelaUsuarios" style={{ width: "100%", textAlign: "center" }}>Usuários Cadastrados</h3>

        <Table className={classes.table} aria-label="customized table">

          <TableHead>
            <TableRow >
              <StyledTableCell style={{ backgroundColor: "#0b102d", width: "20%" }} align="center">Nome</StyledTableCell>
              <StyledTableCell style={{ backgroundColor: "#0b102d" }} align="center">CPF</StyledTableCell>
              <StyledTableCell style={{ backgroundColor: "#0b102d" }} align="center">Telefone</StyledTableCell>
              <StyledTableCell style={{ backgroundColor: "#0b102d" }} align="center">Cargo</StyledTableCell>
              <StyledTableCell style={{ backgroundColor: "#0b102d" }} align="center">Setor</StyledTableCell>
              <StyledTableCell style={{ backgroundColor: "#0b102d" }} align="center">Opções</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {saidaUsuarios.map((saidaUsuarios) => (
              <StyledTableRow key={saidaUsuarios.idusuario}>
                <StyledTableCell align="center">
                  {saidaUsuarios.nome}
                </StyledTableCell>
                <StyledTableCell align="center">{saidaUsuarios.cpf}</StyledTableCell>
                <StyledTableCell align="center">{saidaUsuarios.telefone}</StyledTableCell>
                <StyledTableCell align="center">{saidaUsuarios.cargo}</StyledTableCell>
                <StyledTableCell align="center">{saidaUsuarios.setor}</StyledTableCell>
                <StyledTableCell align="center"><a><EditIcon style={{ color: "#0b102d" }} /></a>
                  <FormControlLabel style={{ marginLeft: "15px" }}
                    control={<PurpleSwitch onChange={handleChange} name="checkedA" />}
                  />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}