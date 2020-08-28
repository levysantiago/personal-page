import React from "react";
import Badge from "./Badge";

function PostCard(props) {
  const { title, tag, image, date, author, labels } = props;

  function renderBadges(_labels) {
    return _labels.map((label, key) => {
      return <Badge key={key} title={label} color="#43a047" />;
    });
  }

  return (
    <a href={tag}>
      <div className="col s12 m8 l6">
        <div className="card-panel z-depth-1">
          {/* AUTHOR */}
          <div className="row valign-wrapper">
            <div className="col s2">
              <img
                src={image}
                alt="Imagem Avatar"
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  display: "block",
                }}
                className="circle responsive-img"
              />
            </div>
            <div className="col s10">
              <p>{author}</p>
            </div>
          </div>

          {/* CONTENT */}
          <div className="row valign-wrapper">
            <div className="col s12">
              <h5>{title}</h5>
              <p>{date}</p>
            </div>
          </div>

          {/* BADGES */}
          <div className="row">{renderBadges(labels)}</div>
        </div>
      </div>
    </a>
  );
}

export default PostCard;
