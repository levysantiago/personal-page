import React, { Component } from "react";

class CardImage extends Component {
  render() {
    const { img, title, content, tag } = this.props;

    let hide = "";
    if (!content) {
      hide = "hide";
    }

    return (
      <div className="col s12 m4">
        <a href={tag}>
          <div className="card hoverable">
            <div className="card-image">
              {img ? <img src={require("../imgs/" + img)} alt="icon" /> : null}
              <span className="card-title">{title}</span>
            </div>
            <div className={"card-content " + hide}>
              <p>{content}</p>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default CardImage;
