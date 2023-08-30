import React from "react";
import { SafeAreaView, View } from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StyledText from "./StyledText";
import MainStack from "../routes/MainStack";


const Stack = createStackNavigator();



const Main = () => {
  return (
      <View style={{ flex: 1 }}>
        
      </View>
  );
};

export default Main;
