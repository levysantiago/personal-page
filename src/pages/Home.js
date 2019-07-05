import React, { Component } from "react";
import MyParallax from "../components/MyParallax";
import Contents from "../components/Contents";
import Sobre from "../components/Sobre";
import Graficos from "../components/Graficos";
import Artigos from "../components/Artigos";
import Projetos from "../components/Projetos";

class Home extends Component {
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
        tag: <Artigos />
      },
      {
        id: 4,
        title: "Projetos",
        tag: <Projetos />,
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
      </div>
    );
  }
}

export default Home;
