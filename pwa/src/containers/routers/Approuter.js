import React, {Component} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

class Approuter extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/menu" component={Menu} />
          <Route path="/webshop" component={Webshop} />
          <Route path="/our-story" component={OurStory} />
          <Route path="/contact-us" component={ContactUs} />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Approuter;
