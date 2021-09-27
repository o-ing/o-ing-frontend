import React from "react";
import { Route } from "react-router-dom";
import Signup from "./auth/container/Signup";
import "antd/dist/antd.css";
import Login from "./auth/container/Login";
import Club from "./club/container/Club";
import CreatePost from "./createPost/container/CreatePost";
import Header from "./header/Header";

function App() {
  return (
    <>
      <Header />
      <Route exact path="/" component={Club} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/createPost" component={CreatePost} />
    </>
  );
}

export default App;
