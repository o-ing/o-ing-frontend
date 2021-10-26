import React from "react";
import { Route } from "react-router-dom";
import Signup from "./auth/container/Signup";
import "antd/dist/antd.css";
import Login from "./auth/container/Login";
import Club from "./club/container/Club";
import Header from "./header/Header";
import { ThemeProvider } from "styled-components";
import theme from "./common/commonCss";
import ClubIntro from "./common/ClubIntro";
import CreateClubIntro from "./midAdPage/createClubIntro";
import ShowResume from "./midAdPage/ShowResume";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Route exact path="/" component={Club} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/club/:clubId" component={ClubIntro} />
      <Route path="/createClub/:clubId" component={CreateClubIntro} />
      <Route path="/showResume/:clubId" component={ShowResume} />
    </ThemeProvider>
  );
}

export default App;
