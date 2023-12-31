import { Button, Text, Image } from 'react-native';
import React from 'react';

import { Stack } from 'expo-router';


function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
    />
  );
}

export default function Home() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: props => <LogoTitle {...props} />,
          headerRight: () => <Button onPress={() => setCount(c => c = 0)} title="Reset" />,
          headerRight: () => <Button onPress={() => setCount(c => c + 1)} title="Update count" />,
        }}
      />
      <Text>Count: {count}</Text>
    </>
  );
}
