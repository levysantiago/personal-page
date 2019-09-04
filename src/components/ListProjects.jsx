import React, { Component } from "react";
import Card from "./Card";
import dict from "../language/pt";

class ListProjects extends Component {
  moreProjectsComponent(home) {
    if (home) {
      return (
        <div className="col s12">
          <a href="/projetos" className="center">
            Veja mais projetos aqui >
          </a>
        </div>
      );
    }
  }

  render() {
    const { home } = this.props;
    let small = false;
    let truncate = false;
    if (home) {
      small = truncate = true;
    }

    return (
      <div className="row">
        {/*<h2>Projetos</h2>*/}
        {dict.projects.map(p => (
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
