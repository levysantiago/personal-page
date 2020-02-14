import React, { Component } from "react";
import Card from "./Card";

class ListArticles extends Component {
  moreArticlesComponent(home) {
    if (home) {
      const { lang } = this.props;
      return (
        <div className="col s12">
          <a
            href="/articles"
            className="center"
            style={{ textDecoration: "underline" }}
          >
            {lang.constants.moreArticles} >
          </a>
        </div>
      );
    }
  }

  render() {
    const { long, home, list, lang } = this.props;

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
            lang={lang}
          />
        ))}

        {this.moreArticlesComponent(home)}
      </div>
    );
  }
}

export default ListArticles;
