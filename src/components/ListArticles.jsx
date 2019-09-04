import React, { Component } from "react";
import Card from "./Card";
import dict from "../language/pt";

class ListArticles extends Component {
  moreArticlesComponent(home) {
    if (home) {
      return (
        <div className="col s12">
          <a href="/publicacoes" className="center">
            Veja mais publicações aqui >
          </a>
        </div>
      );
    }
  }

  render() {
    const { long, home } = this.props;

    return (
      <div className="row">
        {/*<h2>Publicações</h2>*/}
        {dict.articles.map(a => (
          <Card
            key={a.key}
            title={a.title}
            date={a.date}
            place={a.place}
            proceeding={a.proceeding}
            link={a.link}
            long={long}
          />
        ))}

        {this.moreArticlesComponent(home)}
      </div>
    );
  }
}

export default ListArticles;
