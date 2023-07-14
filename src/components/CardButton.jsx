import * as React from "react";
import { useNavigate } from "react-router-dom";

import Typography from "@mui/material/Typography";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";

import images from "../assets/images";

export default function CardButton(props) {
  const navigate = useNavigate();

  const route = props.route;
  const title = props.title;
  const description = props.description;
  const image = props.image.source;
  const imageDescription = props.image.description;

  const clickHandler = () => {
    navigate(`data/${route}`);
  };

  return (
    <Card
      sx={{
        height: "25rem",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        alt={imageDescription}
        sx={{ height: "14rem", cursor: "pointer" }}
        image={images[`${image}_600x600`]}
        onClick={clickHandler}
      />
      <CardContent sx={{ height: "8rem" }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography gutterBottom variant="body1" component="div" noWrap>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="secondary">
          Share
        </Button>
        <Button onClick={clickHandler} size="small" color="secondary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
