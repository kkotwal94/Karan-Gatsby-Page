import React, { Component, Fragment } from "react";
import Helmet from "react-helmet";
import { Navigation } from "../components/navigation";
import { Content } from "../components/content";
import { withStyles } from "@material-ui/core/styles";
import "../styles/main.css";

class MainLayout extends Component {
  render() {
    console.log("In Main Layout");
    const { children } = this.props;
    return (
      <Fragment>
        <Navigation title="Karan Kotwal" />
        <Content>{children}</Content>
      </Fragment>
    );
  }
}

export default MainLayout;
