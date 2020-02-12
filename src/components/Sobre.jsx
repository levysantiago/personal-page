import React, { Component } from "react";

class Sobre extends Component {
  /*textStyle = {
    fontFamily: "Quicksand"
  };*/

  render() {
    const { lang } = this.props;
    return <div>{lang.about.description}</div>;
  }
}

export default Sobre;
