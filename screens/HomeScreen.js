import React, { useContext, useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

function HomeScreen({ navigation: { navigate, addListener } }) {
  const { state, removeBlogPost, fetchBlogPosts } = useContext(BlogContext);

  useEffect(() => {
    fetchBlogPosts();
    const listener = addListener("didFocus", () => {
      fetchBlogPosts();
    });

    return () => {
      listener.remove();
    };
  }, [removeBlogPost]);

  return (
    <View style={styles.viewStyle}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={state}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigate("Show", { id: item.id })}>
              <View style={styles.blogStyle}>
                <Text style={styles.blogTitle}>{item.title}</Text>
                <TouchableOpacity onPress={() => removeBlogPost(item.id)}>
                  <Feather name={"trash"} style={styles.deleteIcon} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

HomeScreen.navigationOptions = ({ navigation: { navigate } }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() => navigate("Create")}
        style={{ marginRight: 12 }}
      >
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    padding: 12,
    backgroundColor: "#fff",
  },
  blogStyle: {
    width: "100%",
    paddingVertical: 24,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  blogTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0c0c0c",
  },
  deleteIcon: {
    color: "red",
    fontSize: 32,
  },
});

export default HomeScreen;
