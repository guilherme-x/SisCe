import React, { Component } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView, 
  Image,
  Keyboard,
  TextInput,
  TouchableOpacity,
  Button
  } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import 'react-native-gesture-handler';

function Login({navigation}) {
    return (
      <KeyboardAvoidingView keyboardVerticalOffset = {-500} style = {{ flex: 1 }} 
      behavior = "padding" style={styles.background}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={stylesLog.containerLogoLogin}>
        <Image source={require('./assets/micks.png')}/>
      </View>

      <View style={stylesLog.container}>
      <Text style={stylesCad.infoText} >Faça login.</Text>
        <TextInput style={styles.input}
        placeholder="Usuário"
        placeholderTextColor="#0C93D4"
        autoCorrect={false}
        onChangeText ={()=>{}}
        />
        <TextInput style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#0C93D4"
        autoCorrect={false}
        onChangeText ={()=>{}}
        secureTextEntry
        />

        <TouchableOpacity style={stylesLog.btnSubmit} onPress={() => navigation.navigate('Login', {name: 'Login'})}>
          <Text style={styles.submitText}>
            Pronto
          </Text>
        </TouchableOpacity>
      </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    );
  }
export{Login};

const stylesLog = StyleSheet.create({
    containerLogoLogin:{
      flex:1,
      justifyContent:"center",
      marginTop:-50,
      marginLeft:'auto',
      marginRight:'auto',
      marginBottom:100,
      width:'100%',
      transform:[{scale:0.3}]
      },
      btnSubmit:{
        marginTop:20,
        backgroundColor:"#0C93D4",
        width:'70%',
        height:45,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:7
        },
        input:{
    backgroundColor:"white",
    width:"80%",
    marginBottom:15,
    color:"#0C93D4",
    fontSize:17,
    borderRadius:7,
    padding:10
    },

    container:{
      marginTop:-150,
      flex:1,
      marginLeft:'auto',
      marginRight:'auto',
      alignItems:"center",
      justifyContent:"center",
      width:"50%",
      height: "50%"
      },
  
  })
const styles = StyleSheet.create({
    click:{
      display: "none"
    },
    background:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"white",
    width:"100%"
    },

    welcomeText:{
    flex:1,
    color:"#0C93D4",
    marginTop:"10%",
    fontSize:25,
    textAlign:"center",
    height:2
    },


    containerLogo:{
    flex:1,
    justifyContent:"center",
    marginTop:-250,
    paddingBottom:"5%"
    },


    containerLogoLogin:{
    flex:1,
    justifyContent:"center",
    marginTop:0,
    marginBottom:0
    },


    container:{
    paddingBottom:0,
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    width:"100%",
    height: "100%"
    },
    input:{
    backgroundColor:"gainsboro",
    width:"80%",
    marginBottom:15,
    color:"black",
    fontSize:17,
    borderRadius:7,
    padding:10
    },
    btnSubmit:{
    marginTop:30,
    backgroundColor:"#0C93D4",
    width:'70%',
    height:45,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:7
    },
    submitText:{
    color:"white",
    fontSize:25,
    fontFamily:"sans-serif"
    },
    alreadySigned:{
    fontSize:20,
    marginTop:25,
    height:30,
    },
    loginText:{
    color:"#0C93D4"
    },
    btnRegister:{
    marginTop:10
    },
    resgisterText:{
    color:"#0C93D4"
    }
});
const stylesCad = StyleSheet.create({
  containerLogoCad:{
    flex:1,
    justifyContent:"center",
    marginTop:-120,
    width:'100%',
    marginBottom:-60,
    transform:[{scale:0.45}]
    },
    containerLogoCadLav:{
      flex:1,
      justifyContent:"center",
      marginTop:-150,
      marginBottom:-80,
      transform:[{scale:0.3}]
      },
      submitText:{
        width:'100%'
      },
    btnSubmit:{
      marginTop:15,
      backgroundColor:"#0C93D4",
      width:'100%',
      height:45,
     marginBottom:-60,
      alignItems:"center",
      justifyContent:"center",
      borderRadius:7
      },
      input:{
  backgroundColor:"white",
  width:"80%",
  marginBottom:15,
  color:"#0C93D4",
  fontSize:17,
  borderRadius:7,
  padding:10
  },
  infoText:{
    justifyContent:"center",
    color: "#0C93D4",
    textAlign:"center",
    width:"100%",
    fontSize:20,
    fontFamily:"sans-serif-light",
    marginBottom:10
  },

  container:{
    marginTop:-150,
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    width:"100%",
    height: "80%"
    },

})