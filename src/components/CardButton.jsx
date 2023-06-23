import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import images from "../assets/images";
import { useNavigate } from "react-router-dom";

export default function CardButton(props) {
  const navigate = useNavigate();

  const id = props.id;
  const title = props.title;
  const description = props.description;
  const image = props.image;

  const clickHandler = () => {
    navigate(`${title}`);
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        height: 400,
        background: "#FFF8F0",
        borderRadius: "20px",
      }}
    >
      <CardActionArea onClick={() => clickHandler(id)}>
        <CardMedia
          component="img"
          height="250"
          image={images[`${image}`]}
          alt={title}
          loading="lazy"
        />
        <CardContent sx={{ padding: "5px 10px 5px 10px" }}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
