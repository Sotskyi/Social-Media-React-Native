import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Linking,
} from "react-native";

import { Card, Title, Paragraph } from "react-native-paper";

export const DetailShowScreen = ({ route }) => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={{ textAlign: "center" }}>{route.params.userName}</Title>
          <Paragraph style={{ textAlign: "center", marginTop: 100 }}>
            {route.params.message}
          </Paragraph>
        </Card.Content>
      </Card>
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
