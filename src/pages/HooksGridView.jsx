import * as React from "react";

import CardButton from "../components/CardButton";
import staticData from "../assets/data/introductions.json";
import { Masonry } from "@mui/lab";

const HooksGridView = () => {
  const items = staticData.introductions.hooks;

  return (
    <>
      <Masonry id="use-state-hook-image-list" columns={3} spacing={2}>
        {Object.values(items).map((item, index) => (
          <CardButton
            id="hooks-grid-view-cardbutton"
            title={item.title}
            route={item.route}
            description={item.description}
            image={item.img}
            key={index}
          />
        ))}
      </Masonry>
    </>
  );
};

export default HooksGridView;
