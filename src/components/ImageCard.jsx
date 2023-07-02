import { styled } from "@mui/system";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

export const ImageCard = styled(Card)({
  position: "relative",
});

export const ImageCardActionArea = styled(CardActionArea)({
  position: "relative",
});

export const ImageCardActions = styled(CardActions)({
  position: "relative",
});

export const ImageCardContent = styled(CardContent)(
  ({ background, color }) => ({
    position: "relative",
    backgroundColor: background || "#fff",
    color: color || "#000",
  })
);

export const ImageCardMedia = styled(CardMedia)({
  height: "100%",
  width: "100%",
});

export default {
  ImageCard,
  ImageCardActionArea,
  ImageCardActions,
  ImageCardContent,
  ImageCardMedia,
};
