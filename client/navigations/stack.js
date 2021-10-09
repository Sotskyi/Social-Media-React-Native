import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PostsListScreen } from "../src/screens/PostsListScreen";
import { DetailShowScreen } from "../src/screens/DetailShowScreen";

const Stack = createNativeStackNavigator();

export const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={PostsListScreen} />
        <Stack.Screen name="Details" component={DetailShowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
