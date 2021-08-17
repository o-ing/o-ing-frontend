import React from "react";
import { Route } from "react-router-dom";
import Signup from "./auth/container/Signup";
import "antd/dist/antd.css";
import Login from "./auth/container/Login";

function App() {
  return (
    <>
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
    </>
  );
}

export default App;
