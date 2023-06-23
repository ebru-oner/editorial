import * as React from "react";

import CardButton from "../components/CardButton";
import staticData from "../assets/data/introductions.json";
import { Grid } from "@mui/material";

const HomePage = () => {
  const items = staticData.introductions.homepage;

  return (
    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
      {Object.values(items).map((item) => (
        <Grid
          key={item.id}
          item
          xs={6}
          sx={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <CardButton
            id={item.id}
            title={item.title}
            description={item.description}
            image={item.img}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default HomePage;