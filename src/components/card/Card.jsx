import React from "react";
import { Link } from "gatsby";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const TechnologyCard = ({ title, description, image, alt, imageTitle, link }) => (
  <Card>
    <CardActionArea>
      <CardMedia component="img" alt={alt} height={140} image={image} title={imageTitle} />
      <CardContent>
        <h5>{title}</h5>
        <p>{description}</p>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <a href={link}>
        <Button size="small" color="primary">
          View
        </Button>
      </a>
    </CardActions>
  </Card>
);

export default TechnologyCard;
