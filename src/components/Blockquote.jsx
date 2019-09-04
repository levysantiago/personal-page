import React, { Component } from "react";

class Blockquote extends Component {
  render() {
    const { phrase, author } = this.props;
    return (
      <div className="col s12">
        <blockquote className="myblockquote citation">
          “{phrase}”
          <br />- {author}
        </blockquote>
      </div>
    );
  }
}

export default Blockquote;
