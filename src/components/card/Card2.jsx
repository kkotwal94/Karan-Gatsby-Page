import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  card: {
    display: "flex",
    minHeight: "117px"
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width: "calc(100% - 134px)"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 151
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  playIcon: {
    height: 38,
    width: 38
  }
});

const TechnologyCard = ({ title, classes, description, image, alt, imageTitle, url }) => (
  <Card className={classes.card}>
    <div className={classes.details}>
      <CardContent className={classes.content}>
        <Typography component="h5" variant="h5">
          {title}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
    </div>
    <CardMedia className={classes.cover} image={image} title="Live from space album cover" />
  </Card>
);

export default withStyles(styles, { withTheme: true })(TechnologyCard);
