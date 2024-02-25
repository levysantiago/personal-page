export const routesDict = {
  home: {
    this: "/",
    articles: { this: "/articles" },
    projects: { this: "/projects" },
    blog: {
      this: "/blog",
      hellowtips: { this: "/blog/hellowtips" },
      travels: { this: "/blog/travels" },
      personalgrowth: { this: "/blog/personalgrowth" },
      recipes: { this: "/blog/recipes" },
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
    "/blog/recipes": {
      name: "Receitas",
      nameen: "Recipes",
    },
    "/blog/hellowtips": {
      name: "Hellow Tips",
    },
  },
};
