import React, { Component } from "react";
import NavBar from "../components/NavBar";
import ListArticles from "../components/ListArticles";
import PageHeader from "../components/PageHeader";
import Blockquote from "../components/Blockquote";
import Footer from "../components/Footer";
import dict from "../language/pt";

class ArticlesPage extends Component {
  render() {
    return (
      <div>
        <NavBar blackStyle={true} />
        <div className="container">
          <PageHeader
            title="Publicações"
            description="Nesta página são apresentados os artigos publicados que escrevi
            juntamente com outros autores. Grande parte destes autores fazem
            parte do grupo LIF - Laboratório de Internet do Futuro."
          />

          <ListArticles long={"12"} list={dict.articles.reverse()} />
          <Blockquote
            phrase={dict.blockquotes.two.phrase}
            author={dict.blockquotes.two.author}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default ArticlesPage;
