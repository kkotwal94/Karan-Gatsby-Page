import React, { Component } from "react";
import PropTypes from "prop-types";
import LazyHero from "react-lazy-hero";

class Hero extends Component {
  render() {
    const { imageSrc, parallaxOffset, minHeight, children } = this.props;
    return (
      <LazyHero
        imageSrc={imageSrc}
        parallaxOffset={parallaxOffset}
        transitionDuration={600}
        opacity={0}
        transitionTimingFunction="ease-in-out"
        minHeight={minHeight}
        isCentered
      >
        {children}
      </LazyHero>
    );
  }
}

Hero.defaultProps = {
  parallaxOffset: 0,
  minHeight: "100vh"
};

Hero.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  parallaxOffset: PropTypes.number,
  minHeight: PropTypes.string
};

export default Hero;
