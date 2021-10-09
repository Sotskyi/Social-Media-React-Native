import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ActivityIndicator,
  ScrollView,
  SectionList,
  SafeAreaView,
} from "react-native";
import { NavBar } from "../components/navBar";
import { PostCard } from "../components/postCard";
import { ModalPost } from "../components/modal";
import { useHttp } from "../hooks/httpHook";

export const PostsListScreen = ({ navigation }) => {
  const { loading, request, error, clearError } = useHttp();
  const [data, setData] = useState([]);
  console.log(navigation);
  async function fetchPosts() {
    let response = await request("activities");
    setData(response);
  }
  useEffect(() => {
    fetchPosts();
  }, []);

  //   const renderItem = ({ item, index }) => (
  //     <Card style={styles.card}>
  //       <Card.Content>
  //         <Title>{item.userName}</Title>
  //         <Paragraph>{item.message}</Paragraph>
  //         {item.imageUrl && (
  //           <Image
  //             style={{ height: 150, width: 150 }}
  //             source={{ uri: item.imageUrl }}
  //             resizeMode="contain"
  //           />
  //         )}
  //       </Card.Content>

  //       <AntDesign name="delete" size={24} color="black" />
  //     </Card>
  //   );
  return (
    <View style={styles.container}>
      <NavBar />
      <ModalPost fetchPosts={fetchPosts} />
      {/* <PostsList /> */}
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
          }}
          data={data}
          keyExtractor={({ _id }) => _id}
          renderItem={({ item }) => (
            <PostCard
              post={item}
              fetchPosts={fetchPosts}
              navigation={navigation}
            />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    flex: 1,
  },
  text: {
    color: "black",
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 400,
    marginVertical: 20,
  },
});
