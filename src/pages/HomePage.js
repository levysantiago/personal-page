import React, { Component } from "react";
import MyParallax from "../components/MyParallax";
import Contents from "../components/Contents";
import Sobre from "../components/Sobre";
import Graficos from "../components/Graficos";
import ListArticles from "../components/ListArticles";
import ListProjects from "../components/ListProjects";
import Blockquote from "../components/Blockquote";
import dict from "../language/pt";
import Footer from "../components/Footer";

class HomePage extends Component {
  state = {
    contents: [
      {
        title: "",
        content: "",
        typed: false
      }
    ]
  };

  setUpContent() {
    let contents = [
      {
        id: 1,
        title: "Sobre",
        tag: <Sobre />
      },
      {
        id: 2,
        title: "Linguagens",
        tag: <Graficos />,
        typed: true
      },
      {
        id: 3,
        title: "Publicações",
        tag: <ListArticles home />
      },
      {
        id: 4,
        title: "Projetos",
        tag: <ListProjects home />,
        typed: true
      }
    ];

    this.setState({ contents });
  }

  componentWillMount() {
    this.setUpContent();
  }

  render() {
    const { contents } = this.state;
    return (
      <div>
        <MyParallax />
        <Contents contents={contents} />
        <div className="container">
          <Blockquote
            phrase={dict.blockquotes.one.phrase}
            author={dict.blockquotes.one.author}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default HomePage;
