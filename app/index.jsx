import React from "react";
import RepositoryList from "../src/components/RepositoryList";
import { Link } from "expo-router";
import { Stack } from "expo-router";
import StyledText from "../src/components/StyledText";
import theme from "../src/theme";

const Index = () => {
  return (
    <>
      <Stack.Screen 
      options={
        {
            headerTitle: 'Home',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            //Content of the screen
            // headerRight: () => (
            //     <Link href="/signin" style={{backgroundColor: theme.colors.primary, borderRadius:4 ,flex: 0, paddingHorizontal: 10, paddingVertical:4, marginEnd: 10}}>
            //         <StyledText color='white' fontWeight='bold'>Sign In</StyledText>
            //     </Link>
            // ),

        }
      }>
      </Stack.Screen>
      <RepositoryList />
    </>
  );
};

export default Index;
