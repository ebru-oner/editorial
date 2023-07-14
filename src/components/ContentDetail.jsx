import { Typography, Box } from "@mui/material";

import images from "../assets/images";

const ContentDetail = (props) => {
  const quote = props.quote;
  const epilogue = props.principalText.epilogue;
  const prologue = props.principalText.prologue;
  const main = props.principalText.main;
  const image = props.image.source;
  const imageDescription = props.image.description;

  const Image = () => {
    return (
      <Box>
        <img
          src={images[`${image}_1600x400`]}
          alt={imageDescription}
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Box>
    );
  };

  const MainText = () => {
    return (
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {main.map((text, index) => (
          <Typography
            key={index}
            variant="body1"
            sx={{ overflowWrap: "break-word" }}
          >
            {text}
          </Typography>
        ))}
      </Box>
    );
  };

  const Quote = () => {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.1rem",
          backgroundColor: "secondary.dark",
          color: "primary.dark",
          padding: "6px",
          opacity: 0.7,
        }}
      >
        <Typography variant="subtitle1" sx={{ overflowWrap: "break-word" }}>
          "{quote.text}""
        </Typography>
        <Typography variant="body1" sx={{ alignSelf: "end" }}>
          {quote.owner}
        </Typography>
      </Box>
    );
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {quote && <Quote />}
      <Typography variant="body1">{prologue}</Typography>
      <MainText />
      <Typography variant="body1">{epilogue}</Typography>
      <Image />
    </Box>
  );
};

export default ContentDetail;
