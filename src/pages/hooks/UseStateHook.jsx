import { Box } from "@mui/material";
import Masonry from "@mui/lab/Masonry";

import staticData from "../../assets/data/introductions.json";
import DataAccordion from "../../components/DataAccordion";

const UseStateHook = (props) => {
  //what if no details, no id, ...
  const items = staticData.introductions.hooks;
  const useStateData = items.find(
    (item) => item.title.toLowerCase() === "usestate"
  );

  return (
    <Box id="use-state-hook-box">
      <Masonry id="use-state-hook-image-list" columns={3} spacing={2}>
        {useStateData.details.map((item, index) => (
          <DataAccordion
            id="use-state-hook-accordion"
            key={index}
            header={item.header}
            text={item.text}
            route={item.route}
          />
        ))}
      </Masonry>
    </Box>
  );
};

export default UseStateHook;
