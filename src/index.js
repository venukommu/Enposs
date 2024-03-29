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
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

//import Index from "views/Index.js";
import Landing from "views/examples/Landing.js";
import Product from "views/examples/Product.js";
import Login from "views/examples/Login.js";
import Profile from "views/examples/Profile.js";
import Register from "views/examples/Register.js";
import Portfolio from "views/examples/Portfolio.js";
import ForceSystem from "views/examples/ForceSystem.js";
import Download from "views/examples/Download.js";
import ForcePilotFinalReport from "views/examples/ForcePilotFinalReport.js";
import ForceEnergySavingSystem from "views/examples/ForceEnergySavingSystem.js";
import ForcePilotReport from "views/examples/ForcePilotReport.js";
import Contact from "views/examples/Contact.js";
import Cart from "views/examples/Cart.js";
import CartContextProvider from "context/CartContext";
import { UserProvider } from 'context/user';
import LoginTest from 'views/examples/LoginTest.js';
import ForgotPassword from 'views/examples/ForgotPassword.js';
import ResetPassword from 'views/examples/ResetPassword.js';
//import Store from "views/examples/Store.js";
import CeoMessage from "views/examples/CeoMessage";
import Force from "views/examples/Force";
import Patents from "views/examples/Patents";
import OurStory from "views/examples/OurStory";
import Timeline from "views/examples/Timeline";
import InstallForce from "views/examples/InstallForce";
import Certifications from "views/examples/Certifications";
import Forceprinciples from "views/examples/Forceprinciples";
import EcwidComponent from "views/examples/EcwidComponent";
import Clients from "views/examples/Clients";
import Mcdonalds from "views/examples/Mcdonalds";
import Seymour from "views/examples/Seymour";
import Blueashrecreationcenter from "views/examples/Blueashrecreationcenter";
import Newsroom from "views/examples/Newsroom";
import NewsArticle from "views/examples/NewsArticle";
import Benefits from "views/examples/Benefits";
import Faq from "views/examples/Faq";
import Newspages from "views/examples/Newspages";

ReactDOM.render(
 <BrowserRouter>
 <UserProvider>
 <CartContextProvider>
 <Switch>
 <Route path="/" exact render={props => <Landing {...props} />} />
 <Route
 path="/"
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
 path="/ceomessage"
 exact
 render={props => <CeoMessage {...props} />}
 />
 <Route
 path="/ourstory"
 exact
 render={props => <OurStory {...props} />}
 />
 <Route
 path="/force"
 exact
 render={props => <Force {...props} />}
 />
 <Route
 path="/installforce"
 exact
 render={props => <InstallForce {...props} />}
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
 path="/forcepilotfinalreport"
 exact
 render={props => <ForcePilotFinalReport {...props} />}
 />
 <Route
 path="/forceenergysavingsystem"
 exact
 render={props => <ForceEnergySavingSystem {...props} />}
 />
 <Route
 path="/clients"
 exact
 render={props => <Clients {...props} />}
 />
 <Route
 path="/mcdonalds"
 exact
 render={props => <Mcdonalds {...props} />}
 />
 <Route
 path="/seymour"
 exact
 render={props => <Seymour {...props} />}
 />
 <Route
 path="/blueashrecreationcenter"
 exact
 render={props => <Blueashrecreationcenter {...props} />}
 />
 <Route
 path="/forcepilotreport"
 exact
 render={props => <ForcePilotReport {...props} />}
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
 <Route
 path="/forgot-password"
 exact
 render={props => <ForgotPassword {...props} />}
 />
 <Route
 path="/reset-password"
 exact
 render={props => <ResetPassword {...props} />}
 />
 <Route
 path="/contact"
 exact
 render={props => <Contact {...props} />}
 />
 <Route
 path="/faq"
 exact
 render={props => <Faq {...props} />}
 />
 <Route
 path="/store"
 exact
 render={props => <EcwidComponent {...props} />}
 />
 <Route
 path="/cart"
 exact
 render={props => <Cart {...props} />}
 />
 <Route
 path="/patents"
 exact
 render={props => <Patents {...props} />}
 />
 <Route
 path="/certifications"
 exact
 render={props => <Certifications {...props} />}
 />
  <Route
 path="/forceprinciples"
 exact
 render={props => <Forceprinciples {...props} />}
 />
 <Route
 path="/timeline"
 exact
 render={props => <Timeline {...props} />}
 />
 <Route
 path="/news"
 exact
 render={props => <Newsroom {...props} />}
 />
 <Route path="/news/:slug" component={Newspages} />
 <Route
 path="/newsarticle"
 exact
 render={props => <NewsArticle {...props} />}
 />
 <Route
 path="/benefits"
 exact
 render={props => <Benefits {...props} />}
 />
<Route path="/product/:id" component={Product} />
<Route path="/logintest" exact render={props => <LoginTest {...props} />} />

 {/*<Redirect to="/" />*/}
 </Switch>
 </CartContextProvider>
 </UserProvider>
 </BrowserRouter>,
 document.getElementById("root")
 );