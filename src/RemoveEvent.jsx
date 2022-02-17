import React, { useState, useEffect } from "react";

export const RemoveEffect = props => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.addEventListener("mousemove", mouseMoveEvent);
    return () => {
      document.removeEventListener("mousemove", mouseMoveEvent);
    };
  }, []);

  const mouseMoveEvent = e => {
    setMouse({ x: e.pageX, y: e.pageY });
  };
  return (
    <>
      <h1>
        X: {mouse.x} Y: {mouse.y}
      </h1>
    </>
  );
};
