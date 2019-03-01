import React, {Component} from "react";
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
              <a className="nav-link">Menu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Shop</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Our Story</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Conact Us</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
