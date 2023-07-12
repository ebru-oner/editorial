import React, { useState } from "react";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import ContentDetail from "./ContentDetail";

const DataAccordion = (props) => {
  const [open, setOpen] = useState(true);

  const header = props.header;
  const image = props.image;
  const imageDescription = props.imageDescription;
  const prologue = props.prologue;
  const epilogue = props.epilogue;
  const main = props.main;
  function handleClick() {
    setOpen((pre) => !pre);
  }
  return (
    <Box id="data-accordion-box">
      <Accordion
        expanded={open}
        sx={{
          height: "100%",
          marginBottom: "2rem",
        }}
        onClick={handleClick}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="dataAccordion-content"
          id="dataAccordion-header"
        >
          <Typography variant="h5">{header}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ContentDetail
            prologue={prologue}
            epilogue={epilogue}
            main={main}
            image={image}
            imageDescription={imageDescription}
          />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
export default DataAccordion;
