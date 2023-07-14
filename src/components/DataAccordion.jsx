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
  const quote = props.quote;
  const principalText = props.principalText;

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
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="dataAccordion-content"
          id="dataAccordion-header"
          onClick={handleClick}
        >
          <Typography variant="h5">{header}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ContentDetail
            quote={quote}
            principalText={principalText}
            image={image}
          />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
export default DataAccordion;
