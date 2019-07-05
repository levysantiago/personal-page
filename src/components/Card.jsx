import React, { Component } from "react";

class Card extends Component {
  getComponentByType() {
    const { title, link, date, type } = this.props;
    if (type === "project") {
      const { abstract } = this.props;
      return (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <div className="card hoverable small">
            <div className="card-content">
              <span className="card-title truncate">{title}</span>
              <p className="dateText">{date}</p>
              <p>{abstract}</p>
            </div>
            <div className="card-action">
              <img
                width="90px"
                src={require("../imgs/github.jpg")}
                alt="Link para o github do projeto"
              />
            </div>
          </div>
        </a>
      );
    } else {
      const { place, proceeding } = this.props;
      return (
        <div className="card hoverable">
          <div className="card-content">
            <span className="card-title truncate">{title}</span>
            <p className="dateText">{date}</p>
            <p className="truncate">
              <b>Local:</b> {place}
            </p>
            <p>
              <b>Ano:</b> 2018
            </p>
            <p className="truncate">
              <b>Em:</b> {proceeding}
            </p>
          </div>
          <div className="card-action">
            <a href={link} target="_blank" rel="noopener noreferrer">
              Read
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

    return (
      <div className={"col s12 m" + size}>{this.getComponentByType()}</div>
    );
  }
}

export default Card;
