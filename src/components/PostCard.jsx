import React from "react";

function PostCard(props) {
  const { title, tag, image, date, author } = props;

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
              <p className="black-text">{author}</p>
            </div>
          </div>

          {/* CONTENT */}
          <div className="row valign-wrapper">
            <div className="col s12">
              <h5 className="black-text">{title}</h5>
              <p className="black-text">{date}</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default PostCard;
