import React, { useContext } from "react";
import BlogPostForm from "../components/BlogPostForm";
import { Context as BlogContext } from "../context/BlogContext";

function EditScreen({ navigation: { getParam, navigate } }) {
  const { state, updateBlogPost } = useContext(BlogContext);

  const id = getParam("id");

  const blogData = state.find((res) => res.id === id);

  return (
    <BlogPostForm
      initValues={{ title: blogData.title, content: blogData.content }}
      onSubmit={(title, content) => {
        updateBlogPost(id, { title, content });
        navigate("Home");
      }}
    />
  );
}

export default EditScreen;
