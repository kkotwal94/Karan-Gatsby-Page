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
import NodeJSLogo from "../images/nodejs-logo.png";
import ElixirLogo from "../images/elixir-logo.png";
import ServerlessLogo from "../images/serverless-logo.png";
import GraphQLLogo from "../images/graphql-logo.png";
import AWSLogo from "../images/aws-logo.png";
import GCPLogo from "../images/gcp-logo.png";
import JenkinsLogo from "../images/jenkins-logo.png";
import CircleCILogo from "../images/circleci-logo.png";
import TerraformLogo from "../images/terraform-logo.png";

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
      <h3 className={classes.frontEnd}>Front End Technologies</h3>
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
            link={
              "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
            }
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
      <h3 className={classes.frontEnd}>Back End Technologies</h3>
      <Grid container spacing={32}>
        <Grid item xs={12} md={6} lg={3} xl={2}>
          <Card
            title="NodeJS"
            description="JS Server"
            image={NodeJSLogo}
            alt="NodeJS"
            imageTitle="NodeJS"
            link={"https://reactjs.org/"}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3} xl={2}>
          <Card
            title="Elixir"
            description="Erlang Server"
            image={ElixirLogo}
            alt="Elixir"
            imageTitle="Elixir"
            link={"https://reactjs.org/"}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3} xl={2}>
          <Card
            title="GraphQL"
            description=""
            image={GraphQLLogo}
            alt="GraphQL"
            imageTitle="GraphQL"
            link={"https://reactjs.org/"}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3} xl={2}>
          <Card
            title="Serverless"
            description="Lambda"
            image={ServerlessLogo}
            alt="Serverless"
            imageTitle="Serverless"
            link={"https://reactjs.org/"}
          />
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

const Devops = ({ classes }) => (
  <Grid container>
    <Grid item xs={12} className={classes.frontEndContainer}>
      <h3 className={classes.frontEnd}>DevOps Technologies</h3>
      <Grid container spacing={32}>
        <Grid item xs={12} md={6} lg={3} xl={2}>
          <Card
            title="AWS"
            description="EC2, ECS, Lambda, S3"
            image={AWSLogo}
            alt="AWS"
            imageTitle="AWS"
            link={"https://aws.com"}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3} xl={2}>
          <Card
            title="GCP"
            descripiton="Compute Engine, App Engine, Google Storage, Functions"
            image={GCPLogo}
            alt="GCP"
            imageTitle="GCP"
            link={"https://cloud.google.com/"}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3} xl={2}>
          <Card
            title="Jenkins"
            description="Pipeline"
            image={JenkinsLogo}
            alt="Jenkins"
            imageTitle="Jenkins"
            link={"http://jenkins.com/"}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3} xl={2}>
          <Card
            title="CircleCI"
            description="Pipeline"
            image={CircleCILogo}
            alt="CircleCI"
            imageTitle="CircleCI"
            link={"http://jenkins.com/"}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3} xl={2}>
          <Card
            title="Terraform"
            description="Infrastructure Provisioning"
            image={TerraformLogo}
            alt="Terraform"
            imageTitle="Terraform"
            link={"https://www.terraform.io/"}
          />
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

const Introduction = ({ classes }) => (
  <>
    <h3 className={classes.frontEnd}>What am I?</h3>
    <p>
      Trying to find a way to live with utmost freedom, to get away from all
      this on the low, maybe start my own thing, or contribute to something that
      actually makes a difference?
    </p>
  </>
);

const Home = ({ classes }) => (
  <>
    <Hero imageSrc={FloatingImage} parallaxOffset={100}>
      <h1 className={classes.title}>Karan Kotwal</h1>
      <h2 className={classes.subtitle}>
        Programmer, entrepeneur, gamer, blogger
      </h2>
    </Hero>
    <Introduction classes={classes} />
    <Frontend classes={classes} />
    <Backend classes={classes} />
    <Devops classes={classes} />
  </>
);

export default withStyles(styles)(Home);
