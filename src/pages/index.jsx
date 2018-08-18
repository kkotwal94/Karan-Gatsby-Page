import React, { Component } from "react";
import Layout from "../layouts";
import { Link } from "gatsby";

class Home extends Component {
  render() {
    return (
      <Layout>
        <h1> Welcome to Karan </h1>
        <Link to="/about">About</Link>
      </Layout>
    );
  }
}

export default Home;
