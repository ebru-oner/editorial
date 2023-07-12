import NavigationBar from "./components/NavigationBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes";

import backgroundImage from "./assets/images/bg.webp";
import { Box } from "@mui/system";
import Footer from "./components/Footer";
import { Grid } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <Box
        sx={{
          backgroundImage: `url("${backgroundImage}")`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <NavigationBar />
        <Box
          item
          xs={12}
          id="main-container"
          sx={{
            width: "90%",
            backgroundColor: "primary.light",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "5rem",
            marginBottom: "-1px",
          }}
        >
          <Routes>
            {routes.map((route) => {
              return (
                <Route
                  path={route.path}
                  element={route.element}
                  key={route.path}
                />
              );
            })}
          </Routes>
        </Box>
        <Footer />
      </Box>
    </BrowserRouter>
  );
}

export default App;
