module.exports = {
  home: {
    this: "/",
    articles: { this: "/articles" },
    projects: { this: "/projects" },
    blog: {
      this: "/blog",
      hellowtips: { this: "/blog/hellowtips" },
      travels: { this: "/blog/travels" },
      personalgrowth: { this: "/blog/personalgrowth" },
      article: { this: "/blog/article/:id" },
    },
  },

  byroute: {
    "/blog/travels": {
      name: "Travels",
    },
    "/blog/personalgrowth": {
      name: "Personal Growth",
    },
    "/blog/hellowtips": {
      name: "Hellow Tips",
    },
  },
};
