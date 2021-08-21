import React from "react";
import { Route } from "react-router-dom";
import Signup from "./auth/container/Signup";
import "antd/dist/antd.css";
import Login from "./auth/container/Login";
import Club from "./club/container/Club";

function App() {
  return (
    <>
      <Route exact path="/" component={Club} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
    </>
  );
}

export default App;
