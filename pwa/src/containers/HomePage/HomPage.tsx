import React, {Component} from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCoffee} from "@fortawesome/free-solid-svg-icons";

import aboutUsImg from "../../assets/img/about-us.jpeg";
import webshopImg from "../../assets/img/webshop-card-img.jpeg";

import MenuSection from "../../components/MenuSection";

import Grid from "@material-ui/core/Grid";
class Homepage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <MenuSection />

        <div className="container webshop section-spacer">
          <div className="row">
            <div className="col-sm-6">
              <span className="align-midle">
                <h5>WEBSHOP</h5>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius est vel condimentum volutpat.
                  Ut dapibus, ex eu auctor sollicitudin.
                </p>
              </span>
            </div>
            <div className="col-sm-6">
              <img src={webshopImg} alt="webshop" />
            </div>
          </div>
        </div>
        <div className="container about-us section-spacer">
          <div className="row">
            <div className="col-sm-6">
              <img src={aboutUsImg} alt="about-us" />
            </div>
            <div className="col-sm-6">
              <span className="align-midle">
                <h5>ABOUT US</h5>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius est vel condimentum volutpat.
                  Ut dapibus, ex eu auctor sollicitudin.
                </p>
              </span>
            </div>
          </div>
        </div>
        <div className="container contact-us section-spacer">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="text-center">Book a table</h1>
              <form>
                <div className="form-group row">
                  <div className="col-md-6">
                    <input type="text" className="form-control" placeholder="Name" />
                  </div>
                  <div className="col-md-6">
                    <input type="text" className="form-control" placeholder="Email" />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-4">
                    <input type="time" className="form-control" placeholder="Time" />
                  </div>
                  <div className="col-md-4">
                    <input type="date" className="form-control" placeholder="Date" />
                  </div>
                  <div className="col-md-4">
                    <input type="number" className="form-control" placeholder="Number of people" />
                  </div>
                </div>
                <button className="btn btn-primary">Book</button>
              </form>
            </div>
          </div>
        </div>
        <div className="container section-spacer" />
        <Footer />
      </div>
    );
  }
}

export default Homepage;
