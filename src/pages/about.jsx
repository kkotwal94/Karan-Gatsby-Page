import React, { Component } from "react";
import Layout from "../layouts";
import { Link } from "gatsby";

class About extends Component {
  render() {
    return (
      <Layout>
        <h1>This is the top page</h1>
        <Link to="/">Home</Link>
      </Layout>
    );
  }
}

export default About;
