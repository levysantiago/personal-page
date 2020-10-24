import React, { Component } from "react";

class Content extends Component {
  render() {
    const {
      title,
      content,
      tag,
      titleColor,
      contentColor,
      backgroundColor,
      background,
    } = this.props;

    return (
      <div
        style={{
          background: background,
          backgroundColor: backgroundColor,
          padding: "100px 10px 100px 10px",
        }}
      >
        <div className="container row">
          <h2
            style={{
              color: titleColor,
            }}
          >
            {title}
          </h2>
          <p
            style={{
              color: contentColor,
            }}
          >
            {content}
          </p>
          {tag}
        </div>
      </div>
    );
  }
}

export default Content;
