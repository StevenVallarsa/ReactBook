import React, { useState } from "react";
import ReactDOM from "react-dom";

const names = ["Julie", "Jessica", "Jill", "Juliana"];
const nums = [...Array(50).keys()];

const LongNumbers = props => {
  return nums.map(num => <h1>{num}</h1>);
};

const AbsoluteBox = props => {
  return <div className="red"></div>;
};

const App = props => {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
    isEmployed: false,
    isSkilled: true,
  });

  const handleNameChange = e => {
    console.log(e.target.type, e.target.name);
    if (e.target.type === "checkbox") {
      if (e.target.name === "isEmployed") {
        setName(prev => ({ ...prev, isEmployed: !prev.isEmployed }));
      } else {
        setName(prev => ({ ...prev, isSkilled: !prev.isSkilled }));
      }
    } else {
      setName({ ...name, [e.target.name]: e.target.value });
    }
    console.log(name);
  };

  const iveBeenClicked = e => {
    console.log(e.target.innerHTML);
    alert(e.target.innerHTML);
  };

  return (
    <>
      <h1>Say My Name!</h1>
      <input
        name="firstName"
        onChange={e => handleNameChange(e)}
        type="text"
        placeholder="First Name"
        value={name.firstName}
      />
      <input name="lastName" onChange={e => handleNameChange(e)} type="text" placeholder="Last Name" />
      <h1>
        My Name Is {name.firstName} {name.lastName}
      </h1>
      <div className="container">
        <div className="item">
          <input type="checkbox" name="isEmployed" defaultChecked={name.isEmployed} onChange={handleNameChange} />
          isEmployed
        </div>
        <div className="item">
          <input type="checkbox" name="isSkilled" defaultChecked={name.isSkilled} onChange={handleNameChange} />
          isSkilled
        </div>
      </div>

      <ul>
        {names.map((name, index) => (
          <li key={index} onClick={e => iveBeenClicked(e)}>
            {name}
          </li>
        ))}
      </ul>
      <LongNumbers />
      <AbsoluteBox />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
