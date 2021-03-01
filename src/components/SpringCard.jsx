import React from "react";
import { useSpring, animated } from "react-spring";

const trans = (t, x, y, z, s) =>
  `translateY(${t}px) rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg) scale(${s})`;

const SpringCard = ({ children }) => {
  const [props, set] = useSpring(() => ({
    txyzs: [0, 0, 0, 0, 1],
    config: { mass: 1, tension: 350, friction: 40 },
  }));
  return (
    <animated.div
      onMouseMove={() => set({ txyzs: [-0, 5, -15, 0, 1.05] })}
      onMouseLeave={() => set({ txyzs: [0, 0, 0, 0, 1] })}
      style={{ transform: props.txyzs.interpolate(trans) }}
    >
      {children}
    </animated.div>
  );
};

export default SpringCard;
