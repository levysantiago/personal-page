import api from "./api";

const blog_api = {
  getPosts: async () => {
    try {
      const res = await api.get("/posts");
      return res.data;
    } catch (e) {
      console.log(e);
      return null;
    }
  },

  getArticle: async (articleId) => {
    try {
      const res = await api.get(`/posts/${articleId}`);

      return res.data;
    } catch (e) {
      console.log(e);
      return null;
    }
  },

  getPostsByLabel: async (label) => {
    try {
      const res = await api.get(`/posts/search?label=${label}`);
      return res.data;
    } catch (e) {
      console.log(e);
      return null;
    }
  },
};

export default blog_api;
