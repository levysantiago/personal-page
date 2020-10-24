import React, { Component } from "react";

class Card extends Component {
  getImage(link) {
    if (link.includes("github")) {
      return require("../imgs/github.jpg");
    } else {
      return require("../imgs/website.jpg");
    }
  }

  getComponentByType() {
    const { title, link, date, type } = this.props;
    const scrolled = {
      overflowY: "scroll",
      overflowX: "hidden",
      height: 250,
      padding: 5,
    };

    if (type === "project") {
      const { abstract, small, truncate } = this.props;
      let size = "medium";
      let doScroll = scrolled;
      if (small) {
        size = "small";
        doScroll = {};
      }
      let trunc = "";
      if (truncate) {
        trunc = "truncate";
      }
      return (
        <div className={"card hoverable " + size} style={{ overflow: "auto" }}>
          <div className="card-content">
            <span className={"card-title " + trunc}>{title}</span>
            <p className="dateText">{date}</p>
            <p style={doScroll}>{abstract}</p>
          </div>
          <div className="card-action">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <img
                width="90px"
                src={this.getImage(link)}
                alt="Link para o github do projeto"
              />
            </a>
          </div>
        </div>
      );
    } else {
      const { place, proceeding, year, lang } = this.props;
      return (
        <div className="card hoverable">
          <div className="card-content">
            <span className="card-title truncate">{title}</span>
            <p className="dateText">{date}</p>
            <p className="truncate">
              <b>{lang.constants.place}:</b> {place}
            </p>
            <p>
              <b>{lang.constants.year}:</b> {year}
            </p>
            <p className="truncate">
              <b>{lang.constants.in}:</b> {proceeding}
            </p>
          </div>
          <div className="card-action">
            <a href={link} target="_blank" rel="noopener noreferrer">
              {lang.constants.read}
            </a>
          </div>
        </div>
      );
    }
  }

  render() {
    const { long } = this.props;
    let size = "6";
    if (long) {
      size = "12";
    }

    if (long) {
      return (
        <div className={"col s12 m" + size}>{this.getComponentByType()}</div>
      );
    } else {
      return (
        <div className={"col s12 m10 l6 offset-m1"}>
          {this.getComponentByType()}
        </div>
      );
    }
  }
}

export default Card;
