import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import useColorRandomizer from "../hooks/useColorRandomizer";

const DataAccordion = (props) => {
  const header = props.header;
  const text = props.text;
  const [initialized, setInitialized] = useState(false);
  const [colorGrpId, setColorGrpId] = useState("");
  const { id, textColorCode, backgroundColorCode } =
    useColorRandomizer(colorGrpId);

  useEffect(() => {
    if (!initialized) setInitialized(true);
    else setColorGrpId(id);
  }, [id, initialized]);

  return (
    <Box id="data-accordion-box">
      <Accordion
        expanded={true}
        sx={{
          color: textColorCode,
          background: backgroundColorCode,
          height: "100%",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="dataAccordion-content"
          id="dataAccordion-header"
        >
          <Typography variant="h5">{header}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="subtitle1">{text}</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
export default DataAccordion;
