import { useParams } from "react-router-dom";

import { Grid } from "@mui/material";

import staticData from "../assets/data/data.json";
import DataAccordion from "../components/DataAccordion";
import HeroImage from "../components/HeroImage";

const ContentPage = () => {
  let { id } = useParams();

  const item = staticData.posts.byId[id];
  const chapterIds = staticData.posts.byId[id].chapters;
  const chapters = staticData.chapters.byId;

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
        sx={{
          width: "100%",
          marginBottom: "10%",
          overflow: "scroll",
        }}
      >
        <HeroImage title={item.title} image={item.heroimage} withText={false} />
      </Grid>
      <Grid
        id="home-page-grid-hero-image"
        item
        sx={{ width: "100%", marginBottom: "10%", overflow: "scroll" }}
      >
        {chapterIds.map((chapterId, index) => (
          <DataAccordion
            id="use-state-hook-accordion"
            key={index}
            header={chapters[chapterId].title}
            image={chapters[chapterId].image}
            principalText={chapters[chapterId].principaltext}
            quote={chapters[chapterId].quote}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default ContentPage;
