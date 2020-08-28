import React from "react";

function Badge(props) {
  const { title, color } = props;

  const badge_style = {
    backgroundColor: color ? color : "#43a047",
    borderRadius: "4px",
    height: "20px",
    lineHeight: "16px",
    padding: "0px 8px",
    fontSize: "12px",
    fontWeight: "bold",
    marginBottom: "3px",
  };

  return (
    <span
      className="new badge"
      data-badge-caption={title}
      style={badge_style}
    ></span>
  );
}

export default Badge;
