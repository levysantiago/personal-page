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
      article: { this: "*/article/:id" },
    },
  },

  byroute: {
    "/blog": {
      name: "Blog",
      nameen: "Blog",
    },
    "/blog/travels": {
      name: "Viagens",
      nameen: "Travels",
    },
    "/blog/personalgrowth": {
      name: "Crescimento Pessoal",
      nameen: "Personal Growth",
    },
    "/blog/hellowtips": {
      name: "Hellow Tips",
    },
  },
};
