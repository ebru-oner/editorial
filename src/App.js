import { Container } from "@mui/material";

import NavigationBar from "./components/NavigationBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Container
        id="main-container"
        maxWidth="md"
        sx={{
          backgroundColor: "secondary.light",
          height: "100%",
          minHeight: "100vh",
          paddingTop: "2%",
          marginTop: "50px",
          display: "flex",
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
