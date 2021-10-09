import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TextInput,
} from "react-native";
import { useHttp } from "../hooks/httpHook";

export const ModalPost = ({ fetchPosts }) => {
  const { request } = useHttp();
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [errorVisible, setErrorVisible] = useState(false);

  const onChangeName = (textValue) => setName(textValue);
  const onChangeMessage = (textValue) => setMessage(textValue);
  const onChangeImageLink = (textValue) => setImageLink(textValue);
  const submitPost = async () => {
    if (!name || !message) {
      return setErrorVisible(true);
    } else {
      let body = {};
      if (imageLink) {
        body = { userName: name, message: message, imageLink: imageLink };
      } else body = { userName: name, message: message };
      await request("activities", "POST", body);
      await fetchPosts();
      setMessage("");
      setImageLink("");
      setName("");
      setErrorVisible(false);
      setModalVisible(false);
    }
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.inputContainerName}>
              <TextInput
                placeholder="Name (required)"
                style={styles.inputName}
                autoFocus={true}
                onChangeText={onChangeName}
                value={name}
              />
            </View>
            <View style={styles.inputContainerMessage}>
              <TextInput
                placeholder="Message (required)"
                style={styles.inputPost}
                onChangeText={onChangeMessage}
                value={message}
              />
            </View>
            <View style={{ ...styles.inputContainerName, marginBottom: 10 }}>
              <TextInput
                placeholder="Image link (optional)"
                style={{ ...styles.inputName }}
                onChangeText={onChangeImageLink}
                value={imageLink}
              />
            </View>
            <TouchableHighlight
              style={{
                ...styles.openButton,
                backgroundColor: "#191970",
                padding: 10,
              }}
              onPress={submitPost}
            >
              <Text style={styles.textStyle}>Submit Post</Text>
            </TouchableHighlight>
            {errorVisible && (
              <Text
                style={{
                  color: "red",
                }}
              >
                Please enter required fields
              </Text>
            )}
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Add post</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    width: 300,
    height: 300,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#FF9912",
    borderRadius: 20,
    padding: 15,
    justifyContent: "center",
    zIndex: 3, // works on ios
    elevation: 3, // works on android
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },

  inputContainerName: {
    borderWidth: 1,
    height: 20,
    backgroundColor: "#ffffff",
    paddingLeft: 15,
    paddingRight: 15,
  },
  inputContainerMessage: {
    borderWidth: 1,
    height: 100,
    padding: 8,
    margin: 10,
    paddingBottom: 30,
    width: "100%",
  },
});
