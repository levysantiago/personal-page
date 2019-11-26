import React, { Component } from "react";
import Content from "./Content";

class Contents extends Component {
  getContent(c) {
    if (c.typed) {
      return (
        <Content
          key={c.id}
          title={c.title}
          content={c.content}
          tag={c.tag}
          titleColor="#ffffff"
          contentColor="#ffffff"
          background="linear-gradient(to bottom left, #00838f 0%, #1d455b 100%)"
          //backgroundColor="#1d455b" //"#10455b" //"#f0f2f4"
        />
      );
    } else {
      return (
        <Content
          key={c.id}
          title={c.title}
          content={c.content}
          tag={c.tag}
          //titleColor="#000000"
          contentColor="rgba(32, 21, 18, 0.6)"
          backgroundColor="#ffffff"
        />
      );
    }
  }
  render() {
    const { contents } = this.props;
    return <div>{contents.map(c => this.getContent(c))}</div>;
  }
}

export default Contents;
