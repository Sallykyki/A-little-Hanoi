import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./Navbar.scss";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark navbar-bg">
        <a className="navbar-brand logo-text"> A little Hanoi</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/menu" className="nav-link">
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Webshop
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/our-story" className="nav-link">
                Our Story
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact-us" className="nav-link">
                Conact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
