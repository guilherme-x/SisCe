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
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import image from "assets/img/back.jpg";
import logoMicks from "assets/img/micks.png";
import { withRouter } from 'react-router-dom'; 
import history from "../../history";


const useStyles = makeStyles(styles);
// export const obj ='';
export var isAuthenticated = () => '';
export default function LoginPage({setToken}) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
 
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  var [lista,setLista] = useState([]);
  var urlencoded = new URLSearchParams();
  urlencoded.append("login", login);
  urlencoded.append("senha", senha);
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
  };
  var output;
  const [openLoading, setOpenLoading] = React.useState(false);
  const handleCloseLoading = () => {
      setOpenLoading(false);
  };
  const handleToggleLoading = () => {
      setOpenLoading(!openLoading);
  };

  function SimpleBackdrop() {

      return (
          <div>
              <Backdrop className={classes.backdrop} open={openLoading} onClick={handleCloseLoading}>
                  <CircularProgress color="inherit" />
              </Backdrop>
          </div>
      );
  }
  async function handleSubmit(evt){
    handleCloseLoading();
    evt.preventDefault();
    await fetch("https://sisce.herokuapp.com/sisce/login", requestOptions)
    .then(response => response.text())
    .then(result => lista.setLista = result)
    .catch(error => console.log('error', error));
    
    if (lista.setLista == "true"){
      localStorage.setItem('app-token',"true");
      history.push('/painel');
    }else{
      alert("Informações Incorretas");
    }
}



const imageClasses = classNames(
  classes.imgRaised,
  classes.imgRoundedCircle,
  classes.imgFluid
);
  return (
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
      <img src ={require("assets/img/micks.png")}
      style={{
        transform:"opacity(500%)",
        background:"none",
        display:"flex",
        flex:"1",
        paddingTop:"30px",
        marginBottom:"-80px",
        width:"30%",
        marginRight:"auto",
        marginLeft:"auto",
      }}
      alt="..."/>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form  onSubmit={handleSubmit} className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Login</h4>
                  </CardHeader>
                  <CardBody>
                    <CustomInput
                      name="login"
                      labelText="usuário"
                      id="login"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange:e => setLogin(e.target.value),
                        type: "text",
                        required:true,
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Senha"
                      id="senha"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange:e => setSenha(e.target.value),
                        type: "password",
                        required:"true",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: "off"
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button value="submit" type="submit" simple color="primary" size="lg">
                      Entrar
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        {/* <Footer whiteFont /> */}
      </div>
      <SimpleBackdrop/>
    </div>
  );
};