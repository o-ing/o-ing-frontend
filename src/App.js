import { Route } from "react-router-dom";
import Signup from "./auth/container/Signup";
import "antd/dist/antd.css";

function App() {
  return (
    <>
      <Route path="/signup" component={Signup} />
    </>
  );
}

export default App;
