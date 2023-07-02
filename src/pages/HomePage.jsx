import * as React from "react";

import CardButton from "../components/CardButton";
import staticData from "../assets/data/introductions.json";
import { Masonry } from "@mui/lab";

const HomePage = () => {
  const items = staticData.introductions.homepage;

  return (
    <Masonry id="use-state-hook-image-list" columns={3} spacing={2}>
      {Object.values(items).map((item) => (
        <CardButton
          key={item.id}
          title={item.title}
          route={item.route}
          description={item.description}
          image={item.img}
        />
      ))}
    </Masonry>
  );
};

export default HomePage;
