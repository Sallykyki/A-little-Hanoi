import React, {Component} from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./ContactPage.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt, faMobileAlt, faEnvelopeOpen} from "@fortawesome/free-solid-svg-icons";

class ContactPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1 className="text-center section-spacer"> Contact us</h1>
        <div className="container section-spacer">
          <div className="row">
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <p>
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> Pihkatie, Helsinki
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faMobileAlt} /> 04 444 2117
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faEnvelopeOpen} />
                    <a href="mailto:contact@alittle-hanoi.fi"> contact@alittle-hanoi.fi</a>
                  </p>
                  <h3 className="section-spacer-sm">Opening time:</h3>
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>Mon-Thu</td>
                        <td>07:00 - 21:00</td>
                      </tr>
                      <tr>
                        <td>Fri</td>
                        <td>07:00 - 22:00</td>
                      </tr>
                      <tr>
                        <td>Sat</td>
                        <td>09:00 - 22:00</td>
                      </tr>
                      <tr>
                        <td>Sun</td>
                        <td>10:00 - 20:00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <iframe
                src="https://maps.google.com/maps?q=chicago&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                style={{border: 0}}
              />
            </div>
          </div>
        </div>
        <div className="container section-spacer" />
        <Footer />
      </div>
    );
  }
}

export default ContactPage;
