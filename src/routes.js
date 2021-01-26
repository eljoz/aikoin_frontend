import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "./component/Dashboard";
// import { Login } from "./component/Login";
import Home from "./component/pages/HomePage/Home";

import Hoc from "./hoc/hoc";
import Login from "../src/component/Login";
import { Register } from "./component/Register";

// import Chat from "./containers/Chat";

const BaseRouter = () => (
  <Hoc>
        <Route exact path="/" component ={Home} />
        <Route exact path="/login" component ={Login} />
        <Route exact path="/signup" component ={Register} />

        <Route exact path="/dashboard" component ={Dashboard} />

  </Hoc>
);

export default BaseRouter;