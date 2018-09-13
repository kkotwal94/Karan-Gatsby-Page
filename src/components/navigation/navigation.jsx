import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 430,
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  options: {
    justifyContent: "flex-end"
  },
  title: {
    marginLeft: "8px"
  }
});

class Navigation extends Component {
  render() {
    const { classes, title } = this.props;
    return (
      <AppBar position="absolute" className={classes.appBar}>
        <Grid container>
          <Grid item xs={2}>
            <Toolbar disableGutters className={classes.title}>
              <Typography variant="title" color="inherit" noWrap>
                <Link to="/" style={{ color: "inherit" }}>
                  {title}
                </Link>
              </Typography>
            </Toolbar>
          </Grid>
          <Grid item xs={10}>
            <Toolbar disableGutters className={classes.options}>
              <Link to="/about" style={{ color: "inherit" }}>
                <Button color="inherit">About</Button>
              </Link>
              <Link to="/blog" style={{ color: "inherit" }}>
                <Button color="inherit">Blog</Button>
              </Link>
              <Link to="/resume" style={{ color: "inherit" }}>
                <Button color="inherit">Resume</Button>
              </Link>
            </Toolbar>
          </Grid>
        </Grid>
      </AppBar>
    );
  }
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  title: PropTypes.string
};

export default withStyles(styles, { withTheme: true })(Navigation);
