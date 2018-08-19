import React, { Component } from "react";
import { Hero } from "../components/hero";
import FloatingImage from "../images/computer.jpg";

class Home extends Component {
  render() {
    return (
      <Hero imageSrc={FloatingImage} parallaxOffset={100}>
        <h1> Karan Kotwal - Software Developer, Entrepenuer, and Gamer </h1>
      </Hero>
    );
  }
}

export default Home;
