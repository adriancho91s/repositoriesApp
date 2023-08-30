import React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { Link } from 'expo-router';
import StyledText from "./StyledText";
import Constants from "expo-constants";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
    paddingLeft: 10,
  },
  text: {
    color: theme.appBar.textPrimary,
  },
});

const AppBarTab = ({ active, navigation, children, to }) => {
  return (
    <Link href={`/${to}`}>
      <StyledText fontWeight="bold" style={styles.text}>
        {children}
      </StyledText>
    </Link>
  );
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab to='home'>
        Repositories
      </AppBarTab>
      <AppBarTab to='signin'>
        Sign In
      </AppBarTab>
    </View>
  );
};

export default AppBar;
