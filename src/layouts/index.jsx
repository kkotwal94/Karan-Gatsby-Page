import React, { Component, Fragment } from "react";
import Helmet from "react-helmet";
import { Navigation } from "../components/navigation";

class MainLayout extends Component {
  render() {
    console.log("In Main Layout");
    const { children } = this.props;
    return (
      <Fragment>
        <Navigation title="Karan Kotwal" />
        {children}
      </Fragment>
    );
  }
}

export default MainLayout;
