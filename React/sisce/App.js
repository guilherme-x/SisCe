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
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Header } from '@react-navigation/stack';
import {Login} from './LoginPg';



const Stack = createStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
        
        <Stack.Screen name="Login"
        component={Login}
        />

      </Stack.Navigator>
    </NavigationContainer>

  );
}


