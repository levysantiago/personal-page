import React, { Component } from "react";
import NavBar from "../components/NavBar";
import ListArticles from "../components/ListArticles";
import PageHeader from "../components/PageHeader";
import Blockquote from "../components/Blockquote";
import Footer from "../components/Footer";
import dict from "../language/info";
import lang from "../language/pt";
import helpers from "../../lib/helpers";

class TravelsPage extends Component {
  state = {
    blockquote: helpers.getRandomBlockquote(),
  };

  render() {
    const { blockquote } = this.state;
    return (
      <div>
        <NavBar blackStyle={true} lang={lang} />
        <div className="container">
          <PageHeader
            title={lang.articlespage.title}
            description={lang.articlespage.description}
          />

          <ListArticles
            long={"12"}
            list={dict.articles.reverse()}
            lang={lang}
          />
          <Blockquote phrase={blockquote.phrase} author={blockquote.author} />
        </div>
        <Footer lang={lang} />
      </div>
    );
  }
}

export default TravelsPage;
