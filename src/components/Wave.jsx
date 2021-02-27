import React from "react";
import { nanoid } from "nanoid";

const Wave = ({ bottom, start, end }) => {
  const id = nanoid();
  return (
    <svg
      style={{
        position: "absolute",
        width: "100%",
        bottom: bottom ?? 0,
        left: "0",
        animationName: "move-left",
        animationDuration: "20s",
        animationIterationCount: "infinite",
        animationDirection: "alternate",
      }}
      width="100%"
      height="400px"
      fill="none"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <linearGradient id={id} x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor={start} stopOpacity="50%" />
        <stop offset="100%" stopColor={end} stopOpacity="0%" />
      </linearGradient>
      <path
        fill={`url(#${id})`}
        d="
      M0 67
      C 273,183
        822,-40
        1920.00,106 
      
      V 359 
      H 0 
      V 67
      Z"
      >
        <animate
          repeatCount="indefinite"
          fill={`url(#${id})`}
          attributeName="d"
          dur={20 + Math.random() * 20}
          //   begin={Math.random() * 5}
          attributeType="XML"
          values="
        M0 77 
        C 473,283
          822,-40
          1920,116 
        
        V 359 
        H 0 
        V 67 
        Z; 

        M0 77 
        C 473,-40
          1222,283
          1920,136 
        
        V 359 
        H 0 
        V 67 
        Z; 

        M0 77 
        C 973,260
          1722,-53
          1920,120 
        
        V 359 
        H 0 
        V 67 
        Z; 

        M0 77 
        C 473,283
          822,-40
          1920,116 
        
        V 359 
        H 0 
        V 67 
        Z
        "
        ></animate>
      </path>
    </svg>
  );
};

export default Wave;
