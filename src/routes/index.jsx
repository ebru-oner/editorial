import React from "react";

import HooksGridView from "../pages/HooksGridView";
import HomePage from "../pages/HomePage";

const routes = [
  {
    element: <HooksGridView />,
    path: "/hooks",
  },
  {
    element: <HomePage />,
    path: "/",
  },
];

export default routes;
