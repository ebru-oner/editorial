import { Typography, Grid } from "@mui/material";

import images from "../assets/images";

const ContentDetail = (props) => {
  const epilogue = props.epilogue;
  const prologue = props.prologue;
  const main = props.main;
  const image = props.image;
  const imageDescription = props.imageDescription;
  const randomNumber = (Math.floor(Math.random() * 13) + 1) % 2;

  const ImageOnTheLeft = () => {
    return (
      <Grid
        container
        spacing={2}
        sx={{ marginTop: "1rem", marginBottom: "1rem", alignItems: "center" }}
      >
        <Grid item xs={12} md={3}>
          <img
            src={images[`${image}_600x600`]}
            alt={imageDescription}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography variant="body1" sx={{ overflowWrap: "break-word" }}>
            {main}
          </Typography>
        </Grid>
      </Grid>
    );
  };

  const ImageOnTheRight = () => {
    return (
      <Grid
        container
        spacing={2}
        sx={{ marginTop: "1rem", marginBottom: "1rem", alignItems: "center" }}
      >
        <Grid item xs={12} md={9}>
          <Typography variant="body1" sx={{ overflowWrap: "break-word" }}>
            {main}
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <img
            src={images[`${image}_600x600`]}
            alt={imageDescription}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Grid>
      </Grid>
    );
  };

  return (
    <>
      <Typography variant="body1">{epilogue}</Typography>
      {randomNumber === 0 ? <ImageOnTheLeft /> : <ImageOnTheRight />}
      <Typography variant="body1">{prologue}</Typography>
    </>
  );
};

export default ContentDetail;
