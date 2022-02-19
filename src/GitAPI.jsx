import React, { useState, useEffect, useRef } from "react";

export default function GitAPI(props) {
  const gitApi = "https://api.github.com/users/";
  const [sv, setSV] = useState(null);
  const [username, setUsername] = useState("stevenvallarsa");
  const searchInput = useRef();

  useEffect(() => {
    getUser(username);
  }, []);

  async function getUser(user) {
    const response = await fetch(gitApi + user);
    if (!response.ok) {
      setSV({ name: "NO SUCH USER" });
    } else {
      const data = await response.json();
      setSV(data);
    }
  }

  const handleChange = e => {
    setUsername(e.target.value);
  };

  const handleClearInput = e => {
    searchInput.current.value = "";
    searchInput.current.focus();
  };

  return (
    <div>
      <input
        style={{ backgroundColor: "blue", color: "white" }}
        type="text"
        placeholder="Input GitHub Username"
        onChange={handleChange}
        ref={searchInput}
      />
      <button style={{ fontWeight: "bold" }} onClick={() => getUser(username)}>
        Git Me!
      </button>
      <button
        style={{ borderRadius: 3, border: "none", backgroundColor: "red", color: "white" }}
        onClick={handleClearInput}
      >
        Clear
      </button>
      {sv ? (
        <div>
          <h2>{sv.name}</h2>
          <p>{sv.bio}</p>
          <img src={sv.avatar_url} alt={sv.name} style={{ height: 100 }} />
        </div>
      ) : (
        <p>L O A D I N G . . .</p>
      )}
    </div>
  );
}
