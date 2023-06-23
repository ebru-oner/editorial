import * as React from "react";

import { Grid, Typography } from "@mui/material";

import CardButton from "../components/CardButton";
import staticData from "../assets/data/introductions.json";

const HooksGridView = () => {
  const items = staticData.introductions.hooks;

  return (
    <>
      <Typography>
        You cannot put a hook inside an if stmt, loop, function,
      </Typography>
      <Grid container spacing={2}>
        {Object.values(items).map((item) => (
          <Grid key={item.id} item xs={4}>
            <CardButton
              title={item.title}
              description={item.description}
              image={item.img}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default HooksGridView;