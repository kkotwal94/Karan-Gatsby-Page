import React, { Component } from "react";
import { Hero } from "../components/hero";
import FloatingImage from "../images/computer.jpg";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    color: "white",
    position: "relative",
    bottom: "100px"
  },
  title: {
    position: "relative",
    bottom: "100px",
    color: "#111",
    fontFamily: `'Helvetica Neue', sans-serif`,
    fontSize: "150px",
    fontWeight: "bold",
    letterSpacing: "-1px",
    lineHeight: 1,
    textAlign: "center"
  }
};

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Hero imageSrc={FloatingImage} parallaxOffset={100}>
        <Typography variant="display2" gutterBottom className={classes.title}>
          Karan Kotwal
        </Typography>
      </Hero>
    );
  }
}

export default withStyles(styles)(Home);
