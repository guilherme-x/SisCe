import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { useState,useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
    root: {
        minWidth: 40,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});
export default function OutlinedCard() {

    // FETCH AQUISIÇÕES

  var [ListaAquisicoes, setListaAquisicoes] = useState([]);
  var requestOptionsAquisicoes = {
    method: 'GET',
    redirect: 'follow',
  };
  var saidaAquisicoes = []
  async function listarAquisicoes() {
    await fetch("https://sisce.herokuapp.com/sisce/aquisicoes", requestOptionsAquisicoes)
      .then(response => response.json())
      .then(result => setListaAquisicoes(result))
      .catch(error => console.log('error', error));
  }
  var obj = ([[ListaAquisicoes][0]][0]);
  for (var i in obj)
    saidaAquisicoes.push(obj[i]);

    // FETCH APARELHOS

    var [lista, setLista] = useState([]);
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
     var saida = []
    async function listarAparelhos() {
      await fetch("https://sisce.herokuapp.com/sisce/aparelhos", requestOptions)
        .then(response => response.json())
        .then(result => setLista(result))
        .catch(error => console.log('error', error));
    }
    var obj = ([[lista][0]][0]);
    for (var i in obj)
      saida.push(obj[i]);
    
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
    const bull = <span className={classes.bullet}>•</span>;
    
    function FecthDataCount(){
        listarAparelhos();
        listarUsuarios();
        listarAquisicoes();
    }
    window.onpageshow = FecthDataCount;

    return (
        <div style={{ display: "flex", marginBottom:"2em", marginTop:"2em" }}>

            <Card style={{ width: "40%", marginRight: "2.2em", boxShadow:"0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)" }} className={classes.root} variant="outlined">
                <CardContent>
                    <Typography style={{ fontSize: "150%" }} className={classes.title} color="textSecondary" gutterBottom>
                        Aparelhos cadastrados
        </Typography>
                    <Typography style={{ color: "#0b102d" }} variant="h2" component="h2">
                        {saida.length}
        </Typography>
                </CardContent>
                <CardActions>
                    <Button color="primary" style={{"&:hover":{color:"red"}}} href="#tabela" size="small">VER TODOS</Button>
                </CardActions>
            </Card>
            <Card style={{ width: "40%", marginRight: "2.2em", boxShadow:"0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)" }} className={classes.root} variant="outlined">
                <CardContent>
                    <Typography style={{ fontSize: "150%" }} className={classes.title} color="textSecondary" gutterBottom>
                        Usuários cadastrados        </Typography>
                    <Typography style={{ color: "#0b102d" }} variant="h2" component="h2">
                        {saidaUsuarios.length}
        </Typography>
                </CardContent>
                <CardActions>
                    <Button href="#tabelaUsuarios" size="small">VER TODOS</Button>
                </CardActions>
            </Card>
            <Card style={{ width: "40%", marginRight: "0",boxShadow:"0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)" }} className={classes.root} variant="outlined">
                <CardContent>
                    <Typography style={{ fontSize: "150%" }} className={classes.title} color="textSecondary" gutterBottom>
                        Locações registradas        </Typography>
                    <Typography style={{ color: "#0b102d" }} variant="h2" component="h2">
                        {saidaAquisicoes.length}
        </Typography>
                </CardContent>
                <CardActions>
                    <Button id="tabela" size="small">VER TODAS</Button>
                </CardActions>
            </Card>
        </div>

    );
}
