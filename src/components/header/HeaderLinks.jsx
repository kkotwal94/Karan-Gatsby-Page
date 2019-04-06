import React, { Component } from "react";
import { Link } from "gatsby";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import headerLinksStyle from "./HeaderLinksStyle";
import { Info, ChatBubble, AssignmentInd } from "@material-ui/icons";

class HeaderLinks extends Component {
  render() {
    const { classes } = this.props;
    return (
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <Link to="/about" style={{ color: "inherit" }}>
            <Button color="inherit" className={classes.navLink}>
              <Info className={classes.icon} />
              About
            </Button>
          </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Link to="/blog" style={{ color: "inherit" }}>
            <Button color="inherit" className={classes.navLink}>
              <ChatBubble className={classes.icon} />
              Blog
            </Button>
          </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Link to="/resume" style={{ color: "inherit" }}>
            <Button color="inherit" className={classes.navLink}>
              <AssignmentInd className={classes.icon} />
              Resume
            </Button>
          </Link>
        </ListItem>
      </List>
    );
  }
}

export default withStyles(headerLinksStyle)(HeaderLinks);
