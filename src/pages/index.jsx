import React from "react";
import { Hero } from "../components/hero";
import Grid from "@material-ui/core/Grid";
import FloatingImage from "../images/computer.jpg";
import { withStyles } from "@material-ui/core/styles";
import { Card } from "../components/card";
import ReactLogo from "../images/react-logo.png";
import ES6Logo from "../images/es6-logo.png";
import GatsbyLogo from "../images/gatsby-logo.png";
import HTML5Logo from "../images/html5-logo.png";
import CssLogo from "../images/css-logo.png";
import ApolloLogo from "../images/apollo-logo.png";
import WebpackLogo from "../images/webpack-logo.png";
import ReduxLogo from "../images/redux-logo.png";

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
      <Grid container spacing={32}>
        <Grid item xs={12} md={6} lg={3} xl={2}>
          <Card
            title="ReactJS"
            description="Javascript Framework"
            image={ReactLogo}
            alt="ReactJS"
            imageTitle="ReactJS"
            link={"https://reactjs.org/"}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3} xl={2}>
          <Card
            title="Javascript"
            description="ES6/5"
            image={ES6Logo}
            alt="ES6"
            imageTitle="ES6"
            link={"http://es6-features.org"}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3} xl={2}>
          <Card
            title="Gatsby JS"
            description="Static Site Generator"
            image={GatsbyLogo}
            alt="Gatsby"
            imageTitle="Gatsby"
            link={"https://www.gatsbyjs.org/"}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3} xl={2}>
          <Card
            title="HTML5"
            description="Web"
            image={HTML5Logo}
            alt="HTML5"
            imageTitle="HTML5"
            link={"https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3} xl={2}>
          <Card
            title="CSS3"
            description="Styling"
            image={CssLogo}
            alt="CSS3"
            imageTitle="CSS3"
            link={"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3"}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3} xl={2}>
          <Card
            title="Apollo"
            description="GraphQL Client"
            image={ApolloLogo}
            alt="Apollo"
            imageTitle="Apollo"
            link={"https://github.com/apollographql/apollo-client"}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3} xl={2}>
          <Card
            title="Webpack 4"
            description="Build Tools"
            image={WebpackLogo}
            alt="Webpack"
            imageTitle="Webpack"
            link={"https://webpack.js.org/"}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3} xl={2}>
          <Card
            title="Redux"
            description="State Management"
            image={ReduxLogo}
            alt="Redux"
            imageTitle="Redux"
            link={"https://redux.js.org/"}
          />
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

const Backend = ({ classes }) => (
  <Grid container>
    <Grid item xs={12} className={classes.frontEndContainer}>
      <h3 className={classes.frontEnd}>Back End technologies</h3>
      <Grid container spacing={32} />
    </Grid>
  </Grid>
);

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
