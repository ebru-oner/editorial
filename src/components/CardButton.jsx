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
  const image = props.img;
  const imageDescription = props.imageDescription;

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
        sx={{ height: "14rem" }}
        image={images[`${image}_600x600`]}
      />
      <CardContent sx={{ height: "8rem" }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography gutterBottom variant="subtitle1" component="div" noWrap>
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
