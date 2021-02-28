import React from "react";
import Wave from "./Wave";

const Background = ({ children }) => (
  <div
    style={{
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      height: "100%",
      with: "100%",
      background: "linear-gradient(167.96deg, #FA709A 0%, #9733EE 100%)",
    }}
  >
    <Wave start="#9C31B7" end="#9C31B7" bottom="100" />
    <Wave start="#7E388E" end="#7E388E" />
    {children}
  </div>
);

export default Background;
