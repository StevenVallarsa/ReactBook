import React, { useState } from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import CreatePosts from "./components/CreatePosts";
import PostList from "./components/PostList";
import Post from "./components/Post";

export default function App(props) {
  const [user, setUser] = useState("");

  if (!user) {
    return <Login setUser={setUser} />;
  }
  return (
    <div>
      <Header setUser={setUser} />
    </div>
  );
}
