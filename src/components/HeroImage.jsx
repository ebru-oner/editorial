import { useNavigate } from "react-router-dom";

import { Box, Typography } from "@mui/material";

import images from "../assets/images";

const HeroImage = (props) => {
  const navigate = useNavigate();

  const route = props.route;
  const title = props.title;
  const description = props.description;
  const image = props.img;
  const imageDescription = props.imageDescription;
  const withText = props.withText;

  function clickHandler() {
    navigate(`data/${route}`);
  }

  return (
    <Box sx={{ paddingTop: "2rem" }}>
      <Typography variant="h5">{title}</Typography>
      <Box
        route={route}
        description={description}
        sx={{
          marginTop: "1rem",
          position: "relative",
          width: "100%",
          height: "37.5rem",
          background: `url("${images[`${image}_1000x600`]}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {withText && (
          <Box
            sx={{
              position: "absolute",
              bottom: "-1px",
              right: "-1px",
              height: "8rem",
              width: "16rem",
              padding: "0.5rem",
              backgroundColor: "primary.main",
            }}
            onClick={clickHandler}
          >
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography gutterBottom variant="subtitle1" component="div" noWrap>
              {description}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HeroImage;
