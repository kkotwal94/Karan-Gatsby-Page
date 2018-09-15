import React, { Fragment, Component } from "react";
import { Hero } from "../components/hero";
import AboutImage from "../images/about.jpg";
import Typography from "@material-ui/core/Typography";

class About extends Component {
  render() {
    return (
      <Fragment>
        <Hero imageSrc={AboutImage} parallaxOffset={100} minHeight={"70vh"}>
          <Typography variant="display2" gutterBottom>
            Display 4
          </Typography>
        </Hero>
        <div>Hello</div>
      </Fragment>
    );
  }
}

export default About;
