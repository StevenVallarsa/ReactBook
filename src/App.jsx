import React, { useState } from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import CreatePosts from "./components/CreatePosts";
import PostList from "./components/PostList";
import Post from "./components/Post";

export default function App(props) {
  return (
    <div>
      <h1>Hello World!</h1>
      <Login />
      <Header />
      <CreatePosts />
      <PostList />
      <Post />
    </div>
  );
}
