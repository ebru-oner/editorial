import { Container } from "@mui/material";

import NavigationBar from "./components/NavigationBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Container
        maxWidth={"lg"}
        sx={{
          backgroundColor: "primary.light",
          height: "100vh",
          paddingTop: "100px",
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
      </Container>
    </BrowserRouter>
  );
}

export default App;
