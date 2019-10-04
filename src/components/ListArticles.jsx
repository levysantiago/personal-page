import React, { Component } from "react";
import Card from "./Card";

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
    const { long, home, list } = this.props;

    return (
      <div className="row">
        {/*<h2>Publicações</h2>*/}
        {list.map(a => (
          <Card
            key={a.key}
            title={a.title}
            date={a.date}
            place={a.place}
            proceeding={a.proceeding}
            link={a.link}
            year={a.year}
            long={long}
          />
        ))}

        {this.moreArticlesComponent(home)}
      </div>
    );
  }
}

export default ListArticles;
