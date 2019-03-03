import React, {Component} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import HomePage from "../HomePage";
import Menu from "../Menu";
import AboutPage from "../AboutPage";
import ContactPage from "../ContactPage";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/menu" component={Menu} />
          {/* <Route path="/webshop" component={Webshop} /> */}
          <Route path="/about-us" component={AboutPage} />
          <Route path="/contact-us" component={ContactPage} />
          {/* <Route component={NotFoundPage} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
