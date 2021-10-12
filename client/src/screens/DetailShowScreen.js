import React from "react";
import { StyleSheet, View, Button, Image } from "react-native";

import { Card, Title, Paragraph } from "react-native-paper";

export const DetailShowScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={{ textAlign: "center" }}>{route.params.userName}</Title>
          <Paragraph style={{ textAlign: "center", marginTop: 100 }}>
            {route.params.message}
          </Paragraph>
          <View style={{ alignItems: "center" }}>
            <Image
              style={{ height: 150, width: 150, borderRadius: 15 }}
              source={{ uri: route.params.imageUrl }}
              resizeMode="contain"
            />
          </View>
        </Card.Content>
      </Card>
      <View style={{ marginTop: 20 }}>
        <Button
          title="Back to Main"
          onPress={() => {
            navigation.navigate("Home");
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    marginVertical: 20,
  },
  card: {
    width: 300,
    height: 500,
    justifyContent: "center",
    alignItems: "center",
  },
});
