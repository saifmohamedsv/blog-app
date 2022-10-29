import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const BlogPostForm = ({ onSubmit, initValues }) => {
  const [postTitle, setPostTitle] = useState(initValues.title);
  const [postContent, setPostContent] = useState(initValues.content);

  return (
    <View style={styles.viewStyle}>
      <View style={styles.formStyle}>
        <Text style={styles.textFieldLabelStyle}>Enter Title:</Text>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.textFieldStyle}
          value={postTitle}
          onChangeText={(newValue) => setPostTitle(newValue)}
        />
      </View>

      <View style={styles.formStyle}>
        <Text style={styles.textFieldLabelStyle}>Enter Content:</Text>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.textFieldStyle}
          value={postContent}
          onChangeText={(newValue) => setPostContent(newValue)}
        />
      </View>

      <TouchableOpacity onPress={() => onSubmit(postTitle, postContent)}>
        <Text style={styles.submitButton}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BlogPostForm;

BlogPostForm.defaultProps = {
  initValues: {
    title: "",
    content: "",
  },
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: "#fff",
    flex: 1,
    padding: 12,
  },
  titleStyle: {
    fontSize: 24,
    marginBottom: 32,
    fontWeight: "bold",
  },
  formStyle: {
    marginBottom: 24,
    display: "flex",
    alignItems: "stretch",
  },
  textFieldStyle: {
    borderWidth: 2,
    borderColor: "#643fdb",
    borderRadius: 4,
    padding: 12,
    fontSize: 16,
    fontWeight: "500",
  },
  textFieldLabelStyle: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 6,
  },
  submitButton: {
    borderWidth: 2,
    borderColor: "#643fdb",
    borderRadius: 4,
    padding: 12,
    fontSize: 16,
    fontWeight: "500",
    color: "#643fdb",
    textAlign: "center",
  },
});
