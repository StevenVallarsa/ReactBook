import React, { useState } from "react";
import ReactDOM from "react-dom";

const names = ["Julie", "Jessica", "Jill", "Juliana"];

const App = props => {
  const [type, setType] = useState("");

  const handleChange = e => {
    setType(e.target.value);
  };
  return (
    <>
      <h1>The J Squad</h1>
      <ul>
        {names.map((name, index) => (
          <Person index={index} name={name} />
        ))}
      </ul>
      <input onChange={handleChange} type="text" placeholder="Type Me" />
      <h1>{type}</h1>
    </>
  );
};

const Person = props => {
  const handleClick = e => {
    alert(props.name);
  };
  return (
    <li key={props.index} onClick={e => handleClick(e)}>
      {props.name}
    </li>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
