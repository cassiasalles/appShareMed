import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView as GHScrollView } from 'react-native-gesture-handler';
import Routes from './src/routes';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar barStyle = "light-content" backgroundColor = "#0066ff" />
      <Routes/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b3ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title:{
    fontWeight: "bold",
    color: "#0066ff",
    fontSize: 22
  }
});
