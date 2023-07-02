import React from "react";

import HooksGridView from "../pages/HooksGridView";
import HomePage from "../pages/HomePage";
import UseStateHook from "../pages/hooks/UseStateHook";

const routes = [
  {
    element: <HooksGridView />,
    path: "/hooks",
  },
  {
    element: <UseStateHook />,
    path: "/hooks/usestate",
  },
  {
    element: <HomePage />,
    path: "/",
  },
];

export default routes;
