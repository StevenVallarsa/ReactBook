import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const App = props => {
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

ReactDOM.render(<App />, document.getElementById("root"));

const App2 = props => {
  return <h1 style={{ color: "red" }}>SECOND APP</h1>;
};

setTimeout(() => {
  ReactDOM.render(<App2 />, document.getElementById("root"));
}, 3000);
