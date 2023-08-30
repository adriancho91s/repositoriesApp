import React from 'react';
import Main from './src/components/Main';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native-web';
import AppBar from './src/components/AppBar';



export default function App() {
  return (
   <View>
      <AppBar />
      <Main />
   </View>
  );
}
