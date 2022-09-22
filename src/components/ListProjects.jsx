import React, { Component } from "react";
import Card from "./Card";

class ListProjects extends Component {
  moreProjectsComponent(home) {
    if (home) {
      const { lang } = this.props;
      return (
        <div className="col s12">
          <a
            href="/#/projects"
            className="center"
            style={{ textDecoration: "underline", color: "white" }}
          >
            {lang.constants.moreProjects}
          </a>
        </div>
      );
    }
  }

  render() {
    const { home, list, lang } = this.props;
    let small = false;
    let truncate = false;
    if (home) {
      small = truncate = true;
    }

    return (
      <div className="row">
        {/*<h2>Projetos</h2>*/}
        {list.map((p) => (
          <Card
            key={p.key}
            title={p.title}
            type="project"
            abstract={p.abstract}
            link={p.link}
            date={p.date}
            small={small}
            truncate={truncate}
            lang={lang}
          />
        ))}

        {this.moreProjectsComponent(home)}
      </div>
    );
  }
}

export default ListProjects;
