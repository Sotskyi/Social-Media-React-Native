import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { PostsListScreen } from "./src/screens/PostsListScreen";
import { MyStack } from "./navigations/stack";
import { NavBar } from "./src/components/navBar";

export default function App() {
  return <MyStack />;
}

const styles = StyleSheet.create({
  container: {},
});
