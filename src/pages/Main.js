import React from "react";
import { useState, useEffect } from 'react';
import logo from '../../img/Logo.png'; 

import{
  KeyboardAvoidingView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Animated,
  Keyboard,
  StyleSheet,
  Link
} from 'react-native';

function Main({ navigation }){
  return <>
    <View style={styles.container}>
    
      <Image source={logo} style={{ width: 300, height: 300 }} /> 
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        textContentType="emailAddress"
        autoCapitalize="none"
        autoCompleteType="email"
        autoCorrect={false}
        onChangeText={() => {}}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        //keyboardType="visible-password"
        textContentType="password"
        autoCapitalize="none"
        autoCompleteType="password"
        autoCorrect={false}
        secureTextEntry={true}
        onChangeText={() => {}}
      />

      <TouchableOpacity style={styles.buttonSubmit} onPress={() => navigation.navigate('Albuns')}>
        <Text style={styles.submitText}>Acessar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonSubmit}>
        <Text style={styles.submitText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  </>
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    backgroundColor: '#FFF',
    borderWidth: 3,
    borderColor: "#818181",
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 22,
    borderRadius: 7,
    padding: 10,
  },
  buttonSubmit: {
    backgroundColor: '#59BFFF',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginBottom: 15
  },
});

export default Main;