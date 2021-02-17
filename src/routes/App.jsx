import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../containers/Login";
import Home from "../containers/Home";
import Signin from "../containers/Signin";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signin" component={Signin} />
    </Switch>
  </BrowserRouter>
);

export default App;
