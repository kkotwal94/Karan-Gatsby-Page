import React from "react";
import { Hero } from "../components/hero";
import Grid from "@material-ui/core/Grid";
import FloatingImage from "../images/computer.jpg";
import { withStyles } from "@material-ui/core/styles";
import { Card } from "../components/card";
import ReactLogo from "../images/react-logo.png";

const styles = {
  root: {
    color: "white",
    position: "relative",
    bottom: "100px"
  },
  title: {
    position: "relative",
    bottom: "50px",
    color: "#111",
    fontSize: "100px",
    fontWeight: "bold",
    letterSpacing: "-1px",
    lineHeight: 1,
    textAlign: "center"
  },
  subtitle: {
    position: "relative",
    bottom: "50px",
    color: "#111",
    textAlign: "center"
  },
  frontEndContainer: {
    marginLeft: "40px",
    marginRight: "40px"
  },
  frontEnd: {
    textAlign: "center",
    padding: "20px"
  }
};

const Frontend = ({ classes }) => (
  <Grid container>
    <Grid item xs={12} className={classes.frontEndContainer}>
      <h3 className={classes.frontEnd}>Front End technologies</h3>
      <Grid container>
        <Grid item xs={4}>
          <Card
            title="ReactJS"
            description="Front End framework to help create single page web applications, and server side rendered apps. A Framework that relies on dom diffing to generate a fast / rich web experience"
            image={ReactLogo}
            alt="ReactJS"
            imageTitle="ReactJS"
            link={"https://reactjs.org/"}
          />
        </Grid>
        <Grid item xs={4}>
          Javascript / ES6
        </Grid>
        <Grid item xs={4}>
          GatsbyJS / NextJS
        </Grid>
        <Grid item xs={4}>
          HTML 5
        </Grid>
        <Grid item xs={4}>
          CSS
        </Grid>
        <Grid item xs={4}>
          Web Components
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

const Backend = ({ classes }) => <Grid container>Backend Technologies</Grid>;

const Devops = ({ classes }) => <Grid container>Devops</Grid>;

const Projects = ({ classes }) => <Grid container>Projects</Grid>;

const Home = ({ classes }) => (
  <>
    <Hero imageSrc={FloatingImage} parallaxOffset={100}>
      <h1 className={classes.title}>Karan Kotwal</h1>
      <h2 className={classes.subtitle}>Programmer, entrepeneur, gamer, blogger</h2>
    </Hero>
    <Frontend classes={classes} />
    <Backend classes={classes} />
    <Devops classes={classes} />
    <Projects classes={classes} />
  </>
);

export default withStyles(styles)(Home);
