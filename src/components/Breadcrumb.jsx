import React, { Component } from "react";

class Breadcrumbs extends Component {
  generate = links => {
    let key = 0;
    return links.map(li => (
      <a key={key++} href={li.route} className="breadcrumb">
        {li.page}
      </a>
    ));
  };

  render() {
    return (
      <nav className="clean">
        <div className="nav-wrapper">
          <div className="col s12">{this.generate(this.props.links)}</div>
        </div>
      </nav>
    );
  }
}

export default Breadcrumbs;
