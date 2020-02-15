import React, { Component } from "react";
import CardImage from "./CardImage";
import HorizontalCardImage from "./HorizontalCardImage";

class CardImageChooser extends Component {
  render() {
    const { id, img, title, content } = this.props;

    return (
      <div>
        <div className="hide-on-med-and-up">
          <CardImage img={img} title={title} content={content} />
        </div>
        <div className="hide-on-small-only">
          <HorizontalCardImage
            id={id}
            img={img}
            title={title}
            content={content}
          />
        </div>
      </div>
    );
  }
}

export default CardImageChooser;
