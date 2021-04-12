import React from "react";

export default props => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <div
      style={{
        textDecoration: props.article.complete ? "line-through" : ""
      }}
      onClick={props.toggleComplete}>
      {props.article.text}
    </div>
  </div>
);
