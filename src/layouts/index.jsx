import React, { Component, Fragment } from "react";
import { Content } from "../components/content";
import { Header, HeaderLinks } from "../components/header";
import "../styles/main.css";

class MainLayout extends Component {
  render() {
    const { children } = this.props;
    return (
      <Fragment>
        <Header
          color={"transparent"}
          brand="Karan Kotwal"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 300,
            color: "white"
          }}
        />
        <Content>{children}</Content>
      </Fragment>
    );
  }
}

export default MainLayout;
