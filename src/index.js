/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

import Index from "views/Index.js";
import Landing from "views/examples/Landing.js";
import Login from "views/examples/Login.js";
import Profile from "views/examples/Profile.js";
import Register from "views/examples/Register.js";
import Portfolio from "views/examples/Portfolio.js";
import ForceSystem from "views/examples/ForceSystem.js";
import Download from "views/examples/Download.js";
import PortfolioReport1 from "views/examples/PortfolioReport1.js";
import PortfolioReport2 from "views/examples/PortfolioReport2.js";
import PortfolioReport3 from "views/examples/PortfolioReport3.js";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={props => <Landing {...props} />} />
      <Route
        path="/landing"
        exact
        render={props => <Landing {...props} />}
      />
      <Route path="/login" exact render={props => <Login {...props} />} />
      <Route
        path="/about"
        exact
        render={props => <Profile {...props} />}
      />
      <Route
        path="/forceSystem"
        exact
        render={props => <ForceSystem {...props} />}
      />
      <Route
        path="/portfolio"
        exact
        render={props => <Portfolio {...props} />}
      />
      <Route
        path="/PortfolioReport1"
        exact
        render={props => <PortfolioReport1 {...props} />}
      />
       <Route
        path="/PortfolioReport2"
        exact
        render={props => <PortfolioReport2 {...props} />}
      />
       <Route
        path="/PortfolioReport3"
        exact
        render={props => <PortfolioReport3 {...props} />}
      />
       <Route
        path="/download"
        exact
        render={props => <Download {...props} />}
      />
      <Route
        path="/register"
        exact
        render={props => <Register {...props} />}
      />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
