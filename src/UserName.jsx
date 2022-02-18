import React, { useState } from "react";

const UserName = props => {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    isEmployed: false,
    knowsReact: true,
  });

  const updateName = e => {
    if (e.target.type === "checkbox") {
      if (e.target.name === "job") {
        setPerson(prev => ({ ...prev, isEmployed: !prev.isEmployed }));
      } else {
        setPerson(prev => ({ ...prev, knowsReact: !prev.knowsReact }));
      }
    } else {
      setPerson(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  return (
    <div className="container">
      <h1>Say My Name</h1>
      <input
        style={{ display: "block" }}
        type="text"
        name="firstName"
        value={person.firstName}
        placeholder="First Name"
        onChange={updateName}
      />
      <input
        style={{ display: "block" }}
        type="text"
        name="lastName"
        value={person.lastName}
        placeholder="Last Name"
        onChange={updateName}
      />
      <br />
      <div>
        <h3>Has a Job?</h3>
        <input type="checkbox" name="job" onChange={updateName} defaultChecked={person.isEmployed} />
      </div>
      <div>
        <h3>Knows React?</h3>
        <input type="checkbox" name="react" onChange={updateName} defaultChecked={person.knowsReact} />
      </div>
    </div>
  );
};

export default UserName;
