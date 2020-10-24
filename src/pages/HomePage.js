import React, { Component } from "react";
import MyParallax from "../components/MyParallax";
import Contents from "../components/Contents";
import Sobre from "../components/Sobre";
import Graficos from "../components/Graficos";
import ListArticles from "../components/ListArticles";
import ListProjects from "../components/ListProjects";
import Blockquote from "../components/Blockquote";
import dict from "../language/info";
import lang from "../language/pt";
import Footer from "../components/Footer";
import blog_api from "../lib/blogapi";
import ListBlogPosts from "../components/ListBlogPosts";

class HomePage extends Component {
  state = {
    contents: [
      {
        title: "",
        content: "",
        typed: false,
      },
    ],
    posts: [],
  };

  setUpContent() {
    let contents = [
      {
        id: 1,
        title: lang.about.title,
        tag: <Sobre lang={lang} />,
      },
      {
        id: 2,
        title: lang.languages.title,
        tag: <Graficos lang={lang} />,
        typed: true,
      },
      {
        id: 3,
        title: lang.articles.title,
        tag: (
          <ListArticles
            home
            lang={lang}
            list={dict.articles
              .slice(Math.max(dict.articles.length - 2, 0))
              .reverse()}
          />
        ),
      },
      {
        id: 4,
        title: lang.projects.title,
        tag: (
          <ListProjects
            home
            lang={lang}
            list={dict.projects
              .slice(Math.max(dict.projects.length - 2, 0))
              .reverse()}
          />
        ),
        typed: true,
      },
      {
        id: 5,
        title: lang.blog.title,
        tag: <ListBlogPosts home list={this.state.posts} lang={lang} />,
      },
    ];

    this.setState({ contents });
  }

  componentWillMount() {
    this.setUpContent();
  }

  async componentDidMount() {
    const result = await blog_api.getPosts();
    const reducedList = [result.items[0], result.items[1]];
    this.setState({ posts: reducedList });

    this.setUpContent();
  }

  render() {
    const { contents } = this.state;
    return (
      <div>
        <MyParallax lang={lang} />
        <Contents contents={contents} />
        <div className="container">
          <Blockquote
            phrase={dict.blockquotes.one.phrase}
            author={dict.blockquotes.one.author}
          />
        </div>
        <Footer lang={lang} />
      </div>
    );
  }
}

export default HomePage;
