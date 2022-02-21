import React, { useState } from "react";

export default function Login({ setUser }) {
  const [username, setUsername] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    setUser(username);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={e => setUsername(e.target.value)} placeholder="Input Username" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
