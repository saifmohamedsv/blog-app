import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import { EvilIcons } from "@expo/vector-icons";
function ShowScreen({ navigation: { getParam } }) {
  const { state } = useContext(BlogContext);
  const id = getParam("id");

  const blogData = state.find((res) => res.id === id);

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.IDStyle}>Post ID: #{blogData?.id}</Text>
      <Text style={styles.titleStyle}>{blogData?.title}</Text>
      <Text style={styles.contentStyle}>{blogData?.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    padding: 12,
    backgroundColor: "#fff",
    flex: 1,
  },
  IDStyle: {
    fontSize: 14,
    fontWeight: "600",
  },
  titleStyle: {
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 12,
  },
  contentStyle: {
    fontSize: 24,
    fontWeight: "600",
  },
});

ShowScreen.navigationOptions = ({ navigation }) => {
  const id = navigation.getParam("id");
  return {
    headerRight: () => (
      <TouchableOpacity
        style={{ marginRight: 12 }}
        onPress={() => navigation.navigate("Edit", { id })}
      >
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    ),
  };
};

export default ShowScreen;
