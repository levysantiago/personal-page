import React, { Component } from "react";
import Card from "./Card";

class ListProjects extends Component {
  moreProjectsComponent(home) {
    if (home) {
      return (
        <div className="col s12">
          <a
            href="/projetos"
            className="center"
            style={{ textDecoration: "underline", color: "white" }}
          >
            Veja mais projetos aqui >
          </a>
        </div>
      );
    }
  }

  render() {
    const { home, list } = this.props;
    let small = false;
    let truncate = false;
    if (home) {
      small = truncate = true;
    }

    return (
      <div className="row">
        {/*<h2>Projetos</h2>*/}
        {list.map(p => (
          <Card
            key={p.key}
            title={p.title}
            type="project"
            abstract={p.abstract}
            link={p.link}
            date={p.date}
            small={small}
            truncate={truncate}
          />
        ))}

        {this.moreProjectsComponent(home)}
      </div>
    );
  }
}

export default ListProjects;
