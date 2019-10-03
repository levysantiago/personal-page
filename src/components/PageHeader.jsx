import React, { Component } from "react";

const titleStyle = {
  marginBottom: "70px"
};

const descriptionStyle = {
  marginBottom: "40px"
};

const instagramStyle = {
  marginBottom: "50px"
};

class PageHeader extends Component {
  getInstagramComponent(title) {
    if (title.includes("Hellow")) {
      return (
        <div className="col s6 m2 offset-s3 offset-m5" style={instagramStyle}>
          <a
            href="https://www.instagram.com/hellow_tips/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="center"
              src={require("../imgs/instagram.png")}
              width="40"
              alt="Icone do instagram"
            />
            <h6 className="center-align">@hellow_tips</h6>
          </a>
        </div>
      );
    }
  }

  printDescription2() {
    const { description2 } = this.props;
    if (description2) {
      return <p style={descriptionStyle}>{description2}</p>;
    }
  }

  render() {
    const { title, description } = this.props;
    return (
      <div>
        <h1 className="center" style={titleStyle}>
          {title}
        </h1>

        {this.getInstagramComponent(title)}

        <div className="col s12">
          <p style={descriptionStyle}>{description}</p>
          {this.printDescription2()}
        </div>
      </div>
    );
  }
}

export default PageHeader;