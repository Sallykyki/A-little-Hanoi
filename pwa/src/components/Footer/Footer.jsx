import React, {Component} from "react";
import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <h5 className="logo-text">A litle Hanoi</h5>
              <p>Contact us</p>
            </div>
            <div className="col-sm-4">Follow us on social mdeia</div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;