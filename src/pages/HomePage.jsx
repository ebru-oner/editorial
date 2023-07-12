import React from "react";

import { Grid } from "@mui/material";

import staticData from "../assets/data/data.json";
import CardButton from "../components/CardButton";
import HeroImage from "../components/HeroImage";

const HomePage = () => {
  const items = staticData.summaries;
  const itemSize = items.allIds.length - 1;
  const latestPost = staticData.summaries.allIds[itemSize];

  return (
    <Grid
      container
      id="home-page-grid-container"
      sx={{
        justifyContent: "center",
        alignItems: "center",
        width: "90%",
        height: "90%",
        overflow: "scroll",
      }}
    >
      <Grid
        id="home-page-grid-hero-image"
        item
        sx={{ width: "100%", marginBottom: "10%" }}
      >
        <HeroImage
          title={items.byId[latestPost].title}
          route={items.byId[latestPost].route}
          description={items.byId[latestPost].description}
          img={items.byId[latestPost].img}
          withText={true}
        />
      </Grid>
      <Grid id="home-page-grid-topic-cards" item sx={{ width: "100%" }}>
        <Grid container spacing={8}>
          {Object.values(items.byId).map((item, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
              key={index}
              sx={{ width: "100%" }}
            >
              <CardButton
                img={item.img}
                route={item.route}
                title={item.title}
                description={item.description}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomePage;
