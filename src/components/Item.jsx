import React from "react";
import AnimatedCard from "./AnimatedCard";

const Item = ({ title, description }) => (
  <div>
    {/* <AnimatedCard> */}
    <div className="card">
      <h2>{title}</h2>
      <p style={{}}>{description}</p>
    </div>
    {/* </AnimatedCard> */}
  </div>
);

export default Item;
