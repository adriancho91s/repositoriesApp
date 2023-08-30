import { Tabs } from "expo-router/tabs";
import { useRouter, Stack } from "expo-router";
import { Button } from "react-native";
import StyledText from "../src/components/StyledText";
import theme from "../src/theme";

export default function AppLayout() {
  const router = useRouter();
  return (
    <Stack
      screenOptions={{
        headerRight: () => (
          <StyledText
            style={{
              backgroundColor: theme.colors.primary,
              borderRadius: 4,
              flex: 0,
              paddingHorizontal: 10,
              paddingVertical: 4,
              marginEnd: 10,
            }}
            color="white"
            fontWeight="bold"
            onPress={() => router.push("/signin")}
          >
            Sign In
          </StyledText>
        ),
        headerTitleStyle: {
          fontWeight: "bold",
        },
        //Content of the screen
      }}
    >   
        <Stack.Screen name="index" options={{headerTitle: 'Home'}} />
        <Stack.Screen name="signin" options={{presentation: 'modal'}} />
    </Stack>
  );
}
