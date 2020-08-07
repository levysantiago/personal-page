import api from "./api";
require("dotenv").config();
const { REACT_APP_BLOG_ID: BLOG_ID, REACT_APP_API_KEY: API_KEY } = process.env;

const blog_api = {
  getPosts: async () => {
    const res = await api.get(
      "https://www.googleapis.com/blogger/v3/blogs/" +
        BLOG_ID +
        "/posts?key=" +
        API_KEY
    );

    return res.data;
  },

  getArticle: async (articleId) => {
    const res = await api.get(
      "https://www.googleapis.com/blogger/v3/blogs/" +
        BLOG_ID +
        "/posts/" +
        articleId +
        "?key=" +
        API_KEY
    );

    return res.data;
  },
};

export default blog_api;
