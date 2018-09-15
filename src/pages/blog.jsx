import React, { Fragment, Component } from "react";
import { Hero } from "../components/hero";
import BlogImage from "../images/blog.jpg";

class Blog extends Component {
  render() {
    return (
      <Fragment>
        <Hero imageSrc={BlogImage} parallaxOffset={100} minHeight={"80vh"}>
          <h1> Karan Kotwal - Software Developer, Entrepenuer, and Gamer </h1>
        </Hero>
        <div>Hello</div>
      </Fragment>
    );
  }
}

export default Blog;
