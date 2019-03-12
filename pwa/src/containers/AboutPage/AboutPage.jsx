import React, {Component} from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import story1Img from "../../assets/img/story1.jpeg";
import story2Img from "../../assets/img/story2.jpg";
import story3Img from "../../assets/img/story3.jpeg";
import "./AboutPage.scss";
class AboutPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container text-center section-spacer">
          <h1>Our story</h1>
          <p>
            A little Hanoi cafe is a story which we desire to tell ourselves - people were born and grew up in Hanoi -
            as well as foreign friends. The way we tell the story is through Hanoian's coffee. Hanoians love enjoying
            coffee in the narrow streets of Hanoi's old quarter. Some people consider drinking coffee as an art that
            covers a long story, some just sip a cup of coffee and think about life. With a cup of coffee, Hanoians
            leave the busy life behind and savour every moment of life. Therefore, we would like to bring an ancient
            corner of Hanoi - A little Hanoi cafe - to the centre of Helsinki where people can taste the coffee and feel
            the soul.
          </p>
          <div className="row story section-spacer-sm">
            <div className="col-sm 4">
              <img src={story1Img} alt="Hanoi img" />
            </div>
            <div className="col-sm 4">
              <img src={story2Img} alt="Hanoi img" />
            </div>
            <div className="col-sm 4">
              <img src={story3Img} alt="Hanoi img" />
            </div>
          </div>
        </div>
        <div className="container section-spacer">
          <h1 className="text-center">Our team</h1>
        </div>
        <Footer />
      </div>
    );
  }
}

export default AboutPage;
