import React, {Component} from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./HomePage.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCoffee} from "@fortawesome/free-solid-svg-icons";
import dishCardImg from "../../assets/img/dish-card-img.jpeg";
import drinkCardImg from "../../assets/img/drink-card-img.jpeg";
import cakeCardImg from "../../assets/img/cake-card-img.jpeg";
import aboutUsImg from "../../assets/img/about-us.jpeg";
import webshopImg from "../../assets/img/webshop-card-img.jpeg";
class Homepage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container unique-points section-spacer">
          <div className="row text-center ">
            <div className="col-sm-4">
              <h5>
                <FontAwesomeIcon icon={faCoffee} /> Point 1
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius est vel condimentum volutpat.
              </p>
            </div>
            <div className="col-sm-4">
              <h5>
                <FontAwesomeIcon icon={faCoffee} /> Point 2
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius est vel condimentum volutpat.
              </p>
            </div>
            <div className="col-sm-4">
              <h5>
                <FontAwesomeIcon icon={faCoffee} /> Point 3
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius est vel condimentum volutpat.
              </p>
            </div>
          </div>
        </div>
        <div className="container menu section-spacer">
          <h1 className="text-center">Our Menu</h1>
          <div className="row">
            <div className="col-sm-4">
              <div className="card">
                <img className="card-img-top" src={dishCardImg} alt="dish-menu" />
                <div className="card-body">
                  <h3 className="card-title text-center">Dish</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius est vel condimentum
                    volutpat. Ut dapibus, ex eu auctor sollicitudin.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <img className="card-img-top" src={cakeCardImg} alt="cake-menu" />
                <div className="card-body">
                  <h3 className="card-title text-center">Cake</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius est vel condimentum
                    volutpat. Ut dapibus, ex eu auctor sollicitudin.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <img className="card-img-top" src={drinkCardImg} alt="drink-menu" />
                <div className="card-body">
                  <h3 className="card-title text-center">Drink</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius est vel condimentum
                    volutpat. Ut dapibus, ex eu auctor sollicitudin.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                <div class="form-group row">
                  <div class="col-md-6">
                    <input type="text" className="form-control" placeholder="Name" />
                  </div>
                  <div class="col-md-6">
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
                    <input type="nmber" className="form-control" placeholder="Number of people" />
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
