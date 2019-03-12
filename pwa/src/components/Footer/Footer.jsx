import React, {Component} from "react";
import "./Footer.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons";

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
            <div className="col-sm-4">
              <p>Follow us on social media</p>
              <FontAwesomeIcon icon={faFacebook} size="2x" style={{marginRight: 0.5 + "em"}} />
              <FontAwesomeIcon icon={faInstagram} size="2x" style={{marginRight: 0.5 + "em"}} />
              <p />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
