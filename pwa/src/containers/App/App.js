import React, {Component} from "react";
import "./App.scss";
import "../routers/Approuter";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Approuter from "../routers/Approuter";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Approuter />
        <Navbar />
        <Footer />
      </div>
    );
  }
}

export default App;
