import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Typography from "@mui/material/Typography";
import { ImageCard, ImageCardActionArea, ImageCardContent } from "./ImageCard";

import useColorRandomizer from "../hooks/useColorRandomizer";

export default function CardButton(props) {
  const navigate = useNavigate();

  const route = props.route;
  const title = props.title;
  const description = props.description;

  const [initialized, setInitialized] = useState(false);
  const [colorGrpId, setColorGrpId] = useState("");
  const { id, textColorCode, backgroundColorCode } =
    useColorRandomizer(colorGrpId);

  useEffect(() => {
    if (!initialized) setInitialized(true);
    else setColorGrpId(id);
  }, [id, initialized]);

  const clickHandler = () => {
    navigate(`${route}`);
  };

  return (
    <ImageCard id="card-button">
      <ImageCardActionArea onClick={clickHandler}>
        <ImageCardContent
          background={backgroundColorCode}
          color={textColorCode}
        >
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="h6">{description}</Typography>
        </ImageCardContent>
      </ImageCardActionArea>
    </ImageCard>
  );
}
