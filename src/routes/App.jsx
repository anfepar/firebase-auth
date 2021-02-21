import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../containers/Login";
import Home from "../containers/Home";
import Signup from "../containers/Signup";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
    </Switch>
  </BrowserRouter>
);

export default App;
