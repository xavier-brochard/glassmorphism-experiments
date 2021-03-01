import React from "react";

const Layout = ({
  title,
  depthIllus,
  depthCard,
  clarityIllus,
  clarityCard,
  deferenceIllus,
  deferenceCard,
}) => (
  <div
    style={{
      height: "100%",
      display: "grid",
      gridGap: "20px",
      gridTemplateColumns: "repeat(12, [col-start] 1fr)",
      gridTemplateRows: "repeat(12, [row-start] 1fr)",
    }}
  >
    <div style={{ gridColumn: "2 / span 4", gridRow: "3 / span 2", zIndex: 1 }}>
      {title}
    </div>
    <div
      style={{
        gridColumn: "col-start 6 / span 3",
        gridRow: "1 / span 4",
        zIndex: 1,
      }}
    >
      {depthIllus}
    </div>
    <div
      style={{
        gridColumn: "col-start 8 / span 4",
        gridRow: "2 / span 4",
        zIndex: 2,
      }}
    >
      {depthCard}
    </div>
    <div
      style={{
        gridColumn: "col-start 2 / span 3",
        gridRow: "6 / span 5",
        zIndex: 1,
      }}
    >
      {clarityIllus}
    </div>
    <div
      style={{
        gridColumn: "col-start 4 / span 4",
        gridRow: "8 / span 3",
        zIndex: 2,
      }}
    >
      {clarityCard}
    </div>
    <div
      style={{
        gridColumn: "col-start 10 / span 3",
        gridRow: "6 / span 4",
        zIndex: 1,
      }}
    >
      {deferenceIllus}
    </div>
    <div
      style={{
        gridColumn: "col-start 8 / span 4",
        gridRow: "9 / span 4",
        zIndex: 2,
      }}
    >
      {deferenceCard}
    </div>
  </div>
);

export default Layout;
