import React from "react";
import AnimatedCard from "./AnimatedCard";
import SpringCard from "./SpringCard";

const Item = ({ title, description }) => (
  <SpringCard>
    <div className="card">
      <h2>{title}</h2>
      <p style={{}}>{description}</p>
    </div>
  </SpringCard>
);

export default Item;
