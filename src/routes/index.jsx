import React from "react";

import HomePage from "../pages/HomePage";
import DataPage from "../pages/ContentPage";

const routes = [
  {
    element: <DataPage />,
    path: "/data/:id",
  },
  {
    element: <HomePage />,
    path: "/",
  },
];

export default routes;
