import React from "react";
import { useState, useEffect } from 'react';
import logo from '../../img/Logo.png'; 
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import * as Permissions from 'expo-permissions';

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
    Alert,
  } from 'react-native';

function Documents(){
    return <>
      <View style={styles.container}>
        <Text style={{fontWeight: 'bold', fontSize: 22, margin:15}}>Album Exames 2019</Text>
        <Button style={{alignSelf: 'flex-end'}}><Text style={{color:'#0066ff', fontSize: 13}}>Novo documento</Text></Button>
      </View>
    </>
};

function Download() {
  const uri = 'https://drive.google.com/uc?id=112-MqqGVZAb6Xjt70jtlyBpUP281R4te&export=download'
  let fileUri = FileSystem.documentDirectory + "ExameSangue2020.pdf";
  FileSystem.downloadAsync(uri, fileUri)
     .then(({
        uri
     }) => {
        saveFile(uri);
     })
     .catch(error => {
        console.error(error);
     })
}

async function saveFile(fileUri) {
  const asset = await MediaLibrary.createAssetAsync(fileUri)
  await MediaLibrary.createAlbumAsync("ShareMed", asset, false)
  Alert.alert("Aviso", "Documento salvo");
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
      height: 350,
      borderColor:'#000',
      borderWidth: 1,
      margin: 10,
      alignSelf: 'stretch'
    },
    title:{
      fontSize:18,
      marginBottom: 10,
       fontWeight: 'bold'
    },
    titleParagrafo:{
        fontWeight: 'bold'
    },
    titleSecundario:{
        marginBottom: 15
    }
})

export default Documents;