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
    <View>
      <Card>
        <Card.Content>
          <Title>{route.params.userName}</Title>
          <Paragraph>{route.params.message} </Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
};
