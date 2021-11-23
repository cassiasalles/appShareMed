import React from "react";
import { useState, useEffect } from 'react';
import logo from '../../img/Logo.png'; 
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import * as Clipboard from 'expo-clipboard';

import
  {
    KeyboardAvoidingView,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Animated,
    Keyboard,
    StyleSheet,
    Alert
  } from 'react-native';

function Albuns({ navigation }){
  return <>
    <View style={styles.container}>

      <Button style={{alignSelf: 'flex-end'}}><Text style={{color:'#0066ff', fontSize: 13}}>Novo álbum</Text></Button>

      {/* card1 */}
      <Card style={styles.card}>  
        <Card.Content>
          <Title style={styles.title}>Exames 2020</Title>
          <Paragraph>Exames realizados no ano de 2020</Paragraph>
        </Card.Content>
          
        <Card.Actions>
          <Button><Text style={{color:'red', fontSize: 13}}>Excluir</Text></Button>
          <Button><Text style={{color:'#324043', fontSize: 13}}>Editar</Text></Button>
          <Button onPress={() => navigation.navigate('Documents')}><Text style={{color:'#3dc33d', fontSize: 13}}>Abrir</Text></Button>
          <Button onPress = {Share}><Text style={{color:'#2c07c1', fontSize: 13}}>Compartilhar</Text></Button>
        </Card.Actions>
      </Card>

      {/* card2 */}
      <Card style={styles.card}>  
        <Card.Content>
          <Title style={styles.title}>Exames 2019</Title>
          <Paragraph>Exames realizados no ano de 2019</Paragraph>
        </Card.Content>
          
        <Card.Actions>
          <Button><Text style={{color:'red', fontSize: 13}}>Excluir</Text></Button>
          <Button><Text style={{color:'#324043', fontSize: 13}}>Editar</Text></Button>
          <Button onPress={() => navigation.navigate('Documents19')}><Text style={{color:'#3dc33d', fontSize: 13}}>Abrir</Text></Button>
          <Button><Text style={{color:'#2c07c1', fontSize: 13}}>Compartilhar</Text></Button>
        </Card.Actions>
      </Card>

    </View>
  </>
}

function Share(){
  Alert.alert(
    "Compartilhar álbum",
    "Link: https://www.google.com/",
    [
      {
        text: "Copiar link",
        onPress: () => Clipboard.setString('https://www.google.com/')
      },
      { text: "OK" }
    ]
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'flex-start',
      flexDirection: 'column',
      display: 'flex'
    },
    card:{
      height: 130,
      borderColor:'#000',
      borderWidth: 1,
      margin: 10,
      alignSelf: 'stretch'
    },
    title:{
      fontSize:18
    },
})

export default Albuns;