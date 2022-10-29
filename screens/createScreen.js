import React, { useContext } from "react";
import BlogPostForm from "../components/BlogPostForm";
import { Context as BlogContext } from "../context/BlogContext";

function CreateScreen({ navigation: { navigate } }) {
  const { addBlogPost } = useContext(BlogContext);

  const onSubmit = (postTitle, postContent) => {
    addBlogPost({ title: postTitle, content: postContent });
    navigate("Home");
  };

  return <BlogPostForm onSubmit={onSubmit} />;
}

export default CreateScreen;
