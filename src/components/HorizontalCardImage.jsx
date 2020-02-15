import React, { Component } from "react";

class HorizontalCardImage extends Component {
  render() {
    const { id, img, content } = this.props;

    let hideL = "hide";
    let hideR = "";
    if (id % 2) {
      hideL = "";
      hideR = "hide";
    }

    return (
      <div className="col s12">
        <div className="card horizontal small">
          <div className={"card-image " + hideL}>
            <img src={require("../imgs/" + img)} alt="icon" />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <span className="card-title">Post title</span>
              <p>{content}</p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
          <div className={"card-image " + hideR}>
            <img src={require("../imgs/" + img)} alt="icon" />
          </div>
        </div>
      </div>
    );
  }
}

export default HorizontalCardImage;
