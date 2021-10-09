import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Linking,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
} from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { useHttp } from "../hooks/httpHook";

export const PostCard = ({ post, fetchPosts, navigation }) => {
  const { request } = useHttp();
  const [text, setText] = useState(post.message);
  const [isActiveInput, setIsActiveInput] = useState(false);

  const onChangeMessage = (textValue) => setText(textValue);

  useEffect(() => {}, [isActiveInput]);

  const startChange = () => {
    setIsActiveInput(true);
  };

  const submitChange = async () => {
    if (text !== post.message) {
      const succesChange = await request("activities/", "PUT", {
        userName: post.userName,
        message: text,
        _id: post._id,
      });
      if (succesChange) return setIsActiveInput(false);
    } else {
      return setIsActiveInput(false);
    }
  };
  const navigateToDetails = () => {
    navigation.navigate("Details", post);
  };

  const deletePost = async (post) => {
    try {
      await request("activities/" + post._id, "DELETE");
      await fetchPosts();
    } catch (error) {}
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Paragraph
            style={{
              textAlign: "right",
              color: "#191970",
            }}
          >
            <TouchableOpacity onPress={navigateToDetails}>
              <Text>Details...</Text>
            </TouchableOpacity>
          </Paragraph>
          <Title>{post.userName}</Title>
          <TextInput
            style={{
              color: "black",
              borderWidth: isActiveInput ? 1 : 0,
              height: 150,
              width: 200,
              // paddingBottom: 200,
            }}
            multiline={true}
            numberOfLines={8}
            autoFocus={isActiveInput}
            editable={isActiveInput}
            // style={styles.inputPost}
            onChangeText={onChangeMessage}
            value={text}
          ></TextInput>
          {isActiveInput && (
            <TouchableOpacity
              style={{ alignItems: "flex-end" }}
              onPress={submitChange}
            >
              <AntDesign
                style={{ marginTop: 20 }}
                name="check"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          )}
        </Card.Content>
        <View
          style={{
            width: 300,
            height: 50,
            flexDirection: "row",
            position: "absolute",
            justifyContent: "space-around",
            right: 0,
            bottom: 0,
            height: 30,
          }}
        >
          <TouchableOpacity onPress={startChange}>
            <AntDesign style={{}} name="edit" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={deletePost}>
            <AntDesign style={{}} name="delete" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 400,
    marginVertical: 20,
  },
  card: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
