import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const NavBar = () => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>Social Media</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  navbar: {
    height: 60,
    paddingTop: 15,
    alignItems: "center",
    backgroundColor: "#3949ab",
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});
