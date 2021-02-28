import React from "react";

const Card = ({ title, description, illustration }) => (
  <div
    style={{
      cursor: "pointer",
    }}
  >
    {illustration}
    <div
      style={{
        width: "25vw",
        minWidth: "300px",
        maxWidth: "500px",
        height: "33vh",
        minHeight: "300px",
        maxHeight: "500px",
        background: "rgba(253, 243, 255, 0.3)",
        border: "1px solid rgba(255, 255, 255, 0.25)",
        boxSizing: "border-box",
        boxShadow: "0px 4px 40px rgba(26, 8, 31, 0.17)",
        backdropFilter: "blur(10px)",
        borderRadius: "30px",
      }}
    >
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  </div>
);

export default Card;
