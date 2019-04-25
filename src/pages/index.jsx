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
import GraphQLLogo from "../images/graphql-logo.png";
import CPlusPlusLogo from "../images/cplusplus-logo.png";
import AWSLogo from "../images/aws-logo.png";
import CircleCILogo from "../images/circleci-logo.png";
import CypressLogo from "../images/cypress-logo.png";
import DigitalOceanLogo from "../images/digitalocean-logo.png";
import DockerLogo from "../images/docker-logo.png";
import GCPLogo from "../images/gcp-logo.png";
import JenkinsLogo from "../images/jenkins-logo.png";
import KubernetesLogo from "../images/kubernetes-logo.svg";
import MySQLLogo from "../images/sql-logo.png";
import PostgreSQLLogo from "../images/postgresql-logo.png";
import MongoDBLogo from "../images/mongodb-logo.jpg";

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
      <Grid container spacing={32}>
        <Grid item xs={12} md={6} lg={3} xl={2}>
          <Card
            title="NodeJS"
            description="V8 Javascript"
            image={NodeJSLogo}
            alt="NodeJS"
            imageTitle="NodeJS"
            link={"https://nodejs.org/en/"}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3} xl={2}>
          <Card
            title="Elixir"
            description="Erlang based server"
            image={ElixirLogo}
            alt="Elixir"
            imageTitle="Elixir"
            link={"https://elixir-lang.org/"}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3} xl={2}>
          <Card
            title="C++ / C"
            description=""
            image={CPlusPlusLogo}
            alt="Cplusplus"
            imageTitle="Cplusplus"
            link={"http://www.cplusplus.com/"}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3} xl={2}>
          <Card
            title="GraphQL"
            description="Schema based data transport"
            image={GraphQLLogo}
            alt="GraphQL"
            imageTitle="GraphQL"
            link={"https://graphql.org/"}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3} xl={2}>
          <Card
            title="Apollo Server"
            description="Graphql Node Server"
            image={ApolloLogo}
            alt="Apollo Server"
            imageTitle="Apollo Server"
            link={"https://www.apollographql.com/docs/apollo-server/"}
          />
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

const Devops = ({ classes }) => (
  <Grid container>
    <Grid item xs={12} className={classes.frontEndContainer}>
      <h3 className={classes.frontEnd}>Devops / Automation</h3>
      <Grid container spacing={32}>
        <Grid item xs={12} md={6} lg={3} xl={2}>
          <Card
            title="Docker"
            description="Containerization VM"
            image={DockerLogo}
            alt="Docker"
            imageTitle="Docker"
            link={"https://www.docker.com/"}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3} xl={2}>
          <Card
            title="Kubernetes"
            description="Container Orchestration"
            image={KubernetesLogo}
            alt="Kubernetes"
            imageTitle="Kubernetes"
            link={"https://kubernetes.io/"}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3} xl={2}>
          <Card
            title="Cypress"
            description="E2E Testing Framework"
            image={CypressLogo}
            alt="Cypress"
            imageTitle="Cypress"
            link={"https://cypress.io"}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3} xl={2}>
          <Card
            title="Jenkins"
            description="Build / Deploy Pipeline"
            image={JenkinsLogo}
            alt="Jenkins"
            imageTitle="Jenkins"
            link={"https://jenkins.io/"}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3} xl={2}>
          <Card
            title="CircleCI"
            description="Build / Deploy Pipeline"
            image={CircleCILogo}
            alt="CircleCI"
            imageTitle="CircleCI"
            link={"https://circleci.com/"}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3} xl={2}>
          <Card
            title="AWS Platform"
            description="Amazon Web Services"
            image={AWSLogo}
            alt="AWS"
            imageTitle="AWS"
            link={"https://amazon.com"}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3} xl={2}>
          <Card
            title="GCP Platform"
            description="Google Cloud Platform"
            image={GCPLogo}
            alt="GCP"
            imageTitle="GCP"
            link={"https://cloud.google.com/"}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3} xl={2}>
          <Card
            title="Digital Ocean"
            description="Cloud Platform"
            image={DigitalOceanLogo}
            alt="Digital Ocean"
            imageTitle="Digital Ocean"
            link={"https://www.digitalocean.com/"}
          />
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

const Databases = ({ classes }) => (
  <Grid container>
    <Grid item xs={12} className={classes.frontEndContainer}>
      <h3 className={classes.frontEnd}>Databases</h3>
      <Grid container spacing={32}>
        <Grid item xs={12} md={6} lg={3} xl={2}>
          <Card
            title="PostgreSQL"
            description="Interpretation of SQL"
            image={PostgreSQLLogo}
            alt="PostgreSQL"
            imageTitle="PostgreSQL"
            link={"https://www.postgresql.org/"}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3} xl={2}>
          <Card
            title="SQL"
            description=""
            image={MySQLLogo}
            alt="SQL"
            imageTitle="SQL"
            link={"https://www.mysql.com/"}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3} xl={2}>
          <Card
            title="MongoDB"
            description="NoSQL Database"
            image={MongoDBLogo}
            alt="MongoDB"
            imageTitle="MongoDB"
            link={"https://www.mongodb.com/"}
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
      Trying to find a way to live with utmost freedom, to get away from all this on the low, maybe
      start my own thing, or contribute to something that actually makes a difference?
    </p>
  </>
);

const Home = ({ classes }) => (
  <>
    <Hero imageSrc={FloatingImage} parallaxOffset={100}>
      <h1 className={classes.title}>Karan Kotwal</h1>
      <h2 className={classes.subtitle}>Programmer, entrepeneur, gamer, blogger</h2>
    </Hero>
    <Introduction classes={classes} />
    <Frontend classes={classes} />
    <Backend classes={classes} />
    <Devops classes={classes} />
    <Databases classes={classes} />
  </>
);

export default withStyles(styles)(Home);
