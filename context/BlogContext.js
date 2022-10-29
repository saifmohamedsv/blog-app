import axios from "../api/jsonServer.js";
import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "fetch":
      return payload;

    case "remove":
      return state.filter((blog) => blog.id !== payload);

    default:
      return state;
  }
};

const fetchBlogPosts = (dispatch) => {
  return async () => {
    const { data } = await axios.get("/blogList");
    dispatch({ type: "fetch", payload: data });
  };
};

const addBlogPost = () => {
  return async (values) => {
    await axios.post("/blogList", values);
  };
};

const updateBlogPost = () => {
  return async (id, { title, content }) => {
    await axios.patch(`/blogList/${id}`, { title, content });
  };
};

const removeBlogPost = () => {
  return async (id) => {
    axios.delete(`/blogList/${id}`);
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, removeBlogPost, updateBlogPost, fetchBlogPosts },
  []
);
